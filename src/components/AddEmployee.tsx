import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const AddEmployee: FC = () => {
  const navigate = useNavigate();

  const goToCreateEmployee = () => {
    navigate("/employee/create");
  };
  return (
    <div className="fixed bottom-4 right-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full shadow-lg flex items-center focus:outline-none focus:shadow-outline"
        onClick={goToCreateEmployee}
      >
        <span className="hidden md:inline-block">Create Employee</span>
      </button>
    </div>
  );
};
