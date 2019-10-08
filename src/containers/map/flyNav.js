import React from "react";
import { FlyContainer, FlyCircle, FlyText } from "./styles";

export const Destination = props => {
  return (
    <FlyCircle onClick={props.navigate}>
      <FlyText> {props.name}</FlyText>
    </FlyCircle>
  );
};
