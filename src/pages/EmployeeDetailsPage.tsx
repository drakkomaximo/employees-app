import { useEffect, FC, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFakeApi } from "../hooks";
import EmployeeContext from "../context/employeeContext";
import { EmployeeDetails, Loader } from "../components";
import { notification } from "../utils/notifications";

export const EmployeeDetailsPage: FC = () => {
  const navigate = useNavigate();
  const { employeeId } = useParams<{ employeeId: string }>();
  const { employee, counter, resetCounter, cleanEmployee } = useContext(EmployeeContext);
  const { getEmployeeById, deleteEmployee, isloading } = useFakeApi();

  const handleGoBack = () => {
    navigate("/");
    cleanEmployee();
  };

  const handleEditEmployee = (id: string) => {
    navigate(`/employee/edit/${id}`);
  };

  const handleDeleteEmployee = (id: string) => {
    deleteEmployee(id);
    handleGoBack();
  };

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

  if (!employee) {
    return <Loader />;
  }

  return isloading ? (
    <Loader />
  ) : (
    <EmployeeDetails employee={employee} employeeId={employeeId} onCancel={handleGoBack} onDelete={handleDeleteEmployee} onEdit={handleEditEmployee}/>
  );
};

