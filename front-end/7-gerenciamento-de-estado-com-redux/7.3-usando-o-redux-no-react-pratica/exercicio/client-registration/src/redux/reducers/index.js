import { combineReducers } from "redux";

import addClient from "./addClient";
import login from "./login";

const rootReducer = combineReducers({addClient, login});

export default rootReducer;