import { useState, useEffect } from "react";
import { FetchData } from "../util/FetchData";
import { EmployeeCard } from "../components/EmployeeCard";

export const EmployeePage = () => {
  const [filter, setFilter] = useState({});
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    FetchData("employee").then((data) => setEmployeeData(data.employee));
    console.log(employeeData)
  }, []);
  return (
    <div>
      <h1>Employee Page</h1>
      {employeeData &&
        employeeData
          .slice(0, 5)
          .map((employee) => (
            <EmployeeCard data={employee} key={employee._id} />
          ))}
    </div>
  );
};
