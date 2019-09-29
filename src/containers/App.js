import React, { useState } from 'react';
import { components } from '../data'
import '../styles/App.css';
import { Circle } from '../components/circle'
import { AppContainer, Container, Box, TextContainer, Iterations } from '../components/styles'

import { Nav } from '../components/NavMenu'
// import styled from 'styled-components'



function App() {

  const [pause, setPause] = useState(true)
  const [repeat, setRepeat] = useState(2)
  const height = '1000px';
  const [coordY, setCoordY] = useState('100px')


  return (

    <AppContainer height={height} onContextMenu={(e) => {
      setCoordY(e.pageY + 'px')
      console.log('clicked', e.pageX, e.pageY)
      console.log('coordY', coordY)
    }} >
      <Nav />
      <Box onClick={() => {
        return (
          pause ? setPause(false) : setPause(true)
        )
      }}>
        <div style={{ margin: '10px 0px 0px 20px' }}>Play</div>
      </Box >
      <Iterations onChange={(e) => {
        setRepeat(e.target.value)
        console.log('inputing', repeat)
      }} />
      <Container borderColor="#A56DF2" top={coordY}>
        {
          components.map((component, index) => {
            return (
              <Circle repeat={repeat} width={component.width} animation={component.animation} pause={pause} index={index} key={index} />
            )
          })
        }
      </Container>
      <Container direction='rox' top="100px" offset="right" offSetDistance="250px" >
        {
          components.map((component, index) => {
            return (
              <Circle repeat={repeat} width={component.width} animation={component.animation} pause={pause} index={index} />
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
