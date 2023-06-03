import { combineReducers } from "redux";

import uqaReducer from "./uqareducer";


export default combineReducers({
  uqa: uqaReducer,
});
