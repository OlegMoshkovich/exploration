import React, { useState } from "react";
import { LinkCircle, LinkContainer, LinkText } from "./styles";
import { Link } from "react-router-dom";
import { Circle } from "./circle";

export const Nav = () => {
  const [pause, setPause] = useState(true);
  const [repeat, setRepeat] = useState(1);
  const height = "1000px";
  const [coordY, setCoordY] = useState("100px");

  return (
    <LinkContainer>
      <Link style={{ textDecoration: "none" }} to={"/tiny"}>
        <Circle repeat={repeat} width={"30px"} animation={[{ scale: 0.7 }]}>
          <LinkText>map</LinkText>
        </Circle>
      </Link>
      <Link style={{ textDecoration: "none" }} to={"/map"}>
        <Circle repeat={repeat} width={"30px"} animation={[{ scale: 0.7 }]}>
          <LinkText>button</LinkText>
        </Circle>
      </Link>
      <Link style={{ textDecoration: "none" }} to={"/"}>
        <Circle repeat={repeat} width={"30px"} animation={[{ scale: 0.7 }]}>
          <LinkText>map</LinkText>
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
  );
};
