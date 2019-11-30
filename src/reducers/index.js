import { combineReducers } from "redux";
import popUpState from "./popUpState";
import setMarkers from "./setMarkers";

export const experimentApp = combineReducers({
  popUpState,
  setMarkers
});
