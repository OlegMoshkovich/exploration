import styled from "styled-components";
const green = "#C0F75E";
const red = "#D44346";
// const purple = '#A56DF2'
const teal = "#B7F1FD";
const yellow = "#F3C242";
const pink = "#FF00D6";

export const Iterations = styled.input`
  position: absolute;
  top: 200px;
  left: 700px;
  font-size: 40px;
  width: 60px;
  background-color: ${teal};
  color: ${red};
  type: number;
  text-align: center;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: black;
  //  border: 1px solid ${red};
  height: ${props => props.height};
  // width:200px;
`;

export const Container = styled.div`
  position: absolute;
  top: ${props => props.top || "30px"};
  ${props => props.offset || "left"}: ${props =>
    props.offSetDistance || "300px"};
  display: flex;
  flex-direction: ${props => props.direction || "column"};
  align-direction: center;
  justify-content: space-around;
  // border: 1px solid ${props => props.borderColor || red};
  height: 600px;
  width: 360px;
  // margin: 50px 400px 0px 0px;
`;

export const Box = styled.div`
  position: absolute;
  top: 100px;
  left: 100px;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: #f3c242;

  color: yellow;
  font-size: 40px;
  &:hover {
    background-color: #c0f75e;
    cursor: pointer;
  }
`;
export const LinkCircle = styled.div`
  // position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-position: center;
  font-size: 10px;
  top: 100px;
  right: 100px;
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50%;
  // border: 1px solid white;
  border: 1px solid ${pink};
  background-color: ${green};
  z-index: 100;
`;

export const LinkContainer = styled.div`
position: absolute;
display:flex;
flex-direction:column;
justify-content: space-around;
align-items: center;
top:100px;
right:100px;
width:60px;
height:150px;
// border:1px solid ${teal};
// background-color:${pink};
z-index:300;
`;
export const LinkText = styled.div`
  color: black;
  z-index: 100;
  text-decoration: none;
  font-size: 10px;
`;

export const Element = styled.div`
  display: flex;
  height: ${props => props.width};
  width: ${props => props.width};
  border-radius: 50%;
  background-color: ${props => props.color};
  color: white;
  &:hover {
    background-color: ${green};
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  // border: 1px solid white;
  // width:400px;
  color: white;
  padding: 15px;
  top: ${props => props.top};
  left: ${props => props.left};
  z-index: 200;
  font-family: "Nunito", sans-serif;
`;
