import { createStore, combineReducers } from "redux";

import { reducer as clientReducer } from "./client/reducer"
import { reducer as adminReducer } from "./admin/reducer";
import {reducer as authReducer} from "./Auth/reducer";
const rootReducer = combineReducers({clientReducer,authReducer,adminReducer});
export const store = createStore(rootReducer,window.__REDUX_DEV_TOOLS_EXTENSION__())