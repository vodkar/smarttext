import * as axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://vk-mini.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
