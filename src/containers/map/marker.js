import React, { Component } from "react";
import { Marker, Popup } from "react-map-gl";
import Pin from "./pin";
import { PopUpWindow } from "./popUpWindow";

export class DestinationMarker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopUp: false
    };
  }

  togglePopUp = () => {
    console.log("show pop up ", this.state.showPopUp);
    if (this.state.showPopUp === false) {
      return this.setState({ showPopUp: true });
    } else {
      return this.setState({ showPopUp: false });
    }
  };

  render() {
    const {
      onDragStart,
      onDrag,
      onDragEnd,
      longitude,
      latitude,
      offsetLeft,
      offsetTop,
      name,
      toggle,
      popUpClose,
      popUpState
    } = this.props;

    const { showPopUp } = this.state;
    return (
      <div>
        <Marker
          longitude={longitude}
          latitude={latitude}
          offsetLeft={offsetLeft || -20}
          offsetTop={offsetTop || -10}
          draggable={true}
          onDragStart={onDragStart}
          onDrag={onDrag}
          onDragEnd={onDragEnd}
        >
          <Pin onClick={this.togglePopUp} />
        </Marker>

        {showPopUp && (
          <Popup
            latitude={latitude}
            longitude={longitude}
            closeButton={true}
            closeOnClick={true}
            onClose={this.setState({ showPopUp: false })}
            anchor="left"
          >
            {name}
            <PopUpWindow />
          </Popup>
        )}
      </div>
    );
  }
}
