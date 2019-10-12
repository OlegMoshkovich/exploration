import React from 'react'
import styled from 'styled-components'
import { Nav } from '../components/NavMenu'

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: black;
  height: ${props => props.height};
  width:${props => props.width};
`;

const TinyConainer = styled.div`
font-family: 'Nunito', sans-serif;
font-size:40px;
margin: 20px 0px 0px 20px;
color: white;
`

const LinkA = styled.a`
display: block;
  margin: 20px 0px 40px  0px ;
  padding: 0px 0px 0px  20px ;
  border: 1px outset yellow;
  &:hover {
   background-color: yellow;
 };
 &:visited {
    color: blue;
  }
`;



export const Tiny = () => {
    return (
        <AppContainer width={'auto'} height={'1000px'}>

            <TinyConainer>
                <div>Tiny work goes here</div>
                <div>Light weight runtime for unity</div>
                <LinkA href='https://unity.com/solutions/instant-games' target='_blank'>info about the runtime</LinkA>
                <LinkA href='https://www.youtube.com/watch?v=-yubuk7jAb4%26list=PLX2vGYjWbI0TPRStIWx3UyNB8QqjNUj98%26index=2%26t=0s' target='_blank' >workshop</LinkA>
            </TinyConainer>



            <Nav />
        </AppContainer>
    )
}