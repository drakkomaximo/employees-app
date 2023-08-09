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
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">
        {isEditMode ? "Edit Employee" : "Create New Employee"}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block mb-1 font-medium">First Name</label>
          <input
            type="text"
            defaultValue={employee?.firstName}
            {...register("firstName", { required: true })}
            className="border w-full py-2 px-3"
          />
          {errors.firstName && (
            <p className="text-red-500">First Name is required</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Middle Name</label>
          <input
            type="text"
            defaultValue={employee?.middleName}
            {...register("middleName")}
            className="border w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Last Name</label>
          <input
            type="text"
            defaultValue={employee?.lastName}
            {...register("lastName", { required: true })}
            className="border w-full py-2 px-3"
          />
          {errors.lastName && (
            <p className="text-red-500">Last Name is required</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Location City</label>
          <input
            type="text"
            defaultValue={employee?.locationCity}
            {...register("locationCity", { required: true })}
            className="border w-full py-2 px-3"
          />
          {errors.locationCity && (
            <p className="text-red-500">Location City is required</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Address</label>
          <input
            type="text"
            defaultValue={employee?.address}
            {...register("address", { required: true })}
            className="border w-full py-2 px-3"
          />
          {errors.address && (
            <p className="text-red-500">Address is required</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Date Birth</label>
          <input
            type="date"
            defaultValue={employee?.dateBirth}
            {...register("dateBirth", { required: true })}
            className="border w-full py-2 px-3"
          />
          {errors.dateBirth && (
            <p className="text-red-500">Date Birth is required</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Telephone</label>
          <input
            type="tel"
            defaultValue={employee?.telephone}
            {...register("telephone", { required: true })}
            className="border w-full py-2 px-3"
          />
          {errors.telephone && (
            <p className="text-red-500">Telephone is required</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Position Title</label>
          {/*           <input
            type="text"
            defaultValue={employee?.positionTitle}
            {...register("positionTitle", { required: true })}
            className="border w-full py-2 px-3"
          /> */}
          <select
            {...register("positionTitle", { required: true })}
            className="border w-full py-2 px-3"
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
          <label className="block mb-1 font-medium">Hire Date</label>
          <input
            type="date"
            defaultValue={employee?.dateArrival}
            {...register("dateArrival", { required: true })}
            className="border w-full py-2 px-3"
          />
          {errors.dateArrival && (
            <p className="text-red-500">Hire Date is required</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            defaultValue={employee?.email}
            {...register("email", { required: true })}
            className="border w-full py-2 px-3"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Salary</label>
          <input
            type="number"
            defaultValue={employee?.salary}
            {...register("salary", { required: true })}
            className="border w-full py-2 px-3"
          />
          {errors.salary && <p className="text-red-500">Salary is required</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Time in Position</label>
          <input
            type="text"
            defaultValue={employee?.timeInPosition}
            {...register("timeInPosition")}
            className="border w-full py-2 px-3"
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
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
