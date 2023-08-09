import { useContext, useState } from "react";
import EmployeeContext from "../context/employeeContext";
import { Employee, simulateApiCall } from "../utils";

export const useFakeApi = () => {
  const {
    employees,
    addEmployee: contextAddEmployee,
    updateEmployee: contextUpdateEmployee,
    deleteEmployee: contextDeleteEmployee,
    getEmployeeById: contextGetEmployeeById,
  } = useContext(EmployeeContext);
  const [isloading, setIsloading] = useState(false);
  const fetchEmployees = async () => {
    try {
      setIsloading(true);
      return await simulateApiCall<Employee[]>(employees);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  const addEmployee = async (newEmployee: Employee) => {
    try {
      setIsloading(true);
      const addedEmployee = await simulateApiCall<Employee>(newEmployee);
      contextAddEmployee(addedEmployee);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  const updateEmployee = async (updatedEmployee: Employee) => {
    try {
      setIsloading(true);
      const updatedData = await simulateApiCall<Employee>(updatedEmployee);
      contextUpdateEmployee(updatedData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  const deleteEmployee = async (employeeId: string) => {
    try {
      setIsloading(true);
      await simulateApiCall<string>(employeeId);
      contextDeleteEmployee(employeeId);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  const getEmployeeById = async (employeeId: string) => {
    try {
      setIsloading(true);
      await simulateApiCall<string>(employeeId);
      contextGetEmployeeById(employeeId);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  return {
    isloading,
    fetchEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeById,
  };
};
