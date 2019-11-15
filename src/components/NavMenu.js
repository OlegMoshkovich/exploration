import React, { useState } from "react";
import { LinkContainer, LinkText, Text, LinkContainerBorder } from "./styles";
import { Link } from "react-router-dom";
import { Circle } from "./circle";
import Draggable from "react-draggable";
import { green } from './colors'

export const Nav = () => {

  const [repeat] = useState(1);

  const [text, setText] = useState('hello')


  return (
    <div>

      <Draggable>
        <LinkContainer top={'100px'}>

          <Link style={{ textDecoration: "none" }} to={"/"}>
            <Circle repeat={repeat} width={"30px"} animation={[{ scale: 0.7 }]} label={'home'}>
              <LinkText>home</LinkText>
            </Circle>
          </Link>

          <Link style={{ textDecoration: "none" }} to={"/map"}>
            <Circle repeat={repeat} width={"30px"} animation={[{ scale: 0.7 }]} label={'map'}>
              <LinkText>map</LinkText>
            </Circle>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/maptrips"}>
            <Circle repeat={repeat} width={"30px"} animation={[{ scale: 0.7 }]} label={'path'} >
              <LinkText>map</LinkText>
            </Circle>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/mapexperiment"}>
            <Circle repeat={repeat} width={"30px"} animation={[{ scale: 0.7 }]} label={'blocks'}>
              <LinkText>mapExtrusion</LinkText>
            </Circle>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/mapthree"}>
            <Circle repeat={repeat} width={"30px"} animation={[{ scale: 0.7 }]} label={'3D'}>
              <LinkText>map3D</LinkText>
            </Circle>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/material"}>
            <Circle repeat={repeat} width={"30px"} animation={[{ scale: 0.7 }]} label={'material'}>
              <LinkText>material</LinkText>
            </Circle>
          </Link>
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
