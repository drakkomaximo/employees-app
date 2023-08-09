export interface Employee {
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  locationCity?: string;
  address?: string;
  dateBirth?: string;
  telephone?: string;
  positionTitle?: EmployeePosition;
  hireDate?: string;
  email?: string;
  salary?: string;
  timeInPosition?: string;
  dateArrival?: string; // Agregada correctamente
  status: EmployeeStatus; // Agregada correctamente
}

export type EmployeeStatus = 'Active' | 'InActive'
export type EmployeePosition = 'developer' | 'counter' | 'manager' | ''