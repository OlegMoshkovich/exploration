import React, { Component } from "react";
import { Marker, Popup } from "react-map-gl";
import Pin from "./pin";
import { connect } from "react-redux";
import { BasicForm } from '../../components/form'

export class DestinationMarkerDrag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopUp: false,
      marker: {
        latitude: this.props.latitude,
        longitude: this.props.longitude
      },
    };
  }

  _onMarkerDragEnd = event => {
    this.setState({
      marker: {
        longitude: event.lngLat[0],
        latitude: event.lngLat[1]
      }
    });
  };

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
      offsetLeft,
      offsetTop,
      name,
      globalPopUpState,
    } = this.props;

    const { showPopUp, marker } = this.state;
    if (globalPopUpState && showPopUp) {
      this.setState({ showPopUp: false })
    }

    return (
      <div>
        <Marker
          longitude={marker.longitude}
          latitude={marker.latitude}
          offsetLeft={offsetLeft || -20}
          offsetTop={offsetTop || -10}
          draggable={true}
          onDragStart={this._onMarkerDragStart}
          onDrag={this._onMarkerDrag}
          onDragEnd={this._onMarkerDragEnd}

        >
          <Pin onClick={this.togglePopUp} color={this.props.color} />
        </Marker>

        {showPopUp && (
          <Popup
            latitude={marker.latitude}
            longitude={marker.longitude}
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
              <BasicForm />
            </div>

          </Popup>
        )}
      </div>
    );
  }
}
const mapSateToProps = state => ({ globalPopUpState: state.popUpState.globalPopUp });

export default connect(
  mapSateToProps,

)(DestinationMarkerDrag);