import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EmployeeDetailsPage, EmployeeFormPage, HomePage, NotFoundPage } from "../pages";

export const MainRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <main className="flex flex-col justify-start w-screen h-screen bg-white overflow-x-hidden">
        <Routes>
          <Route path='*' element={<NotFoundPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/employee/:employeeId" element={<EmployeeDetailsPage />} />
          <Route path="/employee/create" element={<EmployeeFormPage />} />
          <Route path="/employee/edit/:employeeId" element={<EmployeeFormPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
