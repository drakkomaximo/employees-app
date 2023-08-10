import { FC, useEffect, useContext } from "react";
import { EmployeeForm, Loader } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import { useFakeApi } from "../hooks";
import EmployeeContext from "../context/employeeContext";
import { notification } from "../utils/notifications";

export const EmployeeFormPage: FC = () => {
  const navigate = useNavigate()
  const { employeeId } = useParams();
  const { getEmployeeById, isloading } = useFakeApi();
  const { employee, counter, resetCounter } = useContext(EmployeeContext);

  useEffect(() => {
    if (employeeId) {
      if(!employee){
        getEmployeeById(employeeId); 
      }else{
        resetCounter()
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employeeId, employee, getEmployeeById]);

  useEffect(() => {
    if (!employee && counter === 3) {
      resetCounter()
      navigate('/')
      notification({
        type: 'error',
        text: 'User not found'
      })
    }
  }, [counter, employee, resetCounter, navigate]);

  return isloading ? <Loader /> : !employee ? <Loader/> : <EmployeeForm />;
};
