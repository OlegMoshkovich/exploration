import React, { useState } from 'react';
import TweenOne from 'rc-tween-one';
import styled from 'styled-components';
import { Element } from './styles';

const green = "#C0F75E"
const red = '#D44346'

const Container = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
height: 100%;
//  border: 1px solid pink;
`

export const Circle = (props) => {
    const [pause, setPause] = useState(true)
    const animation = props.animation || [
        { marginRight: '500px' },
        { scale: 0.2 },
    ];
    // console.log('from the circle', pause)

    return (
        <Container key={props.index + 'container'}>

            <TweenOne
                key={props.index + 'tween'}
                animation={animation}
                reverse={props.pause || pause}
                repeat={props.repeat || 1} // demo 演示需要，时间轴循环
                yoyo // demo 演示需要，时间轴循环
            >
                <Element key={props.index + 'element'} onClick={() => { pause ? setPause(false) : setPause(true) }} width={props.width} color={pause ? red : green} />
            </TweenOne>
        </Container >


    )

}