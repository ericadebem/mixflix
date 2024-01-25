import axios from "axios";

export const FetchData = async (endpoint: string) => {
  console.log(111,endpoint)
  try {
    const response = await axios.get(`http://localhost:5050/api/${endpoint}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
