import { AxiosResponse } from "axios";
import { HTTP_ERROR } from "./constants";

export const handleError = (response: AxiosResponse) => {
  let errorMessage = "";
  if (!response) {
    errorMessage = HTTP_ERROR.NO_INTERNET;
  } else {
    switch (response.status) {
      case 401:
        errorMessage = HTTP_ERROR.UNAUTHORIZED;
        break;
      case 404:
        errorMessage = HTTP_ERROR.NOT_FOUND;
        break;
      case 400:
      case 500:
        errorMessage = getErrorMessage(response.data);
        break;
      default:
        errorMessage = HTTP_ERROR.UNKNOWN_ERROR;
    }
  }
  return errorMessage;
};

const getErrorMessage = (responseData: AxiosResponse) => {
  let errorMessage = null;
  if (responseData) {
    try {
      const parsedResData = JSON.parse(responseData.toString());
      errorMessage = parsedResData.data
        ? parsedResData.data.message
        : HTTP_ERROR.UNEXPECTED;
    } catch (e) {
      return responseData;
    }
  }
  return errorMessage;
};
