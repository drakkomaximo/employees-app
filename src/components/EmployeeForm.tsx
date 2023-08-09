import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Employee } from "../utils";
import { useFakeApi } from "../hooks";
import EmployeeContext from "../context/employeeContext";

export const EmployeeForm: FC = () => {
  const navigate = useNavigate();
  const { addEmployee, updateEmployee } = useFakeApi();
  const { employee, cleanEmployee } = useContext(EmployeeContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Employee>();

  const isEditMode = !!employee;

  const onCancel = () => {
    cleanEmployee();
    navigate("/");
  };

  const onSubmit = (data: Employee) => {
    if (isEditMode) {
      updateEmployee({ ...data, id: employee!.id });
    } else {
      addEmployee(data);
    }
    onCancel();
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-3xl font-semibold mb-4">
        {isEditMode ? "Edit Employee" : "Create New Employee"}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-11/12">
        <div className="bg-white shadow-md rounded p-4">
          <div className="grid grid-cols-3 gap-4">
          <div className="mb-4">
            <label className="block font-medium mb-2">First Name</label>
            <input
              type="text"
              defaultValue={employee?.firstName}
              {...register("firstName", { required: true })}
              className="bg-gray-100 p-2 rounded w-full"
            />
            {errors.firstName && (
              <p className="text-red-500">First Name is required</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Middle Name</label>
            <input
              type="text"
              defaultValue={employee?.middleName}
              {...register("middleName")}
              className="bg-gray-100 p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Last Name</label>
            <input
              type="text"
              defaultValue={employee?.lastName}
              {...register("lastName", { required: true })}
              className="bg-gray-100 p-2 rounded w-full"
            />
            {errors.lastName && (
              <p className="text-red-500">Last Name is required</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Location City</label>
            <input
              type="text"
              defaultValue={employee?.locationCity}
              {...register("locationCity", { required: true })}
              className="bg-gray-100 p-2 rounded w-full"
            />
            {errors.locationCity && (
              <p className="text-red-500">Location City is required</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Address</label>
            <input
              type="text"
              defaultValue={employee?.address}
              {...register("address", { required: true })}
              className="bg-gray-100 p-2 rounded w-full"
            />
            {errors.address && (
              <p className="text-red-500">Address is required</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Date Birth</label>
            <input
              type="date"
              defaultValue={employee?.dateBirth}
              {...register("dateBirth", { required: true })}
              className="bg-gray-100 p-2 rounded w-full"
            />
            {errors.dateBirth && (
              <p className="text-red-500">Date Birth is required</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Telephone</label>
            <input
              type="tel"
              defaultValue={employee?.telephone}
              {...register("telephone", { required: true })}
              className="bg-gray-100 p-2 rounded w-full"
            />
            {errors.telephone && (
              <p className="text-red-500">Telephone is required</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Position Title</label>
            <select
              {...register("positionTitle", { required: true })}
              className="bg-gray-100 p-2 rounded w-full"
              defaultValue={employee?.positionTitle}
            >
              <option value="">Select Position Title</option>
              <option value="counter">Counter</option>
              <option value="developer">Developer</option>
              <option value="manager">Manager</option>
            </select>
            {errors.positionTitle && (
              <p className="text-red-500">Position Title is required</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Hire Date</label>
            <input
              type="date"
              defaultValue={employee?.dateArrival}
              {...register("dateArrival", { required: true })}
              className="bg-gray-100 p-2 rounded w-full"
            />
            {errors.dateArrival && (
              <p className="text-red-500">Hire Date is required</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Email</label>
            <input
              type="email"
              defaultValue={employee?.email}
              {...register("email", { required: true })}
              className="bg-gray-100 p-2 rounded w-full"
            />
            {errors.email && <p className="text-red-500">Email is required</p>}
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Salary</label>
            <input
              type="number"
              defaultValue={employee?.salary}
              {...register("salary", { required: true })}
              className="bg-gray-100 p-2 rounded w-full"
            />
            {errors.salary && (
              <p className="text-red-500">Salary is required</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Time in Position</label>
            <input
              type="text"
              defaultValue={employee?.timeInPosition}
              {...register("timeInPosition")}
              className="bg-gray-100 p-2 rounded w-full"
            />
          </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {isEditMode ? "Save Changes" : "Create Employee"}
          </button>
          <button
            type="button"
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded ml-2"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
