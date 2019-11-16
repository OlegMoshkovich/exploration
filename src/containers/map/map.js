import React, { Component } from "react";
import {
  InteractiveMap,
  FlyToInterpolator
} from "react-map-gl";
import { Nav } from "../../components/NavMenu";
import { Exit } from "./exit";

import { FlyDestinations } from "./flyNav";
import DestinationMarker from "./marker";
import DestinationMarkerForm from "./markerForm"
import DestinationMarkerDrag from './markerDragForm'
import { connect } from "react-redux";
import { globalPopUp } from "../../actions/popUpState";
import { markersData } from './markers'
import { Toggle } from './toggle'
import { teal, pink } from '../../components/colors'


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "block",
      style: "mapbox://styles/mapbox/light-v9",
      showPopup: false,
      menu: true,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        longitude: - 73.97181704026718,
        latitude: 40.774,
        zoom: 12,
        maxZoom: 16
      },
      marker: {
        longitude: 6.4636,
        latitude: 59.6528
      },
      activeDrags: 0,
      deltaPosition: {
        x: 0,
        y: 0
      },
      markers: [],
      popUpState: true
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this._resize);
    this._resize();
    this.setState({ markers: markersData }, () => console.log('STATE OF THE MAP --- markers', this.state.markers))
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this._resize);
  }
  _onViewportChange(viewport) {
    this.setState({
      viewport: {
        ...this.state.viewport,
        ...viewport
      }
    });

  }
  _resize = () => {
    this._onViewportChange({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  _goToViewport = (latitude, longitude, speed = 5000, zoom = 17) => {
    this._onViewportChange({
      latitude: latitude,
      longitude: longitude,
      zoom: zoom,
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: speed
    });
  };
  toggleMenu = () => {
    console.log('menu state', this.state.menu)
    this.setState({
      menu: !this.state.menu
    })
  }
  makeMarker = () => {
    console.log('in the make marker--viewPortState', this.state.viewport)
    console.log('the current state of markers', this.state.markers)
    this.setState({
      markers: [...this.state.markers,
      {
        type: 'drag',
        longitude: this.state.viewport.longitude,
        latitude: this.state.viewport.latitude,
        name: "move the marker",
        color: pink,
      },
      ]
    })
  }
  record = (coord) => {
    const { markers } = this.state
    const longitude = coord[0]
    const latitude = coord[1]
    console.log('record is hit', longitude)
    console.log('state from the record', markers)


  }

  render() {
    return (
      <div style={{ backgroundColor: 'black' }}>
        <Exit />
        <Toggle switch={this.makeMarker} color={'white'} color1={'white'} />
        <Toggle switch={this.toggleMenu} color={teal} color1={'yellow'} />
        {
          this.state.menu ?
            <div>
              <Nav />
              <FlyDestinations flyTo={this._goToViewport} />
            </div> : ''
        }
        < InteractiveMap
          {...this.state.viewport}
          mapboxApiAccessToken={
            "pk.eyJ1Ijoib2xlZ21vc2hrb3ZpY2giLCJhIjoiY2pmeTFidnQzMGUwaDMycTd6aGlseXF6ayJ9._4zzVy5_Q5lPjIiN56SMyQ"
          }
          onViewportChange={viewport => {
            this.setState({
              viewport
            });
          }}
        >
          {this.state.markers.map((marker, i) => {
            const Types = { form: DestinationMarkerForm, media: DestinationMarker, drag: DestinationMarkerDrag }
            const Component = Types[marker.type]
            return (
              <Component
                key={i}
                longitude={marker.longitude}
                latitude={marker.latitude}
                record={this.record}
                name={marker.name}
                images={marker.images}
                videos={marker.videos}
                color={marker.color}
              />)
          })
          }
        </InteractiveMap>
      </div>
    );
  }
}

const mapStateToProps = state => ({ globalPopUpState: state.popUpState });

export default connect(
  mapStateToProps,
  { globalPopUp }
)(Map);
