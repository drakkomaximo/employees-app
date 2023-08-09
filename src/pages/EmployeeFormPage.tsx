import { FC, useEffect, useContext } from 'react';
import { EmployeeForm } from "../components";
import { useParams } from "react-router-dom";
import { useFakeApi } from '../hooks';
import EmployeeContext from '../context/employeeContext';

export const EmployeeFormPage: FC = () => {
  const { employeeId } = useParams();
  const { getEmployeeById, isloading } = useFakeApi()
  const { employee } = useContext(EmployeeContext)

  useEffect(() => {
    if(employeeId){
      !employee && getEmployeeById(employeeId)
    }
  }, [employeeId, employee, getEmployeeById])

  return isloading ? (<h1>..lo</h1>) : <EmployeeForm />;
};
