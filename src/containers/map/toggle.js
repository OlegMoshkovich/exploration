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
        <svg x="0px" y="0px"
          viewBox="0 0 100 101.48"  >
          <g>
            <rect x="12.05" y="27.07" width="75.9" height="5" />
            <rect x="12.05" y="47.5" width="75.9" height="5" />
            <rect x="12.05" y="67.93" width="75.9" height="5" />
          </g>
        </svg>
      </ToggleCircle>
    </Draggable >
  );
};
