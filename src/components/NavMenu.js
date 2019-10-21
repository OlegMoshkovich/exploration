import React, { useState } from "react";
import { LinkContainer, LinkText } from "./styles";
import { Link } from "react-router-dom";
import { Circle } from "./circle";
import Draggable from "react-draggable";

export const Nav = () => {

  const [repeat] = useState(1);


  return (
    <Draggable
      style={{
        cursor: "all-scroll"
      }}
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
        <Link style={{ textDecoration: "none" }} to={"/form"}>
          <Circle repeat={repeat} width={"30px"} animation={[{ scale: 0.7 }]} >
            <LinkText>form</LinkText>
          </Circle>
        </Link>
        {/* <Link style={{ textDecoration: "none" }} to={"/home"}>
        <LinkCircle size={"35px"}>
          <LinkText>circles</LinkText>
        </LinkCircle>
      </Link>
      <Link style={{ textDecoration: "none" }} to={"/tiny"}>
        <LinkCircle size={"35px"}>
          <LinkText>tiny</LinkText>
        </LinkCircle>
      </Link> */}
      </LinkContainer>
    </Draggable>
  );
};
