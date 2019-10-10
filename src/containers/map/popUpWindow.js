import React from "react";
import {
  Rectangle,
  FlyContainer,
  FlyCircle,
  FlyText,
  Circle,
  Image
} from "./styles";
import Draggable from "react-draggable";

export class PopUpWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeDrags: 0 };
  }

  render() {
    const { src, bottom, left } = this.props;
    return (
      <div>
        <Draggable>
          <Rectangle bottom={bottom || "-240px"} left={left || "200px"}>
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
                e
              </div>
            </Circle>
          </Rectangle>
        </Draggable>
        <Draggable>
          <Rectangle bottom={bottom || "-240px"} left={left || "200px"}>
            <iframe
              src="https://player.vimeo.com/video/123730837#t=29s"
              frameborder="0"
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
                e
              </div>
            </Circle>
          </Rectangle>
        </Draggable>
      </div>
    );
  }
}
