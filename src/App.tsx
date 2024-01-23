import { Outlet } from "react-router-dom";
import { FetchData } from "./util/FetchData";
import { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    FetchData().then((data) => console.log(data));
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
};
