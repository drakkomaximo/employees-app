import { useContext, useEffect, FC } from "react";
import { useFakeApi } from "../hooks";
import { EmployeeTable } from "../components";
import EmployeeContext from "../context/employeeContext";
import { Link } from "react-router-dom";

export const HomePage: FC = () => {
  const { fetchEmployees, deleteEmployee, isloading } = useFakeApi();
  const { employees } = useContext(EmployeeContext);

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <div className="flex w-full justify-between items-center">
        <h1>Employee Viewer</h1>
        {!isloading && (
          <Link
            to={`/employee/create`}
            className="text-orange-600 hover:underline mx-2"
          >
            Create
          </Link>
        )}
      </div>
      {isloading ? (
        <h1>loading...</h1>
      ) : (
        <EmployeeTable employees={employees || []} onDelete={deleteEmployee} />
      )}
    </div>
  );
};
