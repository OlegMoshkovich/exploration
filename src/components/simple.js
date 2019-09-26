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

const Circle = styled.div`
display:flex;
height: ${props => props.width};
width: ${props => props.width};
border-radius:50%;
background-color:black;
color:white;
&:hover {
    background-color: yellow;
  }
`;


export const Simple = (props) => {
    const [pause, setPause] = useState(true)
    const animation = props.animation || [
        { marginRight: '500px' },
        // { left: '40%' },
        // { top: '60px' },
        { scale: 0.2 },
        { scale: 1 },
        // { top: 0 },
        // { left: '0%' },
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
                <Circle onClick={() => { pause ? setPause(false) : setPause(true) }} width={props.width} />


            </TweenOne>




        </Container >


    )

}