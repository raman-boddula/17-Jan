import { ADD_JOB_SUCCESS,GET_JOB_ERROR,GET_JOB_LOADING,GET_JOB_SUCCESS ,ADD_JOB_ERROR, ADD_JOB_LOADING } from "./actionTypes";

export const addJobLoading = (data) => {
  return {
    type: ADD_JOB_LOADING,
  };
};
export const addJobSuccess = (data) => {
    return {
        type: ADD_JOB_SUCCESS,
        payload:data
    }
}
export const addJobError = () => {
  return {
    type: ADD_JOB_ERROR,
  };
};
export const getJobLoading = () => {
  return {
    type: GET_JOB_LOADING,
  };
};
export const getJobSuccess = () => {
  return {
    type: GET_JOB_SUCCESS,
  };
};
export const getJobError = () => {
  return {
    type: GET_JOB_ERROR,
  };
};