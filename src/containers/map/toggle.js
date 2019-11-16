import React, { useState } from "react";

import Draggable from "react-draggable";
import { ToggleCircle } from "./styles";

export const Toggle = (props) => {
  const [state, setState] = useState('true');


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
        color={props.color}
        color1={props.color1}
        toggle={state}
        onClick={toggle}
      />
    </Draggable>
  );
};
