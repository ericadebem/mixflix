import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { CustomerPage } from "../pages/CustomerPage";
import { EmployeePage } from "../pages/EmployeePage";
import { Homepage } from "../pages/Homepage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/customer", element: <CustomerPage /> },
      { path: "/employee", element: <EmployeePage /> },
    ],
  },
]);
