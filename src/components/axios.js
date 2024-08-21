import axios from "axios";

const axiosBase = axios.create({
  // baseURL: "http://localhost:5500/api/",
  baseURL: "https://evangadi-backend-qh9f.onrender.com/",
});
export default axiosBase;
