import { useEffect, FC, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFakeApi } from "../hooks";
import EmployeeContext from "../context/employeeContext";

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
    deleteEmployee(id)
    handleGoBack()
  };

  useEffect(() => {
    if (employeeId) {
      !employee && getEmployeeById(employeeId);
    }
  }, [employeeId, getEmployeeById, employee]);

  if (!employee) {
    return <div>Loading 3...</div>;
  }

  return isloading ? (
    <h1>...loading...</h1>
  ) : (
    <div className="flex flex-col justify-center p-6">
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold mb-4">Employee Details</h1>
      </div>
      <div className="flex">
      <div className="w-full md:w-1/2 px-4">
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-2xl mb-4">Employee Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-2">First Name</label>
              <p className="bg-gray-100 p-2 rounded">John</p>
            </div>
            <div>
              <label className="block font-medium mb-2">Middle Name</label>
              <p className="bg-gray-100 p-2 rounded">Doe</p>
            </div>
            <div>
              <label className="block font-medium mb-2">Last Name</label>
              <p className="bg-gray-100 p-2 rounded">Smith</p>
            </div>
            <div>
              <label className="block font-medium mb-2">Location City</label>
              <p className="bg-gray-100 p-2 rounded">New York</p>
            </div>
            <div>
              <label className="block font-medium mb-2">Address</label>
              <p className="bg-gray-100 p-2 rounded">123 Main St</p>
            </div>
            <div>
              <label className="block font-medium mb-2">Date Birth</label>
              <p className="bg-gray-100 p-2 rounded">1990-01-01</p>
            </div>
            <div>
              <label className="block font-medium mb-2">Telephone</label>
              <p className="bg-gray-100 p-2 rounded">123-456-7890</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-4 mt-4 md:mt-0">
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-2xl mb-4">Position Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-2">Position Title</label>
              <p className="bg-gray-100 p-2 rounded">Frontend Developer</p>
            </div>
            <div>
              <label className="block font-medium mb-2">Hire Date</label>
              <p className="bg-gray-100 p-2 rounded">2023-01-15</p>
            </div>
            <div>
              <label className="block font-medium mb-2">Email</label>
              <p className="bg-gray-100 p-2 rounded">john@example.com</p>
            </div>
            <div>
              <label className="block font-medium mb-2">Salary</label>
              <p className="bg-gray-100 p-2 rounded">$70,000</p>
            </div>
            <div>
              <label className="block font-medium mb-2">Time in Position</label>
              <p className="bg-gray-100 p-2 rounded">2 years</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="flex justify-center">
      <button
          onClick={handleGoBack}
          className="mt-4 bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Go Back
        </button>
        <button
          onClick={() => handleEditEmployee(employeeId!)}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Edit
        </button>
        <button
          onClick={()=> handleDeleteEmployee(employeeId!)}
          className="mt-4 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Delete
        </button>
      </div>
    </div>
    /* <div className="bg-white p-4 rounded shadow">
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
    </div> */
  );
};
