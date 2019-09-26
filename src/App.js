import React, { useState, useEffect } from 'react';

import './App.css';
import { Simple } from './components/simple'
import styled from 'styled-components';

const AppContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
background-color:blue;
//  border: 1px solid red;
height: 1031px;
// height: ${props => props.height};
// width:200px;
`;

const Container = styled.div`
display:flex;
flex-direction:column;
align-direction:center;
justify-content:space-around;
// border: 1px solid red;
height: 600px;
width:600px;
`;

const Box = styled.div`
position:absolute;
top:100px;
left:100px;
height: 200px;
width: 200px;
border-radius:50%;
background-color:black;
color:yellow;
font-size:40px;
&:hover {
  background-color: yellow;
}
`


function App() {

  const [pause, setPause] = useState(true)
  const components = [{
    width: "60px", animation: [
      // { marginRight: '500px' },
      // { left: '40%' },
      // { top: '60px' },
      { scale: 0.6 },
      // { scale: 1 },
      // { top: 0 },
      // { left: '0%' },
    ]
  }, {
    width: "60px", animation: [
      // { marginRight: '500px' },
      // { left: '40%' },
      // { top: '60px' },
      { scale: 0.9 },
      // { scale: 1 },
      // { top: 0 },
      // { left: '0%' },
    ]
  }, {
    width: "60px", animation: [
      // { marginLeft: '200px' },
      // { left: '40%' },
      // { top: '60px' },
      { scale: 0.9 },
      // { scale: 1 },
      // { top: 0 },
      // { left: '0%' },
    ]
  }, {
    width: "30px", animation: [
      // { marginLeft: '200px' },
      // { left: '40%' },
      // { top: '60px' },
      { scale: 0.2 },
      // { scale: 2 },
      // { top: 0 },
      // { left: '0%' },
    ]
  }, {
    width: "100px", animation: [
      // { marginLeft: '200px' },
      // { left: '40%' },
      // { top: '60px' },
      { scale: 0.9 },
      // { scale: 1 },
      // { top: 0 },
      // { left: '0%' },
    ]
  }]
  const height = useWindowHeight(); // Our custom Hook
  console.log('height hook', height)
  return (

    <AppContainer height={height}>
      <Box onClick={() => {
        return (
          pause ? setPause(false) : setPause(true),
          console.log('pause is clicked', pause)
        )
      }}>
        <div style={{ margin: '30px 0px 0px 90px' }}>Play</div>
      </Box >
      <Container>
        {
          components.map((component, index) => {
            return (
              <Simple width={component.width} animation={component.animation} pause={pause} index={index} />
            )
          })
        }

      </Container>

    </AppContainer >

  );
}

function useWindowHeight() {
  const [height, setHeight] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return height;
}

export default App;
