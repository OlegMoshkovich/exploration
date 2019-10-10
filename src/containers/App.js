import React, { useState } from "react";
import { components } from "../data";
import { Circle } from "../components/circle";
import {
  AppContainer,
  Container,
  Box,
  TextContainer
} from "../components/styles";
import { Nav } from "../components/NavMenu";

function App() {
  const [pause, setPause] = useState(true);
  const [repeat, setRepeat] = useState(1);
  const height = "1000px";
  const [coordY, setCoordY] = useState("100px");

  return (
    <AppContainer height={height}>
      <Nav />
      {/* <Box
        onClick={() => {
          return pause ? setPause(false) : setPause(true);
        }}
      >
        <div style={{ margin: "10px 0px 0px 20px" }}>Play</div>
      </Box> */}

      <Container top={coordY} direction="row">
        {components.map((component, index) => {
          return (
            <Circle
              repeat={repeat}
              width={component.width}
              animation={component.animation}
              // pause={pause}
              index={index}
              key={index}
            />
          );
        })}
      </Container>
      {/* <Container
        direction="row"
        top="100px"
        offset="right"
        offSetDistance="250px"
      >
        {components.map((component, index) => {
          return (
            <Circle
              repeat={repeat}
              width={component.width}
              animation={component.animation}
              pause={pause}
              index={index}
            />
          );
        })}
      </Container> */}

      <TextContainer>
        <div>press the circles to activate the animation</div>
        <div>... how can one turn thinking into doing</div>
        <div>
          ... and another one regarding the pace of improvement - does not
          matter how slow - as long as you are moving
        </div>
      </TextContainer>
    </AppContainer>
  );
}

export default App;
