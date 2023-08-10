import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';
import { Employee, fakeData } from "../utils";

interface EmployeeContextProps {
  counter: number;
  incrementCounter: () => void;
  resetCounter: () => void;
  employee: Employee | null;
  employees: Employee[];
  addEmployee: (newEmployee: Employee) => void;
  updateEmployee: (updatedEmployee: Employee) => void;
  deleteEmployee: (employeeId: string) => void;
  getEmployeeById: (employeeId: string) => void;
  cleanEmployee: () => void;
}

interface EmployeeProviderProps {
  children: ReactNode;
}

const EmployeeContext = createContext({} as EmployeeContextProps);

export const EmployeeProvider: FC<EmployeeProviderProps> = ({ children }) => {
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const savedEmployees = localStorage.getItem("employees");
    if (savedEmployees) {
      if (JSON.parse(savedEmployees).length > 0) {
        setEmployees(JSON.parse(savedEmployees));
      } else {
        setEmployees(fakeData);
      }
    } else {
      setEmployees(fakeData); // Initial empty array
    }
  }, [setEmployees]);

  const addEmployee = (newEmployee: Employee) => {
    const formattedEmployee: Employee = {
      ...newEmployee,
      id: uuid(),
      status: 'Active'
    } 
    setEmployees([...employees, formattedEmployee]);
    localStorage.setItem(
      "employees",
      JSON.stringify([...employees, formattedEmployee])
    );
  };

  const updateEmployee = (updatedEmployee: Employee) => {
    const updatedEmployees = employees.map((emp) =>
      emp.id === updatedEmployee.id ? updatedEmployee : emp
    );
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  const deleteEmployee = (employeeId: string) => {
    const updatedEmployees = employees.filter((emp) => emp.id !== employeeId);
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  const getEmployeeById = (employeeId: string) => {
    const employee = employees.find((emp) => emp.id === employeeId);
    setEmployee(employee || null);
    incrementCounter()
  };

  const cleanEmployee = () => {
    setEmployee(null);
  };

  const incrementCounter = () =>{
    console.log(counter)
    setCounter(counter + 1)
  }

  const resetCounter = () =>{
    setCounter(0)
  }

  const contextValue = {
    counter,
    employee,
    employees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeById,
    cleanEmployee,
    incrementCounter,
    resetCounter
  };

  return (
    <EmployeeContext.Provider value={contextValue}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContext;
