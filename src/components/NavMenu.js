import React from "react";
import { LinkCircle, LinkContainer, LinkText } from "./styles";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <LinkContainer>
      <Link style={{ textDecoration: "none" }} to={"/"}>
        <LinkCircle size={"35px"}>
          <LinkText>map</LinkText>
        </LinkCircle>
      </Link>
      <Link style={{ textDecoration: "none" }} to={"/home"}>
        <LinkCircle size={"35px"}>
          <LinkText>circles</LinkText>
        </LinkCircle>
      </Link>
      <Link style={{ textDecoration: "none" }} to={"/tiny"}>
        <LinkCircle size={"35px"}>
          <LinkText>tiny</LinkText>
        </LinkCircle>
      </Link>
    </LinkContainer>
  );
};
