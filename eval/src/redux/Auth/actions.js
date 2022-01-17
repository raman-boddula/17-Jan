import {
    LOGIN_FAILED, LOGIN_SUCCESS
} from "./actionTypes";

export const loginSuccess = (data) => {
  return {
      type: LOGIN_SUCCESS,
      payload:data
  };
};
export const loginError = () => {
  return {
    type: LOGIN_FAILED,
  };
};