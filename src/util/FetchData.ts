import axios from "axios";

export const FetchData = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/travel/many");
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
