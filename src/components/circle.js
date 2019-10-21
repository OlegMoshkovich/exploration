import React, { useState } from "react";
import TweenOne from "rc-tween-one";
import styled from "styled-components";
import { Element } from "./styles";
import { teal } from './colors'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 200;
`;

export const Circle = props => {
  const [pause, setPause] = useState(true);
  const animation = props.animation;
  return (
    <Container key={props.index + "container"}>
      <TweenOne
        key={props.index + "tween"}
        animation={animation}
        reverse={props.pause || pause}
        repeat={props.repeat || 1} // demo 演示需要，时间轴循环
        yoyo // demo 演示需要，时间轴循环
      >
        <Element
          onClick={() => {
            pause ? setPause(false) : setPause(true);
          }}
          width={props.width}
          color={props.color || teal}
        />
      </TweenOne>
    </Container>
  );
};
