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
import { Popover, Button } from 'antd';
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);




function App() {
  const [pause, setPause] = useState(true);
  const [repeat, setRepeat] = useState(1);
  const height = "1000px";
  const [coordY, setCoordY] = useState("100px");

  const text = <span>Title</span>;
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  const buttonWidth = 70;
  const [show, setShow] = useState(false)

  return (
    <AppContainer height={height}>
      <Nav />


      <Container top={coordY} direction="row">
        {components.map((component, index) => {
          return (
            <div >

              <Circle
                repeat={repeat}
                width={component.width}
                animation={component.animation}
                index={index}
                key={index}
              />


            </div>



          );
        })}
      </Container>


      <TextContainer>
        <div>simple experiment - unconstrained </div>
        <div>... how can you turn thinking into doing</div>
        <div>
          ... and another one regarding the pace of improvement - does not
          matter how slow - as long as you are moving
        </div>
      </TextContainer>
    </AppContainer>
  );
}

export default App;
