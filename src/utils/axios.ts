import Axios, { AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";

const axios = Axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const axiosSkeleton = Axios.create({
  baseURL: "",
  headers: {},
});

const token = localStorage.getItem("authUser") || "{}";

const axiosConfiguration = (config: AxiosRequestConfig) => {
  if (token)
    config.headers = {
      ...(config.headers || {}),
      Authorization: token,
    };
  return config;
};
axios.interceptors.request.use(axiosConfiguration);

axios.interceptors.response.use(
  (res: any) => {
    return res;
  },
  async (error: any) => {
    if (error.response === undefined) {
      console.log("error", "Network Error: Please refresh and try again.");
      return;
    }

    const res = error.response;
    if (res.status === 401 && token) {
      window.location.href = "/login";
      localStorage.clear();
      return;
    }

    toast.error(error.response.data.error);
    return Promise.reject(error);
  }
);

export default axios;
