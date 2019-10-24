import React from "react";
import Draggable from "react-draggable";
import {
  Rectangle,
  Circle,
  Image
} from "./styles";
import { BasicForm } from "../../components/form"

export const PopUpWindowVideo = props => {
  const { bottom, left, video } = props;
  return (
    <div>
      <Draggable>
        <Rectangle bottom={bottom || "-240px"} left={left || "200px"}>
          <iframe
            title={'video'}
            src={video || ""}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
            style={{ padding: "15px 0px 5px 0px" }}
          ></iframe>

          <Circle>
            <div
              style={{
                cursor: "all-scroll",
                fontSize: "9px",
                color: "#FF00D6"
              }}
            >

            </div>
          </Circle>
        </Rectangle>
      </Draggable>
    </div >
  );
};

export const PopUpWindowImage = props => {
  const { src, bottom, left } = props;
  return (
    <Draggable>
      <Rectangle style={{ backgroundColor: 'yellow' }} bottom={bottom || "-240px"} left={left || "200px"}>
        <Image
          src={
            src ||
            "https://nordnorge.com/sites/n/nordnorge.com/files/570f0fc155e7b311737aa885d54880c8.jpg"
          }
          style={{ height: "200px", width: "auto", padding: "10px" }}
        />

        <Circle>
          <div
            style={{
              cursor: "all-scroll",
              fontSize: "9px",
              color: "#FF00D6"
            }}
          >

          </div>
        </Circle>
      </Rectangle>
    </Draggable>
  );
};

export const PopUpWindowForm = props => {
  return (
    <BasicForm />
  );
};
