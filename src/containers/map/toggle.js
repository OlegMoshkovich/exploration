import React, { useState } from "react";

import Draggable from "react-draggable";
import { ToggleCircle, Image } from "./styles";


export const Toggle = (props) => {
  const [state, setState] = useState('true');

  function toggle() {
    state ? setState(false) : setState(true);
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
      >
        {props.children}
      </ToggleCircle>
    </Draggable >
  );
};
