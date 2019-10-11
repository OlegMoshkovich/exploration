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


      <TextContainer top={'430px'} left={'500px'}>
        <div>simple experiment - unconstrained </div>
        <div> reminder -- does not matter how slow - as long as you are moving
        </div>
      </TextContainer>
      <TextContainer top={'100px'} left={'100px'}>
        <div>Hi, I am Oleg. </div>
        <div>I use this website to experiment.</div>
        <div>At the moment I am attending <a href="https://www.recurse.com/">Recusrse Center</a> in New York.</div>
        <div>I like working with maps -- pink dot will take you to the current experiment.</div>
        <div>Some of my previous work is display <a href="http://www.olegmoshkovich.com">here</a></div>
      </TextContainer>

    </AppContainer >
  );
}

export default App;
