import React from "react";
import { Rectangle, FlyContainer, FlyCircle, FlyText } from "./styles";
import Draggable from "react-draggable";

export class Title extends React.Component {
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
    return (
      <Draggable
        {...dragHandlers}
        style={{
          cursor: "all-scroll"
        }}
      >
        <Rectangle display={this.state.display}>
          <div
            style={{
              padding: "0px 0px 3px 0px",
              cursor: " all-scroll"
            }}
          >
            Memories
          </div>
        </Rectangle>
      </Draggable>
    );
  }
}
