import React, { useState } from "react";
import TweenOne from "rc-tween-one";
import styled from "styled-components";
import { Element } from "./styles";
import { teal, } from './colors'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;

  z-index: 200;
`;

const Text = styled.div`
  flex: none;
  font-size: 15px;
  color:transparent;
  text-align:right;
  margin: 0px 20px 0px 0px;
  font-family:Nunito;
  font-weight: bold;
  width: 80px;
  // font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  ${Container}:hover & {
    color:${'white'};
  }
`;


export const Circle = props => {
  const [pause, setPause] = useState(false);
  const animation = props.animation;
  return (
    <Container key={props.index + "container"}>
      {/* <Text>{props.label || ''}</Text> */}
      <TweenOne
        key={props.index + "tween"}
        animation={animation}
        reverse={props.pause || pause}
        repeat={props.repeat || 2} // demo 演示需要，时间轴循环
        yoyo // demo 演示需要，时间轴循环
      >
        <Element
          onClick={() => {
            console.log('clicked')
            pause ? setPause(false) : setPause(true);
          }}
          width={props.width}
          color={props.color || teal}
          key={props.index + "element"}
        />
      </TweenOne>

    </Container>
  );
};
