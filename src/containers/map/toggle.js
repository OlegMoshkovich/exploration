import React, { useState } from "react";

import Draggable from "react-draggable";
import { ToggleCircle } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { globalPopUp } from "../../actions/popUpState";
import { isProperty } from "@babel/types";

export const Toggle = (props) => {
  const [state, setState] = useState('true');

  function toggle() {
    state ? setState(false) : setState(true);
    console.log('console from the menu switch', props)
    return props.switch()
  }

  return (
    <Draggable
    >
      <ToggleCircle
        toggle={state}
        onClick={toggle}
      />
    </Draggable>
  );
};
