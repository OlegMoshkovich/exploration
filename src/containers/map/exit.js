import React from "react";
import { Rectangle } from "./styles";
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
  }
  console.log("state toggle from the exit", stateToggle);
  return (
    <Draggable
      style={{
        cursor: "all-scroll"
      }}
    >
      <ExitCircle
        toggle={stateToggle}
        onClick={() => {
          dispatch(globalPopUp(stateToggle));
          console.log("pop up state from the", popUpState);
        }}
      />
    </Draggable>
  );
};
