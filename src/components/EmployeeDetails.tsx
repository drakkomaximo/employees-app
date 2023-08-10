import { FC } from "react";
import { Employee } from "../utils";
import PhoneInput from "react-phone-input-2";

interface EmployeeDetailsProps {
  employeeId?: string;
  employee: Employee;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  onCancel: () => void;
}

export const EmployeeDetails: FC<EmployeeDetailsProps> = ({
  employee,
  employeeId,
  onCancel,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="flex flex-col justify-center p-6 bg-gray-200 h-screen">
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold mb-4">Employee Details</h1>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 px-4">
          <div className="bg-white shadow-md rounded p-4">
            <h2 className="text-2xl mb-4">Employee Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-2">First Name</label>
                <p className="bg-gray-100 p-2 rounded h-10 capitalize">
                  {employee.firstName}
                </p>
              </div>
              <div>
                <label className="block font-medium mb-2">Middle Name</label>
                <p className="bg-gray-100 p-2 rounded h-10 capitalize">
                  {employee.middleName}
                </p>
              </div>
              <div>
                <label className="block font-medium mb-2">Last Name</label>
                <p className="bg-gray-100 p-2 rounded h-10 capitalize">
                  {employee.lastName}
                </p>
              </div>
              <div>
                <label className="block font-medium mb-2">Location City</label>
                <p className="bg-gray-100 p-2 rounded h-10 capitalize">
                  {employee.locationCity}
                </p>
              </div>
              <div>
                <label className="block font-medium mb-2">Address</label>
                <p className="bg-gray-100 p-2 rounded h-10 capitalize">
                  {employee.address}
                </p>
              </div>
              <div>
                <label className="block font-medium mb-2">Date Birth</label>
                <p className="bg-gray-100 p-2 rounded h-10">
                  {employee.dateBirth}
                </p>
              </div>
              <div>
                <label className="block font-medium mb-2">Telephone</label>
                <PhoneInput
                  disabled={true}
                  value={employee.telephone}
                  containerClass="bg-gray-100 p-2 rounded h-10 capitalize"
                  inputStyle={{
                    backgroundColor: "rgb(243 244 246 / var(--tw-bg-opacity))",
                    border: "none",
                    fontSize: "1rem",
                    height: "1.5rem",
                    width: "auto",
                  }}
                  buttonStyle={{
                    border: "none",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4 mt-4 lg:mt-0">
          <div className="bg-white shadow-md rounded p-4">
            <h2 className="text-2xl mb-4">Position Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-2">Position Title</label>
                <p className="bg-gray-100 p-2 rounded h-10 capitalize">
                  {employee.positionTitle}
                </p>
              </div>
              <div>
                <label className="block font-medium mb-2">Hire Date</label>
                <p className="bg-gray-100 p-2 rounded h-10 capitalize">
                  {employee.hireDate}
                </p>
              </div>
              <div>
                <label className="block font-medium mb-2">Email</label>
                <p className="bg-gray-100 p-2 rounded h-10">{employee.email}</p>
              </div>
              <div>
                <label className="block font-medium mb-2">Salary</label>
                <p className="bg-gray-100 p-2 rounded h-10">
                  {employee.salary}
                </p>
              </div>
              <div>
                <label className="block font-medium mb-2">
                  Time in Position
                </label>
                <p className="bg-gray-100 p-2 rounded h-10">
                  {employee.timeInPosition}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={onCancel}
          className="font-bold mt-4 mr-4 bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Go Back
        </button>
        <button
          onClick={() => onEdit(employeeId!)}
          className="font-bold mt-4 mr-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(employeeId!)}
          className="font-bold mt-4 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
