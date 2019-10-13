import { globalPopUp } from "../actions/popUpState";

const initialState = {
  globalPopUp: false
};
const popUpState = (state = initialState, action) => {
  switch (action.type) {
    case "GLOBAL_POPUP":
      return { ...initialState, globalPopUp: action.payload };
    default:
      return initialState;
  }
};

export default popUpState;
