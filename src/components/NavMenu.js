import React, { useState, useEffect } from "react";
import { LinkContainer, LinkText, Text, LinkContainerBorder } from "./styles";
import { Link } from "react-router-dom";
import { Circle } from "./circle";
import Draggable from "react-draggable";
import { green } from './colors'
import { getThemeProps } from "@material-ui/styles";

export const Nav = (props) => {

  const [repeat] = useState(1);
  const [positionX, setPositionX] = useState(props.position.right)
  const [positionY, setPositionY] = useState(props.position.top)

  useEffect(() => {
    console.log('use effect is ran')
    setPositionX(props.position.right)
    setPositionY(props.position.top)

  }, []);


  const handleStop = (e, ui) => {
    // console.log('from the handle stop', ui.lastX)
    // console.log('from the handle stop', ui.lastY)
    // setPositionX(Math.abs(ui.lastX))
    // setPositionY(Math.abs(ui.lastY))
    console.log('props from the nav menu', props)
    props.capturePosition({ top: Math.abs(Math.floor(ui.lastY)), right: Math.abs(Math.floor(ui.lastX)) })
  }


  // console.log('state of the position YY', positionY)
  // console.log('state of the position XX', positionX)
  return (
    <div>

      <Draggable
        onStop={handleStop}>

        <LinkContainer
          top={`${positionY}px`} right={`${positionX}px`}
        >

          <Link style={{ textDecoration: "none" }} to={"/"}>
            <Circle repeat={repeat} width={"30px"} animation={[{ scale: 0.7 }]} label={'home'}>
              {/* <LinkText>home</LinkText> */}
            </Circle>
          </Link>

          {/* <Link style={{ textDecoration: "none" }} to={"/map"}>
            <Circle repeat={repeat} width={"30px"} animation={[{ scale: 0.7 }]} label={'map'}>
              <LinkText>map</LinkText>
            </Circle>
          </Link> */}

          <Link style={{ textDecoration: "none" }} to={"/maptrips"}>
            <Circle repeat={repeat} width={"30px"} animation={[{ scale: 0.7 }]} label={'path'} >
              {/* <LinkText>map</LinkText> */}
            </Circle>
          </Link>

          {/* <Link style={{ textDecoration: "none" }} to={"/mapexperiment"}>
            <Circle repeat={repeat} width={"30px"} animation={[{ scale: 0.7 }]} label={'blocks'}>
              <LinkText>mapExtrusion</LinkText>
            </Circle>
          </Link> */}
          <Link style={{ textDecoration: "none" }} to={"/mapthree"}>
            <Circle repeat={repeat} width={"30px"} animation={[{ scale: 0.7 }]} label={'3D'}>
              {/* <LinkText>map3D</LinkText> */}
            </Circle>
          </Link>
          {/* <Link style={{ textDecoration: "none" }} to={"/material"}>
            <Circle repeat={repeat} width={"30px"} animation={[{ scale: 0.7 }]} label={'material'}>
              <LinkText>material</LinkText>
            </Circle>
          </Link> */}
          <Link style={{ textDecoration: "none" }} to={"/articles"}>
            <Circle repeat={repeat} width={"30px"} animation={[{ scale: 0.7 }]} color={'yellow'} label={'dynamic type'}>
              <LinkText>articles</LinkText>
            </Circle>
          </Link>
        </LinkContainer>


      </Draggable>
    </div>
  );
};
