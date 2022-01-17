import { LOGIN_SUCCESS, LOGIN_FAILED } from "./actionTypes";

const initState = {
    // loading:false,
    userRole: ""
    // error:false
}
export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                userRole: payload,
                // loading:false
            }
        
        default: return state;
        
    }
}