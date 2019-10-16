import React from "react";
import { Rectangle } from "./styles";
import Draggable from "react-draggable";
import { CircleButton } from "./styles";



export const MoveButton = () => {

    const here = () => {
        console.log('here is clicked from move button')
    }

    return (
        <Draggable
            style={{
                cursor: "all-scroll"
            }}
        >
            <CircleButton
            />
        </Draggable>
    );
};

