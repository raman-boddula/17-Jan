import { APPLY_JOB_ERROR, APPLY_JOB_SUCCESS,APPLY_JOB_LOADING,GET_CJOB_ERROR,GET_CJOB_SUCCESS,GET_CJOB_LOADING} from "./actionTypes";

const initState = {
    loading: false,
    jobs: [],
    error:false
}
export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
      case APPLY_JOB_SUCCESS:
        return {
          ...state,
          jobs: [...state.jobs, payload],
        };
      case APPLY_JOB_LOADING:
        return {
          ...state,
          loading: true,
        };
      case APPLY_JOB_ERROR:
        return {
          ...state,
          error: true,
        };
      case GET_CJOB_SUCCESS:
        return {
          ...state,
          jobs: [...state.jobs, payload],
        };
      case GET_CJOB_LOADING:
        return {
          ...state,
          loading: true,
        };
      case GET_CJOB_ERROR:
        return {
          ...state,
          error: true,
        };
      default:
        return state;
    }
}