import { useEffect, FC, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { useFakeApi } from "../hooks";
import EmployeeContext from "../context/employeeContext";

export const EmployeeDetailsPage: FC = () => {
  const { employeeId } = useParams<{ employeeId: string }>();
  const { employee, cleanEmployee } = useContext(EmployeeContext);
  const { getEmployeeById, isloading } = useFakeApi();

  useEffect(() => {
    if(employeeId){
      !employee && getEmployeeById(employeeId);
    }
  }, [employeeId, getEmployeeById, employee]);

  if (!employee) {
    return <div>Loading 3...</div>;
  }

  return isloading ? (
    <h1>...loading...</h1>
  ) : (
    <div className="bg-white p-4 rounded shadow">
      <Link
        to="/"
        className="text-blue-500 hover:underline mb-4 block"
        onClick={cleanEmployee}
      >
        ← Back to Homepage
      </Link>
      <h2 className="text-xl font-semibold mb-4">Employee Details</h2>
      <div className="mb-2">
        <strong>Name: </strong>
        {employee.firstName} {employee.middleName} {employee.lastName}
      </div>
      <div className="mb-2">
        <strong>Location City: </strong>
        {employee.locationCity}
      </div>
      <div className="mb-2">
        <strong>Address: </strong>
        {employee.address}
      </div>
      <div className="mb-2">
        <strong>Date Birth: </strong>
        {employee.dateBirth}
      </div>
      <div className="mb-2">
        <strong>Telephone: </strong>
        {employee.telephone}
      </div>
      <h3 className="text-lg font-semibold mt-4 mb-2">Position Details</h3>
      <div className="mb-2">
        <strong>Position Title: </strong>
        {employee.positionTitle}
      </div>
      <div className="mb-2">
        <strong>Hire Date: </strong>
        {employee.hireDate}
      </div>
      <div className="mb-2">
        <strong>Email: </strong>
        {employee.email}
      </div>
      <div className="mb-2">
        <strong>Salary: </strong>
        {employee.salary}
      </div>
      <div className="mb-2">
        <strong>Time in Position: </strong>
        {employee.timeInPosition}
      </div>
    </div>
  );
};
