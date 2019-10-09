import React, { Component } from "react";
import { Marker, Popup } from "react-map-gl";
import Pin from "./pin";
import { PopUpWindow } from "./popUpWindow";
import { connect } from "react-redux";

export class DestinationMarker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopUp: false
    };
  }
  // componentWillReceiveProps() {
  //   if (this.props.globalPopUp === false) {
  //     return this.setState({ showPopUp: false });
  //   }
  // }

  togglePopUp = () => {
    if (this.props.globalPopUp === true) {
      if (this.state.showPopUp === false) {
        return this.setState({ showPopUp: true });
      } else {
        return this.setState({ showPopUp: false });
      }
    }
    if (this.props.globalPopUp === true) {
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
      popUpState,
      images,
      bottom,
      left,
      globalPopUpState
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
            closeButton={false}
            closeOnClick={false}
            onClose={this.togglePopUp}
            anchor="left"
          >
            <div
              style={{
                margin: "5px 0px 3px 0px",
                fontSize: "10px"
              }}
            >
              {name}
            </div>
            <div
              style={{
                margin: "5px 0px 3px 0px",
                fontSize: "10px"
              }}
            >
              {this.props.globalPopUpState}
            </div>
            {images.map(image => (
              <PopUpWindow src={image} bottom={bottom} left={left} />
            ))}
          </Popup>
        )}
      </div>
    );
  }
}
const mapSateToProps = state => ({ globalPopUp: state.popUpState.globalPopUp });

export default connect(
  mapSateToProps,
  null
)(DestinationMarker);
