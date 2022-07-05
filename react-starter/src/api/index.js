import axios from "axios";
export default axios.create({
  baseURL: "http://backend:5001/api",
});
