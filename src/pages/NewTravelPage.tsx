import { useState } from "react";
import { Button } from "../components/Button";
import axios, { AxiosResponse } from "axios";

interface ITravelCard {
  from: string;
  timeFrom: number;
  to: string;
  timeTo: number;
  preis: number;
}

export const SendData = async (endpoint: string, data: ITravelCard) => {
  try {
    await axios.post(`http://localhost:5050/api/${endpoint}`, data);
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const NewTravelPage = () => {
  const [formData, setFormData] = useState({
    from: "",
    timeFrom: 0,
    to: "",
    timeTo: 0,
    preis: 0,
  });
  return (
    <div>
      <h1>New Travel Page</h1>
      <form>
        <label htmlFor="from">From</label>
        <input
          type="text"
          name="from"
          id="from"
          onChange={(e) => setFormData({ ...formData, from: e.target.value })}
        />
        <label htmlFor="Timefrom">Time From</label>
        <input
          type="number"
          name="Timefrom"
          id="Timefrom"
          onChange={(e) =>
            setFormData({ ...formData, timeFrom: Number(e.target.value) })
          }
        />
        <label htmlFor="to">To</label>
        <input
          type="text"
          name="to"
          id="to"
          onChange={(e) => setFormData({ ...formData, to: e.target.value })}
        />
        <label htmlFor="TimeTo">Time To</label>
        <input
          type="number"
          name="TimeTo"
          id="TimeTo"
          onChange={(e) =>
            setFormData({ ...formData, timeTo: Number(e.target.value) })
          }
        />
        <label htmlFor="preis">Preis</label>
        <input
          type="number"
          name="preis"
          id="preis"
          onChange={(e) =>
            setFormData({ ...formData, preis: Number(e.target.value) })
          }
        />
        <button onClick={() => SendData("travel", formData)}>Submit</button>
      </form>
    </div>
  );
};
