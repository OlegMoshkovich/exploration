import React, { useState } from "react";

import Draggable from "react-draggable";
import { ToggleCircle } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { globalPopUp } from "../../actions/popUpState";
import { isProperty } from "@babel/types";

export const Toggle = (props) => {
  const [state, setState] = useState('true');
  console.log('props from the toggle', props)

  function toggle() {
    state ? setState(false) : setState(true);
    //when function is passed to the functional compoenet you have to actually call that funciton
    //just like it is done here
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
