import { combineReducers } from "redux";

import addClient from "./addClient";
import loginReducer from "./login";

const rootReducer = combineReducers({addClient, loginReducer});

export default rootReducer;