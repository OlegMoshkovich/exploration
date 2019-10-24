import React, { useState } from "react";
import { LinkContainer, LinkText } from "./styles";
import { Link } from "react-router-dom";
import { Circle } from "./circle";
import Draggable from "react-draggable";
import { green } from './colors'

export const Nav = () => {

  const [repeat] = useState(1);


  return (
    <Draggable
    >
      <LinkContainer>
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <Circle repeat={repeat} width={"30px"} animation={[{ scale: 0.7 }]}>
            <LinkText>home</LinkText>
          </Circle>
        </Link>
        <Link style={{ textDecoration: "none" }} to={"/map"}>
          <Circle repeat={repeat} width={"30px"} animation={[{ scale: 0.7 }]} color={'yellow'} >
            <LinkText>map</LinkText>
          </Circle>
        </Link>
        <Link style={{ textDecoration: "none" }} to={"/maptrips"}>
          <Circle repeat={repeat} width={"30px"} animation={[{ scale: 0.7 }]} color={green} >
            <LinkText>map</LinkText>
          </Circle>
        </Link>

        <Link style={{ textDecoration: "none" }} to={"/tiny"}>
          <Circle repeat={repeat} width={"30px"} animation={[{ scale: 0.7 }]}>
            <LinkText>tiny</LinkText>
          </Circle>
        </Link>
        <Link style={{ textDecoration: "none" }} to={"/material"}>
          <Circle repeat={repeat} width={"30px"} animation={[{ scale: 0.7 }]}>
            <LinkText>material</LinkText>
          </Circle>
        </Link>

        {/* <Link style={{ textDecoration: "none" }} to={"/type"}>
          <Circle repeat={repeat} width={"30px"} animation={[{ scale: 0.7 }]} color={'yellow'}>
            <LinkText>type</LinkText>
          </Circle>
        </Link> */}
        <Link style={{ textDecoration: "none" }} to={"/articles"}>
          <Circle repeat={repeat} width={"30px"} animation={[{ scale: 0.7 }]} color={'yellow'}>
            <LinkText>articles</LinkText>
          </Circle>
        </Link>
        {/* <Link style={{ textDecoration: "none" }} to={"/articles "}>
          <LinkCircle size={"35px"}>
            <LinkText>articles</LinkText>
          </LinkCircle>
        </Link> */}
        {/* <Link style={{ textDecoration: "none" }} to={"/tiny"}>
        <LinkCircle size={"35px"}>
          <LinkText>tiny</LinkText>
        </LinkCircle>
      </Link> */}
      </LinkContainer>
    </Draggable>
  );
};
