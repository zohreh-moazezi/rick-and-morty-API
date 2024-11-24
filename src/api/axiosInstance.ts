import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosInstance;
