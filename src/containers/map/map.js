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
import { teal, pink, green } from '../../components/colors'
import Drawer from '@material-ui/core/Drawer';
import { BasicForm } from "../../components/form"
import { DrawerForm } from "../../components/drawerForm"
import { Rectangle } from './styles'
import Button from '@material-ui/core/Button';


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: false,
      display: "block",
      style: "mapbox://styles/mapbox/light-v9",
      showPopup: false,
      menu: false,
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
      popUpState: true,
      markerInfo: 'hello',
      formInfo: {}
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this._resize);
    this._resize();
    this.setState({ markers: markersData })
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
  toggleGlobalState = () => {
    const { globalPopUpState, globalPopUp } = this.props
    console.log('pop up state from the toggle global', globalPopUpState)
    globalPopUpState.enabled ? globalPopUp(false) : globalPopUp(true)
  }
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
  deleteMarker = () => {
    console.log('delete is hit', this.state.markers)
    // const newMarkers = this.state.markers.filter(marker => marker.type === 'media')
    const newMarkers = this.state.markers
    const minusLastMarker = newMarkers.splice(0, 1)

    console.log('new array', newMarkers)
    // this.setState({ markers: newMarkers })
    this.setState({ markers: newMarkers })

  }
  record = (coord) => {
    const { markers } = this.state
    const longitude = coord[0]
    const latitude = coord[1]
  }
  toggleDrawer = (param) => {
    this.state.drawer ? this.setState({ drawer: !this.state.drawer }) : this.setState({ drawer: !this.state.drawer, markerInfo: param })
  };
  captureInput = (input) => {
    const filteredMarker = this.state.markers.filter(el => el.name !== this.state.markerInfo)
    const activeMarker = this.state.markers.filter(el => el.name === this.state.markerInfo)
    const updatedMarker = Object.assign(...activeMarker, input);
    const updatedMarkers = [...filteredMarker, updatedMarker]
    console.log('updated markers', updatedMarkers)

  }
  render() {
    return (
      <div style={{ backgroundColor: 'black' }}>
        {/* <Toggle switch={this.deleteMarker} color={teal} color1={green} /> */}
        {/* <Toggle switch={this.toggleDrawer} color={teal} color1={'white'} /> */}

        <Toggle switch={this.makeMarker} color={'white'} color1={'white'} />
        <Toggle switch={this.toggleMenu} color={teal} color1={'yellow'} />
        <Toggle switch={this.toggleGlobalState} color={'red'} color1={'red'} />


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
                field1={marker.field1}
                record={this.record}
                name={marker.name}
                images={marker.images}
                videos={marker.videos}
                color={marker.color}
                onClick={(param) => this.toggleDrawer(param)}
              />)
          })
          }
        </InteractiveMap>
        <Drawer anchor="bottom" open={this.state.drawer} onClose={this.toggleDrawer}>
          <div> click submit twice</div>
          <div style={{ height: '300px' }}>
            <DrawerForm captureInput={(input) => this.captureInput(input)} />
          </div>
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = state => ({ globalPopUpState: state.popUpState });

export default connect(
  mapStateToProps,
  { globalPopUp }
)(Map);
