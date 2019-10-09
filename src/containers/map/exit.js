import React from "react";
import { Rectangle } from "./styles";
import Draggable from "react-draggable";
import { ExitCircle } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { globalPopUp } from "../../actions/popUpState";

export const Exit = () => {
  const dispatch = useDispatch();
  const popUpState = useSelector(state => state.popUpState.globalPopUp);

  return (
    <Draggable
      style={{
        cursor: "all-scroll"
      }}
    >
      <ExitCircle
        onClick={() => {
          dispatch(globalPopUp(true));
          console.log("hello");
        }}
      />
    </Draggable>
  );
};
