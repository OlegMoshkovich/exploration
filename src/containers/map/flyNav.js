import React from "react";
import { FlyContainer, FlyText } from "./styles";
import Draggable from "react-draggable";
import { teal } from "../../components/colors"
import styled from "styled-components"

export const FlyCircle = styled.div`
  display: ${props => props.display || "block"};
  width: auto || 20px;
  height: 20px;
  padding: 5px 5px 5px 5px;
  background-color: ${teal};
  border: 1px solid ${teal};
  color: black;
  z-index: 105;
  font-size: 6px;
  cursor: "pointer";
`;

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
          name={"New York"}
          navigate={() => flyTo(40.75234736086995, -73.97752525741629, 1000)}
        />
        {/* <Destination
          name={"Allmannajuvet"}
          navigate={() => {
            flyTo(59.6528, 6.4636, 20000);
          }}
        /> */}
        {/* <Destination
          name={"Zhuhai"}
          navigate={() => flyTo(22.271, 113.5767, 20000)}
        /> */}
        <Destination
          name={"Overview"}
          navigate={() => flyTo(40.6528, 6.4636, 1000, 2)}

        />
      </FlyContainer>
    </Draggable>
  );
};
