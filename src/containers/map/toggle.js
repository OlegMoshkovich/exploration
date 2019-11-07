import React from "react";

import Draggable from "react-draggable";
import { ExitCircle } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { globalPopUp } from "../../actions/popUpState";

export const Toggle = (props) => {

  return (
    <Draggable
    >
      <ExitCircle
        onClick={props.switch}
      />
    </Draggable>
  );
};
