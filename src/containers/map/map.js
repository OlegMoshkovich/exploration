import React, { Component } from "react";
import {
  InteractiveMap,
  FlyToInterpolator
} from "react-map-gl";

import { Nav } from "../../components/NavMenu";
import { Exit } from "./exit";
import { Title } from "./title";
import { FlyDestinations } from "./flyNav";
import DestinationMarker from "./marker";
import DestinationMarkerForm from "./markerForm"
import DestinationMarkerDrag from './markerDrag'
import { connect } from "react-redux";
import { globalPopUp } from "../../actions/popUpState";
import { markersData } from './markers'

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "block",
      style: "mapbox://styles/mapbox/light-v9",
      showPopup: false,
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
      popUpState: true
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this._resize);
    this._resize();
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

  render() {
    return (

      <div style={{ backgroundColor: 'black' }}>
        {/* title */}
        <Title title={"Experiment"} />
        <Exit />
        <Nav />
        <FlyDestinations flyTo={this._goToViewport} />
        <InteractiveMap
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
          {markersData.map(marker => {
            const Types = { form: DestinationMarkerForm, media: DestinationMarker, drag: DestinationMarkerDrag }
            const Component = Types[marker.type]
            return (
              <Component
                longitude={marker.longitude}
                latitude={marker.latitude}
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
