import React, { Component } from "react";
import { Marker, Popup } from "react-map-gl";
import Pin from "./pin";
import { PopUpWindowImage, PopUpWindowVideo } from "./popUpWindow";
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

  _onMarkerDragStart = event => {
    console.log('start of the event')
    // this._logDragEvent('onDragStart', event);
  };

  _onMarkerDrag = event => {
    console.log('end of the event')
    // this._logDragEvent('onDrag', event);
  };

  _onMarkerDragEnd = event => {
    // this._logDragEvent('onDragEnd', event);
    this.setState({
      marker: {
        longitude: event.lngLat[0],
        latitude: event.lngLat[1]
      }
    });
  };
  togglePopUp = () => {
    const { globalPopUp } = this.props
    const { showPopUp } = this.state
    if (showPopUp === false) {
      return this.setState({ showPopUp: true });
    } else {
      return this.setState({ showPopUp: false });
    }

  };

  render() {
    const {
      longitude,
      latitude,
      offsetLeft,
      offsetTop,
      name,
      globalPopUpState,
    } = this.props;

    const { showPopUp, marker } = this.state;
    console.log('this.state from the drag component', this.state)

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
          <Pin onClick={this.togglePopUp} />
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
