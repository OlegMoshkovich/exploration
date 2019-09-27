import React, { useState, useEffect } from 'react';
import { Router, Route, Switch } from "react-router";
import { components } from './data'
import './App.css';
import { Circle } from './components/circle'
import { useWindowHeight } from './hooks/customHooks'
import { AppContainer, Container, Box } from './components/styles'


function App() {

  const [pause, setPause] = useState(true)
  // const height = useWindowHeight(); // Our custom Hook
  const height = '1000px';


  return (

    <AppContainer height={height}>
      <Box onClick={() => {
        return (
          pause ? setPause(false) : setPause(true),
          console.log('pause is clicked', pause)
        )
      }}>
        {/* <div style={{ margin: '10px 0px 0px 20px' }}>Play</div> */}
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

    </AppContainer >

  );
}



export default App;
