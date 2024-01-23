import { Outlet } from "react-router-dom";
import { FetchData } from "./util/FetchData";
import { useEffect } from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export const App = () => {
  useEffect(() => {
    FetchData().then((data) => console.log(data));
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
