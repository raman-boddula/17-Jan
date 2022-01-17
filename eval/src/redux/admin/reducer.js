import {
    ADD_JOB_SUCCESS,
    ADD_JOB_ERROR,
    ADD_JOB_LOADING,
    GET_JOB_ERROR,
    GET_JOB_LOADING,
    GET_JOB_SUCCESS
} from "./actionTypes";
const initState = {
    loading: false,
    Jobs: [],
    error:false,
}
export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
      case ADD_JOB_LOADING:
        return {
          ...state,
          loading: true,
        };
      case ADD_JOB_SUCCESS:
        return {
          ...state,
          Jobs: [...state.Jobs, payload],
          loading: false,
        };
      case ADD_JOB_ERROR:
        return {
          ...state,
          error: true,
        };
      case GET_JOB_LOADING:
        return {
          ...state,
          loading: true,
        };
      case GET_JOB_SUCCESS:
        return {
          ...state,
          Jobs: [...state.Jobs, payload],
          loading: false,
        };
      case GET_JOB_ERROR:
        return {
          ...state,
          error: true,
        };
      default:
        return state;
    }
}
