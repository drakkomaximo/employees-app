import { FC, useEffect, useContext } from "react";
import { EmployeeForm, Loader } from "../components";
import { useParams } from "react-router-dom";
import { useFakeApi } from "../hooks";
import EmployeeContext from "../context/employeeContext";

export const EmployeeFormPage: FC = () => {
  const { employeeId } = useParams();
  const { getEmployeeById, isloading } = useFakeApi();
  const { employee } = useContext(EmployeeContext);

  useEffect(() => {
    if (employeeId) {
      !employee && getEmployeeById(employeeId);
    }
  }, [employeeId, employee, getEmployeeById]);

  return isloading ? <Loader /> : <EmployeeForm />;
};
