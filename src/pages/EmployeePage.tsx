import { useState, useEffect } from "react";
import { FetchData } from "../util/FetchData";

export const EmployeePage = () => {
  const [filter, setFilter] = useState({});
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    FetchData("/employee/many").then((data) => setEmployeeData(data));
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
