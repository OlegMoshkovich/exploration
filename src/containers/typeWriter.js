import React, { useState, useEffect } from 'react';
import { longMessage } from '../data'
import { Nav } from '../components/NavMenu'

const CONSTANTS = {
    DELETING_SPEED: 100,
    TYPING_SPEED: 50,
}

export const TypeWriter = ({ messages, heading }) => {

    const [state, setState] = useState({
        text: "",
        message: "",
        isDeleting: false,
        loopNum: 10,
        Loop: 0,
        typingSpeed: CONSTANTS.TYPING_SPEED
    });

    useEffect(
        () => {
            let timer = "";
            const handleType = () => {
                setState(cs => ({
                    ...cs, // cs means currentState
                    text: getCurrentText(cs),
                    typingSpeed: getTypingSpeed(cs)
                }));
                timer = setTimeout(handleType, state.typingSpeed);
            };
            handleType();
            return () => clearTimeout(timer);
        }, []);

    useEffect(() => {
        setState(cs => ({
            ...cs,
            loop: 1
        }))
        if (!state.isDeleting && state.text === state.message) {
            setTimeout(() => {
                setState(cs => ({
                    ...cs,
                    isDeleting: true
                }))
            }, 500);
        } else if (state.isDeleting && state.text === "") {
            setState(cs => ({
                ...cs, // cs means currentState
                isDeleting: false,
                loopNum: cs.loopNum + 1,
                message: getMessage(cs, messages)
            }));
        }
    }, [state.text, state.message, state.isDeleting, messages]);

    function getCurrentText(currentState) {
        return (
            currentState.isDeleting
                ? currentState.message.substring(0, currentState.text.length - 1)
                : currentState.message.substring(0, currentState.text.length + 1)
        )
    }

    function getMessage(currentState, data) {
        return data[Number(currentState.loopNum) % Number(data.length)];
    }

    function getTypingSpeed(currentState) {
        console.log('get current typing speed is called', currentState)

        return currentState.isDeleting
            ? CONSTANTS.TYPING_SPEED
            : CONSTANTS.DELETING_SPEED;
    }

    return (
        <h1>
            <span style={{ fontSize: '100px' }}>{state.text}</span>
        </h1>
    );
}

export const TypeMessage = () => {
    let msgs = ["HI, I am Oleg. ", longMessage, 'the end'];
    return (
        <div>
            <Nav />
            <TypeWriter messages={msgs} />
        </div>
    )
}



