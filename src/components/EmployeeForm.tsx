import { FC, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Employee, employeeSchema } from "../utils";
import { useFakeApi } from "../hooks";
import EmployeeContext from "../context/employeeContext";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const EmployeeForm: FC = () => {
  const navigate = useNavigate();
  const { addEmployee, updateEmployee } = useFakeApi();
  const { employee, cleanEmployee } = useContext(EmployeeContext);
  const {
    control,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Employee>({
    resolver: zodResolver(employeeSchema),
  });

  const isEditMode = !!employee;

  const onCancel = () => {
    cleanEmployee();
    navigate("/");
  };

  const onSubmit = (data: Employee) => {
    if (isEditMode) {
      updateEmployee({ ...data, id: employee!.id, status: "Active" });
    } else {
      addEmployee(data);
    }
    onCancel();
  };

  useEffect(() => {
    if (Object.entries(errors).length > 0) {
      console.log(errors);
    }
  }, [errors]);

  useEffect(() => {
    if (employee && employee.telephone) {
      setValue('telephone', employee.telephone)
    }
  }, [employee, setValue]);

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-3xl font-semibold mb-2">
        {isEditMode ? "Edit Employee" : "Create New Employee"}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-11/12">
        <div className="bg-white shadow-md rounded p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="mb-2">
              <label className="block font-medium mb-2">First Name</label>
              <input
                type="text"
                defaultValue={employee?.firstName}
                {...register("firstName", { required: true })}
                className="bg-gray-100 p-2 rounded w-full"
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName.message}</p>
              )}
            </div>
            <div className="mb-2">
              <label className="block font-medium mb-2">Middle Name</label>
              <input
                type="text"
                defaultValue={employee?.middleName}
                {...register("middleName")}
                className="bg-gray-100 p-2 rounded w-full"
              />
              {errors.middleName && (
                <p className="text-red-500">{errors.middleName.message}</p>
              )}
            </div>
            <div className="mb-2">
              <label className="block font-medium mb-2">Last Name</label>
              <input
                type="text"
                defaultValue={employee?.lastName}
                {...register("lastName", { required: true })}
                className="bg-gray-100 p-2 rounded w-full"
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName.message}</p>
              )}
            </div>
            <div className="mb-2">
              <label className="block font-medium mb-2">Location City</label>
              <input
                type="text"
                defaultValue={employee?.locationCity}
                {...register("locationCity", { required: true })}
                className="bg-gray-100 p-2 rounded w-full"
              />
              {errors.locationCity && (
                <p className="text-red-500">{errors.locationCity.message}</p>
              )}
            </div>
            <div className="mb-2">
              <label className="block font-medium mb-2">Address</label>
              <input
                type="text"
                defaultValue={employee?.address}
                {...register("address", { required: true })}
                className="bg-gray-100 p-2 rounded w-full"
              />
              {errors.address && (
                <p className="text-red-500">{errors.address.message}</p>
              )}
            </div>
            <div className="mb-2">
              <label className="block font-medium mb-2">Date Birth</label>
              <input
                type="date"
                defaultValue={employee?.dateBirth}
                {...register("dateBirth", { required: true })}
                className="bg-gray-100 p-2 rounded w-full"
              />
              {errors.dateBirth && (
                <p className="text-red-500">{errors.dateBirth.message}</p>
              )}
            </div>
            <div className="mb-2">
              <label className="block font-medium mb-2">Telephone</label>
              <Controller
                name="telephone"
                control={control}
                rules={{ required: true, maxLength: 13 }}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    autoFormat={false}
                    country={"co"}
                    containerClass="bg-gray-100 h-[2.625rem] rounded w-full"
                    inputStyle={{
                      backgroundColor:
                        "rgb(243 244 246 / var(--tw-bg-opacity))",
                      border: "none",
                      fontSize: "1rem",
                      height: "2.625rem",
                      width: 'auto',
                    }}
                  />
                )}
              />
              {errors.telephone && (
                <p className="text-red-500">{errors.telephone.message}</p>
              )}
            </div>
            <div className="mb-2">
              <label className="block font-medium mb-2">Position Title</label>
              <select
                {...register("positionTitle", { required: true })}
                className="bg-gray-100 p-2 h-[2.625rem] rounded w-full"
                defaultValue={employee?.positionTitle}
              >
                <option value="">Select Position Title</option>
                <option value="counter">Counter</option>
                <option value="developer">Developer</option>
                <option value="manager">Manager</option>
              </select>
              {errors.positionTitle && (
                <p className="text-red-500">{errors.positionTitle.message}</p>
              )}
            </div>
            <div className="mb-2">
              <label className="block font-medium mb-2">Hire Date</label>
              <input
                type="date"
                defaultValue={employee?.hireDate}
                {...register("hireDate", { required: true })}
                className="bg-gray-100 p-2 rounded w-full"
              />
              {errors.hireDate && (
                <p className="text-red-500">{errors.hireDate.message}</p>
              )}
            </div>
            <div className="mb-2">
              <label className="block font-medium mb-2">Email</label>
              <input
                type="email"
                defaultValue={employee?.email}
                {...register("email", { required: true })}
                className="bg-gray-100 p-2 rounded w-full"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-2">
              <label className="block font-medium mb-2">Salary</label>
              <input
                type="number"
                defaultValue={employee?.salary}
                {...register("salary", { required: true })}
                className="bg-gray-100 p-2 rounded w-full"
              />
              {errors.salary && (
                <p className="text-red-500">{errors.salary.message}</p>
              )}
            </div>
            <div className="mb-2">
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
