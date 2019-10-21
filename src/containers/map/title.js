import React from "react";
import { Rectangle } from "./styles";
import Draggable from "react-draggable";

export class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeDrags: 0 };
  }


  render() {
    const dragHandlers = {
      onStart: this.onStart,
      onStop: this.onStop
    };
    return (
      <Draggable
        {...dragHandlers}
      >
        <Rectangle display={this.state.display}>
          <div
            style={{
              padding: "0px 0px 3px 0px",
              cursor: " all-scroll"
            }}
          >
            {this.props.title}
          </div>
        </Rectangle>
      </Draggable>
    );
  }
}
