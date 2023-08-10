import { z } from "zod";
import { addressKeywords, calculateAgeInYears, cityOptions, extractYearsFromTimeInPosition, prefixMoney } from ".";

const isAdult = (value: string): boolean => {
  const today = new Date();
  const minAdultAge = 18;
  const birthDate = new Date(value);
  const age = today.getFullYear() - birthDate.getFullYear();
  birthDate.setFullYear(today.getFullYear());
  return age >= minAdultAge || (age === minAdultAge && today >= birthDate);
};

const isHireDateValid = (birthDate: string, hireDate: string): boolean => {
  const minHireAge = 18;
  const age =
    new Date(hireDate).getFullYear() - new Date(birthDate).getFullYear();
  const hireDateObj = new Date(hireDate);
  hireDateObj.setFullYear(new Date(birthDate).getFullYear());
  return (
    age >= minHireAge ||
    (age === minHireAge && hireDateObj >= new Date(birthDate))
  );
};

const locationCitySchema = z
  .string()
  .refine((value) => cityOptions.includes(value.toLowerCase()), {
    message: "Location City must be a valid city",
  });

const positionTitleSchema = z.enum(["developer", "counter", "manager"], {
  errorMap: () => ({ message: "Invalid Position Title" }),
});

const salarySchema = z
  .string()
  .refine((value) => value.trim().length > 0, {
    message: "Salary is required",
  })
  .refine(
    (value) => {
      const numValue = parseFloat(`${value.split(prefixMoney)[1]}`);
      return !isNaN(numValue) && numValue > 0;
    },
    {
      message: "Salary must be greater than 0",
    }
  );

const telephoneSchema = z
  .string()
  .refine((value) => value.trim().length > 0, {
    message: "Telephone is required",
  })
  .refine(
    (value) => {
      if (value.startsWith("57")) {
        return /^(\+57|0057|57)[1-9]\d{9}$/.test(value);
      }
      return true;
    },
    {
      message: "Invalid number in Colombia",
    }
  );

const addressValidator = z.string().refine(
  (value) => {
    const convertedAddress = value.trim().toLowerCase();
    for (const keyword of addressKeywords) {
      const keywordWithSpace = keyword.toLowerCase();
      if (convertedAddress.startsWith(keywordWithSpace)) {
        return true;
      }
    }
    return false;
  },
  {
    message: "Address invalid format",
  }
);

export const employeeSchema = z
  .object({
    firstName: z.string().nonempty("First Name is required"),
    lastName: z.string().nonempty("Last Name is required"),
    locationCity: locationCitySchema,
    address: addressValidator,
    telephone: telephoneSchema,
    positionTitle: positionTitleSchema,
    email: z.string().email("Invalid email format").min(1, "Email is required"),
    salary: salarySchema,
    timeInPosition: z.string().nonempty("Time In Position is required and depend of Hire Date"),
    dateBirth: z.string().refine((value) => isAdult(value), {
      message: "You must be at least 18 years old",
    }),
    hireDate: z
      .string()
      .nonempty("Hire Date is required and depend of Date Birth"),
  })
  .partial()
  .superRefine(({ dateBirth, hireDate }, ctx) => {
    if (!isHireDateValid(dateBirth!, hireDate!)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["hireDate"],
        message:
          "Hire date must be valid and at least 18 years after birth date",
      });
    }
  })
  .superRefine(({ hireDate, timeInPosition}, ctx) => {
    if (extractYearsFromTimeInPosition(timeInPosition!) > calculateAgeInYears(hireDate!)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["timeInPosition"],
        message:
          "Must be less than or equal to the hire date in years",
      });
    }
  })
  ;
