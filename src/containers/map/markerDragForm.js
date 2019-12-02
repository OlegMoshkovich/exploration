import React, { Component } from "react";
import { Marker, Popup } from "react-map-gl";
import Pin from "./pin";
import { connect } from "react-redux";
import { BasicForm } from '../../components/form'
import { Rectangle } from './styles'
import { Toggle } from './toggle'

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
    this.props.record(event.lngLat);
    console.log('------ on drag start', event)
  }
  _onMarkerDragEnd = event => {
    console.log('event on the drag end', event)
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
      field1
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
          {/* <Pin onClick={() => this.props.onClick(name)} color={this.props.color} /> */}
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
                fontSize: "10px",
              }}
            >
              {field1}
              {/* <BasicForm /> */}

            </div>
            <div style={{ position: 'absolute', top: '200px', right: '0px' }}>
              <Toggle switch={() => this.props.onClick(name)} color={'blue'} color1={'blue'} >
                  <svg   x="0px" y="0px" viewBox="0 0 100 95.7">

                <g>
                  <path style ={{fill:'#FFFFFF'}}class="st0" d="M74.6,16.6c-0.2-1.5-1.5-2.6-3.1-2.6h-43c-1.5,0-2.8,1.1-3.1,2.6l-6.9,37.8c0,0.1,0,0.2,0,0.3C18.2,55,18,55.4,18,55.9v22
                    c0,1.7,1.4,3.1,3.1,3.1H79c1.7,0,3.1-1.4,3.1-3.1v-22c0-0.5-0.2-0.9-0.5-1.3c0-0.1,0-0.2,0-0.3L74.6,16.6z M29.2,18h41.6l6.6,35.9
                    H62.3c-1.4,0-2.7,1-3,2.4c-1,4.3-4.8,7.4-9.3,7.4s-8.3-3-9.3-7.4c-0.3-1.4-1.6-2.4-3-2.4H22.6L29.2,18z M22,77V57.9h15
                    c1.7,5.8,6.9,9.7,13,9.7s11.3-4,13-9.7h15V77H22z"/>
                </g>
                </svg>
            </Toggle>
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
