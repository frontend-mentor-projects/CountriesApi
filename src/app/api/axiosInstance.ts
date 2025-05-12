import axios from "axios";

import type Country from "../../features/countries/models/Country";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

const api = {
  get: (): Promise<Country[]> =>
    axiosInstance.get<Country[]>("/data.json").then((res) => res.data),
};

export default api;
