import React from "react";
import { FlyContainer, FlyCircle, FlyText } from "./styles";

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
    <FlyContainer>
      <Destination name={"AM"} navigate={() => flyTo(59.6528, 6.4636, 20000)} />
      <Destination
        name={"NY"}
        navigate={() => flyTo(40.75234736086995, -73.97752525741629, 20000)}
      />
      <Destination
        name={"HI"}
        navigate={() => flyTo(40.74623043587812, -73.93683978026445, 20000)}
      />
    </FlyContainer>
  );
};
