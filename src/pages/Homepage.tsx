import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";
import { TravelCard } from "../components/TravelCard";
import { FetchData } from "../util/FetchData";

export const Homepage = () => {
  const [filter, setFilter] = useState({});
  const [travelData, setTravelData] = useState([]);
  useEffect(()=> {
    FetchData("travel/many").then(data =>setTravelData(data))
  },[])
  return (
    <div>
      <form action="">
        <label htmlFor="">
          <input type="checkbox" />
          Einfache Fahrt
        </label>
        <label htmlFor="">
          <input type="checkbox" />
          Hin- und Rückfahrt
        </label>
        <label htmlFor="">
          Von
          <input type="text" name="" id="" />
        </label>
        <button>ArrowChange</button>
        <label htmlFor="">
          Nach
          <input type="text" name="" id="" />
        </label>
        <label htmlFor="">
          Hin
          <input type="text" name="" id="" />
        </label>
        {/* <Modal /> */}
        <Button text="Suchen" />
      </form>
      {travelData &&
        travelData.slice(0,5).map((travel) => (
          <TravelCard data={travel} key={travel._id} />
        ))}

    </div>
  );
};
