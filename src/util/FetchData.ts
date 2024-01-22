import axios from "axios";

export const getData = async () => {
  try {
    axios.get("").then((res) => res.data);
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
