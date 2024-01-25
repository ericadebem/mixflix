import axios from "axios";

export const FetchData = async (endpoint: string) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/${endpoint}`);
    const data = response.data;
    return data.travel;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
