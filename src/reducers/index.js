import taskReducer from "./taskReducers";
import displayKeyReducer from "./displayKeyReducer";
import typedKeyReducer from "./typedKeyReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  displayKey:displayKeyReducer,
  TypedKey:typedKeyReducer

});

export default rootReducer;
