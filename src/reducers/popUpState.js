const initialState = {
  enabled: false
};

const popUpState = (state = initialState, action) => {
  switch (action.type) {
    case "GLOBAL_POPUP":
      return { ...initialState, enabled: action.payload };
    default:
      return initialState;
  }
};

export default popUpState;
