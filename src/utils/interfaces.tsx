export interface Employee {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  locationCity: string;
  address: string;
  dateBirth: string;
  telephone: string;
  positionTitle: EmployeePosition;
  hireDate: string;
  email: string;
  salary: string;
  timeInPosition: string;
  status: EmployeeStatus;
}

export type EmployeeStatus = 'Active' | 'InActive'
export type EmployeePosition = 'developer' | 'counter' | 'manager' | ''