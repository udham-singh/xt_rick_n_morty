import Axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./constants";
import { requestHandler, errorHandler, successHandler } from "./interceptors";

const axiosInstance = Axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use((request) => requestHandler(request));

axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

export const getCall = async (url: string, params: any) => {
  const reqConfig = params ? ({ params } as AxiosRequestConfig) : undefined;
  return await axiosInstance.get(url, reqConfig);
};
