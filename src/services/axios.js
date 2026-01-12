import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://mytermin.onrender.com/api",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error.response);
  }
);

export default instance;
