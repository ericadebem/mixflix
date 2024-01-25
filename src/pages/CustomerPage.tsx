import { useState, useEffect } from "react";
import { FetchData } from "../util/FetchData";
import { CustomerCard } from "../components/CustomerCard";

export const CustomerPage = () => {
  const [filter, setFilter] = useState({});
  const [customerData, setCustomerData] = useState([]);
  useEffect(() => {
    FetchData("customer").then((data) => setCustomerData(data.customer));
    console.log(customerData)
  }, []);
  return (
    <div>
      <h1>Customer Page</h1>
      {customerData &&
        customerData
          .slice(0, 5)
          .map((customer) => (
            <CustomerCard data={customer} key={customer._id} />
          ))}
    </div>
  );
};
