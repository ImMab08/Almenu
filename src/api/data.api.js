import axios from "axios";

export const getAllData = () => {
  return axios.get('http://localhost:8000/api/register/')
}