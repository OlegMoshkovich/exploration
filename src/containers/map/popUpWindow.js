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
  onStart = () => {
    this.setState({
      activeDrags: ++this.state.activeDrags
    });
  };

  onStop = () => {
    this.setState({
      activeDrags: --this.state.activeDrags
    });
  };

  render() {
    const dragHandlers = {
      onStart: this.onStart,
      onStop: this.onStop
    };
    const { src, bottom, left } = this.props;
    return (
      <Draggable {...dragHandlers}>
        <Rectangle bottom={bottom || "-240px"} left={left || "200px"}>
          <Image
            src={
              src ||
              "https://nordnorge.com/sites/n/nordnorge.com/files/570f0fc155e7b311737aa885d54880c8.jpg"
            }
            // style={{ 'width': '100px', 'padding': '10px' }}
          />
          <Circle>
            <div
              style={{
                cursor: "all-scroll"
              }}
            >
              move me
            </div>
          </Circle>
        </Rectangle>
      </Draggable>
    );
  }
}
