import React from "react";
import Draggable from "react-draggable";
import styled from 'styled-components'
import {
  Rectangle,
  Circle,
  Image
} from "./styles";
import { teal, green } from '../../components/colors'
import { BasicForm } from "../../components/form"

export const RectangleVideo = styled.div`
  position: absolute;
  // display: ${props => props.display || "block"};
  bottom: -100px;
  left: 300px;
  width: 200px;
  height: 160px;
  border-radius: 2%;
  padding: 10px;
  background-color: transparent;
  color: black;
  z-index: 105;
  @media (max-width: 768px) {
    width: 110px;
    height: 90px;
    bottom: 50px;
    left: 50px;
  }
`;

export const PopUpWindowVideo = props => {
  const { bottom, left, video } = props;
  return (
    <div>
      <Draggable>
        <RectangleVideo style={{ backgroundColor: teal }} bottom={bottom || "-100px"} left={left || "300px"}>

          <iframe
            title={'video'}
            src={video || ""}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            style={{
              padding: '2px',
              width: '100%',
              height: '100%',
              // border: '1px solid red',
              color: '#c0f75e'
            }}
          ></iframe>

          {/* <Circle /> */}
          {/* <div
              style={{
                cursor: "all-scroll",
                fontSize: "20px",
                color: "#FF00D6"
              }}
            /> */}
          {/* </Circle> */}
        </RectangleVideo>
      </Draggable>
    </div >
  );
};

export const PopUpWindowImage = props => {
  const { src, bottom, left } = props;
  return (
    <Draggable>
      <Rectangle style={{ backgroundColor: 'yellow' }} bottom={bottom || "150px"} left={left || "290px"}>
        <Image
          src={
            src ||
            "https://nordnorge.com/sites/n/nordnorge.com/files/570f0fc155e7b311737aa885d54880c8.jpg"
          }
        />
        <Circle />
      </Rectangle>
    </Draggable>
  );
};

export const PopUpWindowForm = props => {
  const { src, bottom, left } = props;
  return (
    <Rectangle style={{ backgroundColor: 'yellow' }} bottom={bottom || "150px"} left={left || "-440px"}>
      <BasicForm />
    </Rectangle >

  );
};
