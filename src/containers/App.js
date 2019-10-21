import React, { useState, useEffect } from "react";
import { components } from "../data";
import { Circle } from "../components/circle";
import {
  Container,
  TextContainer
} from "../components/styles";
import { Nav } from "../components/NavMenu";
import styled from 'styled-components';


const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: black;
  height: ${props => props.height};
  width:${props => props.width};
`;



const LinkA = styled.a`
color:blue;
text-decoration: none;
  font-family: "Nunito", sans-serif;
  &:hover {
    color: pink;
 };
 &:visited {
    color: blue;
  }
`;


function App() {
  const [repeat, setRepeat] = useState(3);
  const height = "1000px";
  useEffect(() => {
    setRepeat(1)
  }, []);
  return (
    <AppContainer height={height} width={'auto'}>
      <Nav />
      <Container top={'100px'} direction="row">
        {components.map((component, index) => {
          return (
            // <div key={index + 'app circle contained'} >
            <Circle
              key={index + 'app circle'}
              repeat={repeat}
              width={component.width}
              animation={component.animation}
              index={index + 'app circle'}
            />
            // </div>
          );
        })}
      </Container>


      <TextContainer top={'490px'} left={'500px'}>
        <div>simple experiment - unconstrained </div>
        <div> reminder -- does not matter how slow - as long as you are moving
        </div>
      </TextContainer>
      <TextContainer top={'100px'} left={'100px'}>
        <div>Hi, I am Oleg. </div>
        <div>I use this page to experiment.</div>
        <div>At the moment I am attending <LinkA href="https://www.recurse.com/">Recusrse Center</LinkA> in New York.</div>
        <div>Yellow dot will take you to the current experiment.</div>
        <div>Some of my previous work is displayed <LinkA href="http://www.olegmoshkovich.com">here</LinkA></div>
      </TextContainer>

    </AppContainer >
  );
}

export default App;
