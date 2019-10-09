import { globalPopUp } from "../actions/popUpState";

const popUpState = (state = {}, action) => {
  switch (action.type) {
    case "GLOBAL_POPUP":
      return action.payload;
    default:
      return state;
  }
};

export default popUpState;
