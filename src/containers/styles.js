import React from 'react';
import styled from 'styled-components'

export const Rectangle = styled.div`
position:absolute;
display:${props => props.display || 'block'};
bottom:${props => props.bottom || '100px'};
left:${props => props.left || '100px'};
width: auto;
border-radius:5%;
height: auto;
padding:5px 5px 5px 5px;
background-color: #C0F75E;
border:1px solid #F3C242;
color: #F3C242;
z-index:105;
font-size:20px;
font-weight:bold;

`

export const Image = styled.img`
width: 200px;
height: auto;
padding:10px;
// border-radius:15%;
`
export const Text = styled.div`
display:${props => props.display || 'block'};
width: auto;
height: auto;
margin:10px 5px 5px 5px ;
// background-color: #C0F75E;
// border:1px solid #F3C242;
color = #C0F75E;
z-index:105;
font-size:10px;
`

// export const Circle = styled.div`
// position = relative;
// // top:2px;
// // left:2px;
// width: 20px;
// height: 20px;
// border-radius:50%;
// background-color: #F3C242;
// border:1px solid #F3C242;
// z-index:106;
// `

export const Circle = styled.div`
position = absolute;
top:100px;
left:20px;
width: 20px;
height: 20px;
border-radius:50%;
background-color: #F3C242;
border:1px solid #F3C242;

z-index:106;

// `
// export const Circle = styled.div`
// position:absolute;
// display:${props => props.display || 'block'};
// bottom:200px;
// left:100px;
// width: auto;
// border-radius:5%;
// height: auto;
// padding:5px 5px 5px 5px;
// background-color: #C0F75E;
// border:1px solid #F3C242;
// z-index:105;
// font-size:10px;`