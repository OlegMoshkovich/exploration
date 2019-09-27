import React, { useState } from 'react';
import TweenOne from 'rc-tween-one';
import styled from 'styled-components';




const Container = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
height: 100%;
//  border: 1px solid pink;
`;

const Element = styled.div`
display:flex;
height: ${props => props.width};
width: ${props => props.width};
border-radius:50%;
background-color:blue;
color:white;
&:hover {
    background-color: yellow;
  }
`;

const Title = styled.div`
margin: 0px 0px 0px 10px; 
border:
`


export const Circle = (props) => {
    const [pause, setPause] = useState(true)
    const animation = props.animation || [
        { marginRight: '500px' },
        { scale: 0.2 },
    ];

    return (
        <Container key={props.index + 'somthing'}>

            <TweenOne
                animation={animation}
                reverse={props.pause || pause}
                repeat={2} // demo 演示需要，时间轴循环
                yoyo // demo 演示需要，时间轴循环
                style={{ transform: 'scale(1)' }}
            >
                <Element onClick={() => { pause ? setPause(false) : setPause(true) }} width={props.width} />



            </TweenOne>

            {/* <Title>title </Title> */}



        </Container >


    )

}