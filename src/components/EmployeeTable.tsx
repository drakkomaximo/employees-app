import React from 'react';
import { Link } from 'react-router-dom';
import { Employee } from '../utils';

interface EmployeeTableProps {
  employees: Employee[];
  onDelete: (id: string) => void;
}

export const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees, onDelete }) => {
  return (
    <table className="border-collapse w-full">
      <thead>
        <tr>
          <th className="border py-2 px-4">First Name</th>
          <th className="border py-2 px-4">Last Name</th>
          <th className="border py-2 px-4">Position Title</th>
          <th className="border py-2 px-4">Date Arrival</th>
          <th className="border py-2 px-4">Status</th>
          <th className="border py-2 px-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <tr key={employee.id} className="border-t">
            <td className="border py-2 px-4">{employee.firstName}</td>
            <td className="border py-2 px-4">{employee.lastName}</td>
            <td className="border py-2 px-4 capitalize">{employee.positionTitle}</td>
            <td className="border py-2 px-4">{employee.dateArrival}</td>
            <td className="border py-2 px-4">{employee.status}</td>
            <td className="border py-2 px-4">
              <Link to={`/employee/${employee.id}`} className="text-blue-500 hover:underline mx-2">
                View
              </Link>
              <Link to={`/employee/edit/${employee.id}`} className="text-blue-500 hover:underline mx-2">
                Edit
              </Link>
              <button
                onClick={() => onDelete(employee.id)}
                className="text-red-500 hover:underline mx-2 cursor-pointer"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
