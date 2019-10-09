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
  const { flyTo, closeAllWindows } = props;
  return (
    <FlyContainer>
      <Destination
        name={"Allmannajuvet"}
        navigate={() => {
          flyTo(59.6528, 6.4636, 20000);
          // closeAllWindows();
        }}
      />
      <Destination
        name={"New York"}
        navigate={() => flyTo(40.75234736086995, -73.97752525741629, 1000)}
      />
      <Destination
        name={"Harold Inerlock"}
        navigate={() => flyTo(40.74623043587812, -73.93683978026445, 20000)}
      />
      <Destination
        name={"Zhuhai"}
        navigate={() => flyTo(22.271, 113.5767, 20000)}
      />
    </FlyContainer>
  );
};
