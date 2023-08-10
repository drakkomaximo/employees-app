import { z } from "zod";
import { cityOptions } from ".";

export const employeeSchema = z.object({
  firstName: z.string().nonempty("First Name is required"),
  lastName: z.string().nonempty("Last Name is required"),
  locationCity: z.string().refine((value) => cityOptions.includes(value.toLowerCase()), {
    message: 'Location City must be a valid city',
  }),
  address: z.string().min(1, "Address is required"),
  dateBirth: z.string().min(1, "Date Birth is required"),
  telephone: z.string().min(1, "Telephone is required"),
  positionTitle: z.enum(["developer", "counter", "manager"], {
    errorMap: () => ({ message: 'Invalid Position Title' })
  }),
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  salary: z.string().min(1, "Salary is required"),
  timeInPosition: z.string(),
  hireDate: z.string().min(1, "Hire Date is required"),
});
