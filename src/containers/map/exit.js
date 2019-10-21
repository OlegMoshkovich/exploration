import React from "react";

import Draggable from "react-draggable";
import { ExitCircle } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { globalPopUp } from "../../actions/popUpState";

export const Exit = () => {
  const dispatch = useDispatch();
  const popUpState = useSelector(state => state.popUpState.globalPopUp);
  let stateToggle;

  if (popUpState) {
    stateToggle = false;
  } else {
    stateToggle = true;
  };
  return (
    <Draggable
    >
      <ExitCircle
        toggle={stateToggle}
        onClick={() => {
          dispatch(globalPopUp(stateToggle));
        }}
      />
    </Draggable>
  );
};
