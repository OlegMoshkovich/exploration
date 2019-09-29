import React, { useState } from 'react';
import { components } from '../data'
import '../styles/App.css';
import { Circle } from './circle'
import { AppContainer, Container, Box, LinkCircle, LinkContainer, TextContainer } from './styles'
import { Link } from 'react-router-dom'
import { Nav } from './NavMenu'
import styled from 'styled-components'





function App() {

  const [pause, setPause] = useState(true)
  // const height = useWindowHeight(); // Our custom Hook
  const height = '1000px';


  return (

    <AppContainer height={height}>
      <Nav />
      <Box onClick={() => {
        return (
          pause ? setPause(false) : setPause(true),
          console.log('pause is clicked', pause)
        )
      }}>
        <div style={{ margin: '10px 0px 0px 20px' }}>Play</div>
      </Box >
      <Container>
        {
          components.map((component, index) => {
            return (
              <Circle width={component.width} animation={component.animation} pause={pause} index={index} />
            )
          })
        }

      </Container>

      <TextContainer>
        <div> press the circles to activate the animation -- then press play</div>
        <div>  ... and while we are at shall we contemplate how we can turn thinking into doing</div>
      </TextContainer>


    </AppContainer >

  );
}



export default App;
