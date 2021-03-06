import { APPLY_JOB_ERROR,GET_CJOB_ERROR,GET_CJOB_LOADING,GET_CJOB_SUCCESS,APPLY_JOB_SUCCESS, APPLY_JOB_LOADING } from "./actionTypes";

export const applyJobSuccess = (data) => {
    return {
      type: APPLY_JOB_SUCCESS,
      payload:data
        }
}
export const applyJobError = () => {
  return {
    type: APPLY_JOB_ERROR,
  };
};
export const applyJobLoading = () => {
  return {
    type: APPLY_JOB_LOADING,
  };
};
export const getCJobSuccess = (id) => {
  return {
    type: GET_CJOB_SUCCESS,
    payload:id
  };
};
export const getCJobError = () => {
  return {
    type: GET_CJOB_ERROR,
  };
};
export const getCJobLoading = () => {
  return {
    type: GET_CJOB_LOADING,
  };
};