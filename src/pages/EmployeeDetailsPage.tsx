import { useEffect, FC, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFakeApi } from "../hooks";
import EmployeeContext from "../context/employeeContext";
import { EmployeeDetails, Loader } from "../components";

export const EmployeeDetailsPage: FC = () => {
  const navigate = useNavigate();
  const { employeeId } = useParams<{ employeeId: string }>();
  const { employee, cleanEmployee } = useContext(EmployeeContext);
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
      !employee && getEmployeeById(employeeId);
    }
  }, [employeeId, getEmployeeById, employee]);

  if (!employee) {
    return <Loader />;
  }

  return isloading ? (
    <Loader />
  ) : (
    <EmployeeDetails employee={employee} employeeId={employeeId} onCancel={handleGoBack} onDelete={handleDeleteEmployee} onEdit={handleEditEmployee}/>
  );
};
