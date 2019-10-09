import React from "react";
import styled from "styled-components";

const green = "#C0F75E";
const red = "#D44346";
// const purple = '#A56DF2'
const teal = "#B7F1FD";
const yellow = "#F3C242";

export const Rectangle = styled.div`
  position: absolute;
  display: ${props => props.display || "block"};
  bottom: ${props => props.bottom || "100px"};
  left: ${props => props.left || "100px"};
  width: auto;
  border-radius: 5%;
  height: auto;
  padding: 5px 5px 5px 5px;
  background-color: #c0f75e;
  border: 1px solid #f3c242;
  // color: #F3C242;
  color: black;
  z-index: 105;
  font-size: 10px;
  cursor: "all-scroll";
`;
export const Image = styled.img`
  width: 200px;
  height: auto;
  padding: 10px;
  // border-radius:15%;
`;
export const Text = styled.div`
display:${props => props.display || "block"};
width: auto;
height: auto;
margin:10px 5px 5px 5px ;
// background-color: #C0F75E;
// border:1px solid #F3C242;
color = #C0F75E;
z-index:105;
font-size:10px;
`;
export const Circle = styled.div`
position = absolute;
top:100px;
left:20px;
width: 20px;
height: 20px;
border-radius:50%;
background-color: #F3C242;
border:1px solid #F3C242;
font-size:5px;
z-index:106;
cursor: 'all-scroll' ;
 `;

export const FlyCircle = styled.div`
  display: ${props => props.display || "block"};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 2px 0px 0px 2px;
  background-color: ${green};
  border: 1px solid ${red};
  color: black;
  z-index: 105;
  font-size: 6px;
  cursor: "pointer";
`;
export const FlyText = styled.div`
  margin: 3px 0px 0px 2px;
  font-size: 8px;
  cursor: pointer;
`;

export const FlyContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: ${props => props.bottom || "60px"};
  left: ${props => props.left || "100px"};
  width: auto;
  height: 120px;
  padding: 5px;
  border: 1px solid ${teal};
  z-index: 105;
  font-size: 10px;
  cursor: "pointer";
`;