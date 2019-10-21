import React from "react";
import { Rectangle } from "./styles";
import Draggable from "react-draggable";
import { CircleButton } from "./styles";

export const MoveButton = () => {
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

