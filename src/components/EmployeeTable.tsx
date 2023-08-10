import { FC } from "react";
import { Employee } from "../utils";
import { NoMoreEmployees } from ".";

interface EmployeeTableProps {
  employees: Employee[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  onView: (id: string) => void;
}

export const EmployeeTable: FC<EmployeeTableProps> = ({
  employees,
  onDelete,
  onEdit,
  onView,
}) => {
  return (
    <div className="text-gray-900 bg-gray-200 h-full">
      <div className="p-4 flex justify-center">
        <h1 className="text-3xl font-bold">Employee Manager App</h1>
      </div>
      <section className="px-3 py-4 flex justify-center items-center">
        {employees.length === 0 ? (
          <NoMoreEmployees />
        ) : (
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 px-5">First Name</th>
                <th className="text-left p-3 px-5">Last Name</th>
                <th className="text-left p-3 px-5">Position Title</th>
                <th className="text-left p-3 px-5">Date Arrival</th>
                <th className="text-left p-3 px-5">Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-orange-100 bg-gray-100"
                >
                  <td className="p-3 px-5">{employee.firstName}</td>
                  <td className="p-3 px-5">{employee.lastName}</td>
                  <td className="p-3 px-5 capitalize">
                    {employee.positionTitle}
                  </td>
                  <td className="p-3 px-5">{employee.hireDate}</td>
                  <td className="p-3 px-5">{employee.status}</td>
                  <td className="p-3 flex justify-evenly">
                    <button
                      type="button"
                      className="mr-3 font-bold text-sm bg-orange-500 hover:bg-orange-700 text-white py-1 px-6 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => onView(employee.id)}
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="mr-3 font-bold text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-6 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => onEdit(employee.id)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="font-bold text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-6 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => onDelete(employee.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};
