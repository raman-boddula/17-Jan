import { createStore, combineReducers } from "redux";

import { reducer as clientReducer } from "./client/reducer"
import { reducer as adminReducer } from "./admin/reducer";

const rootReducer = combineReducers({clientReducer,adminReducer});
export const store = createStore(rootReducer,)