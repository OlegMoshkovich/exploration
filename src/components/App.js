import React, { useState } from 'react';
import { components } from '../data'
import '../styles/App.css';
import { Circle } from './circle'
import { AppContainer, Container, Box, LinkCircle, LinkContainer } from './styles'
import { Link } from 'react-router-dom'
import { Nav } from './NavMenu'



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

      <Nav />


    </AppContainer >

  );
}



export default App;
