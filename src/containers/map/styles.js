
import styled from "styled-components";
import { device } from '../../utils/devices'


const green = "#C0F75E";
const teal = "#B7F1FD";
const pink = "#FF00D6";

export const Rectangle = styled.div`
  position: absolute;
  display: ${props => props.display || "block"};
  bottom: ${props => props.bottom || "100px"};
  left: ${props => props.left || "100px"};
  width: auto;
  height: auto;
  border-radius: 2%;
  padding: 4px;
  background-color: #c0f75e;
  // border: 1px solid ${teal};
  // color: #F3C242;
  color: black;
  z-index: 105;
  font-size: 10px;
  cursor: "all-scroll";
  @media (max-width: 768px) {
    bottom: 170px;
    left: -120px;
  }

`;

export const Image = styled.img`
width: auto;
height: 200px;
padding: 10px;
@media (max-width: 768px) {
  height: 100px;
}
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
// position = absolute;
width: 10px;
height: 10px;
padding:{ 0px 0px 0px 20px}
border-radius:50%;
background-color: ${teal};;
border:1px solid ${teal};
font-size:5px;
z-index:106;
cursor: 'pointer' ;
 `;

export const ExitCircle = styled.div`
  position: absolute;
  display: ${props => props.display || "block"};
  bottom: ${props => props.bottom || "150px"};
  left: ${props => props.left || "50px"};
  width: 15px;
  border-radius: 50%;
  height: 15px;
  padding: 5px 5px 5px 5px;
  background-color: ${props => (props.toggle ? pink : teal)};
  border: 1px solid ${teal};
  // color: #F3C242;
  color: black;
  z-index: 105;
  font-size: 10px;
  cursor: "pointer";
`;

export const FlyCircle = styled.div`
  display: ${props => props.display || "block"};
  width: auto || 20px;
  height: 20px;
  // border-radius: 50%;
  padding: 2px 0px 0px 2px;
  background-color: ${teal};
  border: 1px solid ${teal};
  color: black;
  z-index: 105;
  font-size: 6px;
  cursor: "pointer";
`;
export const FlyText = styled.div`
  margin: 4px 4px 0px 2px;
  font-size: 7px;
  cursor: pointer;
`;

export const FlyContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: ${props => props.bottom || "100px"};
  left: ${props => props.left || "80px"};
  width: auto;
  height: 160px;
  padding: 5px;
  border: 1px solid ${teal};
  z-index: 105;
  font-size: 10px;
  cursor: "pointer";
`;
