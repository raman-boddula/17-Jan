import { ADD_JOB_SUCCESS, ADD_JOB_ERROR, ADD_JOB_LOADING } from "./actionTypes";

export const addJobLoading = (data) => {
  return {
    type: ADD_JOB_LOADING,
  };
};
export const addJobSuccess = () => {
    return {
        type:ADD_JOB_SUCCESS,
    }
}
export const addJobError = () => {
  return {
    type: ADD_JOB_ERROR,
  };
};