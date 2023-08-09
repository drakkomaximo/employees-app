import { useContext, useEffect, FC } from "react";
import { useFakeApi } from "../hooks";
import { AddEmployee, EmployeeTable } from "../components";
import EmployeeContext from "../context/employeeContext";
import { useNavigate } from "react-router-dom";

export const HomePage: FC = () => {
  const navigate = useNavigate();
  const { fetchEmployees, deleteEmployee, isloading } = useFakeApi();
  const { employees } = useContext(EmployeeContext);

  const goToEmployeeDetails = (id: string) =>{
    navigate(`/employee/${id}`)
  }

  const goToEditEmployee = (id: string) =>{
    navigate(`/employee/edit/${id}`)
  }

  useEffect(() => {
    fetchEmployees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {isloading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <EmployeeTable
            employees={employees || []}
            onDelete={deleteEmployee}
            onView={goToEmployeeDetails}
            onEdit={goToEditEmployee}
          />
          <AddEmployee />
        </div>
      )}
    </div>
  );
};
