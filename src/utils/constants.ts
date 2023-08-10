import { Employee } from ".";

export const fakeData: Employee[] = [
  {
    id: "test1",
    firstName: "John",
    middleName: "Sena",
    lastName: "Doe",
    positionTitle: "developer",
    status: "Active",
    locationCity: "Cityville",
    address: "123 Main St",
    dateBirth: "1990-01-15",
    telephone: "555-1234",
    hireDate: "2023-08-01",
    email: "john.doe@example.com",
    salary: "75000",
    timeInPosition: "2 years",
  },
  {
    id: "test2",
    firstName: "Jane",
    middleName: "Lee",
    lastName: "Smith",
    positionTitle: "developer",
    status: "Active",
    locationCity: "Townsville",
    address: "456 Elm St",
    dateBirth: "1988-05-20",
    telephone: "555-5678",
    hireDate: "2023-07-15",
    email: "jane.smith@example.com",
    salary: "65000",
    timeInPosition: "1 year",
  },
];

export const prefixMoney = "$";
export const suffixYear = " year";
export const decimalScaleValue = 0;
export const thousandSeparatorValue = ".";
export const decimalSeparatorValue = ",";
