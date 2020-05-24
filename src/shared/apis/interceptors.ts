import { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import { handleError } from "./handleError";

const isHandlerEnabled = (config: any) => {
  return !(config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled);
};

export const requestHandler = (request: AxiosRequestConfig) => {
  if (isHandlerEnabled(request)) {
    // Modify request here
  }
  return request;
};

export const errorHandler = (error: AxiosError) => {
  if (isHandlerEnabled(error.config)) {
    return Promise.reject(handleError(error.response as AxiosResponse));
  }
  return Promise.reject({ ...error });
};

export const successHandler = (response: AxiosResponse) => {
  if (isHandlerEnabled(response.config)) {
    // Handle responses
  }
  return response;
};
