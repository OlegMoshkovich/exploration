import styled from 'styled-components';
const green = "#C0F75E"
const red = '#D44346'

export const AppContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
background-color:white;
//  border: 1px solid red;
height: ${props => props.height};
// width:200px;
`;

export const Container = styled.div`
display:flex;
flex-direction:column;
align-direction:center;
justify-content:space-around;
// border: 1px solid red;
height: 400px;
width:300px;
margin: 0px 400px 0px 0px;
`;

export const Box = styled.div`
position:absolute;
top:100px;
left:100px;
height: 70px;
width: 70px;
border-radius:50%;
background-color:	#F3C242;
color:yellow;
font-size:10px;
&:hover {
  background-color: #C0F75E;
}
`
export const LinkCircle = styled.div`
position: absolute;
display:flex;
justify-content: center;
align-items: center;
text-position:center;
font-size:10px;
top:100px;
right:100px;
width:40px;
height:40px;
border-radius:50%;
background-color:${green}
`