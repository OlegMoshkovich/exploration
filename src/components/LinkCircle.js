import React from 'react';
import { Link } from 'react-router-dom';
import { LinkCircle } from './styles'
import TweenOne from 'rc-tween-one';


const animation = [
    { scale: '0.2' },
];

export const LinkCircleWrapper = (props) => {
    return (

        // <TweenOne
        //     animation={animation}
        //     repeat={1} // demo 演示需要，时间轴循环
        //     yoyo // demo 演示需要，时间轴循环
        // >
        <Link to={props.route}><LinkCircle>{props.linkName}</LinkCircle></Link>
        // {/* </TweenOne> */ }


    )
}