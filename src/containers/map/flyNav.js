import React from "react";
import { FlyContainer, FlyCircle, FlyText } from "./styles";
import Draggable from "react-draggable";

export const Destination = props => {
  return (
    <FlyCircle onClick={props.navigate}>
      <FlyText> {props.name}</FlyText>
    </FlyCircle>
  );
};

export const FlyDestinations = props => {
  const { flyTo } = props;

  return (
    <Draggable
    >
      <FlyContainer>
        <Destination
          name={"Grand Central"}
          navigate={() => flyTo(40.75234736086995, -73.97752525741629, 10000)}
        />
        <Destination
          name={"Allmannajuvet"}
          navigate={() => {
            flyTo(59.6528, 6.4636, 20000);
          }}
        />
        <Destination
          name={"Zhuhai"}
          navigate={() => flyTo(22.271, 113.5767, 20000)}
        />
        <Destination
          name={"Overview"}
          navigate={() => flyTo(40.6528, 6.4636, 1000, 2)}

        />
      </FlyContainer>
    </Draggable>
  );
};
