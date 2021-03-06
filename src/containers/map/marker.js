import React, { Component } from "react";
import { Marker, Popup } from "react-map-gl";
import Pin from "./pin";
import { PopUpWindowImage, PopUpWindowVideo } from "./popUpWindow";
import { connect } from "react-redux";


export class DestinationMarker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopUp: false
    };
  }

  togglePopUp = () => {
    const { showPopUp } = this.state
    if (showPopUp === false) {
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
      images,
      bottom,
      left,
      globalPopUpState,
      videos,
    } = this.props;

    const { showPopUp } = this.state;

    if (globalPopUpState && showPopUp) {
      this.setState({ showPopUp: false })
    }

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
          <Pin onClick={this.togglePopUp} color={this.props.color} />
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
            {videos && videos.map(video => (
              <PopUpWindowVideo video={video} bottom={bottom} left={left} />
            ))}

            {images.map(image => (
              <PopUpWindowImage src={image} bottom={bottom} left={left} />
            ))}


          </Popup>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ globalPopUpState: state.popUpState.enabled });

export default connect(
  mapStateToProps,
)(DestinationMarker);
