import { LOGIN_SUCCESS, LOGIN_FAILED } from "./actionTypes";

const initState = {
    loading:false,
    userRole: [],
    error:false
}
export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                userRole: [...state.userRole, payload],
                loading:true
            }
        case LOGIN_FAILED:
            return {
                ...state,
                error:false
            }
        default: return state;
        
    }
}