import styled from 'styled-components';

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
height: 50px;
width: 50px;
border-radius:50%;
background-color:black;
color:yellow;
font-size:10px;
&:hover {
  background-color: yellow;
}
`