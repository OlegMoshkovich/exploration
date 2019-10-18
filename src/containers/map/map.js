import React, { Component } from "react";
import ReactMapGL, {
  Marker,
  Popup,
  InteractiveMap,
  FlyToInterpolator
} from "react-map-gl";
import DeckGL, { COORDINATE_SYSTEM, SimpleMeshLayer, OrbitView, GeoJsonLayer, ArcLayer } from 'deck.gl';
import { OBJLoader } from '@loaders.gl/obj';
import { registerLoaders } from '@loaders.gl/core';
import { ScatterplotLayer } from '@deck.gl/layers';
import { scatterData } from './scatterData'
import { Nav } from "../../components/NavMenu";
import Pin from "./pin";
import styled from "styled-components";
import Draggable from "react-draggable";
import {
  Rectangle,
  Image,
  Text,
  Circle,
  FlyCircle,
  circle,
  FlyContainer,
  FlyText
} from "./styles";
import { Exit } from "./exit";
import { Title } from "./title";
import { Destination, FlyDestinations } from "./flyNav";
import DestinationMarker from "./marker";
import DestinationMarkerForm from "./markerForm"
import DestinationMarkerDrag from './markerDrag'
import { connect } from "react-redux";
import { globalPopUp } from "../../actions/popUpState";
import { CubeGeometry } from '@luma.gl/core'

// Add the loaders that handle your mesh format here
registerLoaders([OBJLoader]);

const AIR_PORTS =
  'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson';
const MESH_URL =
  'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/mesh/minicooper.obj';


const SAMPLE_DATA = (([xCount, yCount], spacing) => {
  const data = [];
  for (let x = 0; x < xCount; x++) {
    for (let y = 0; y < yCount; y++) {
      data.push({
        position: [(x - (xCount - 1) / 2) * spacing, (y - (yCount - 1) / 2) * spacing],
        color: [(x / (xCount - 1)) * 255, 128, (y / (yCount - 1)) * 255],
        orientation: [(x / (xCount - 1)) * 60 - 30, 0, -90]
      });
    }
  }
  console.log('data from from the map component', data)
  return data;
})([10, 10], 120);

const cubeData = [
  {
    position: [-75, 40],
    angle: 0,
    color: [255, 0, 0]
  },
  {
    position: [-122.46, 37.73],
    angle: 90,
    color: [0, 255, 0]
  },
]

const scatterplotLayer = new ScatterplotLayer({
  id: 'bart-stations',
  data: scatterData,
  getRadius: d => Math.sqrt(d.entries) / 100,
  getPosition: d => d.coordinates,
  getFillColor: [255, 228, 0],
});



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
    console.log("gloabal pop state from the map", this.props.globalPopUpState);
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
    console.log("here", viewport);
  }

  _resize = () => {
    this._onViewportChange({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  onStyleChange = style => {
    this.setState({
      style
    });
  };

  _logDragEvent(name, event) {
    this.setState({
      events: {
        ...this.state.events,
        [name]: event.lngLat
      }
    });
  }

  _onMarkerDragStart = event => {
    this._logDragEvent("onDragStart", event);
  };

  _onMarkerDrag = event => {
    this._logDragEvent("onDrag", event);
  };

  _onMarkerDragEnd = event => {
    this._logDragEvent("onDragEnd", event);
    this.setState({
      marker: {
        longitude: event.lngLat[0],
        latitude: event.lngLat[1]
      }
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

    const dragHandlers = {
      onStart: this.onStart,
      onStop: this.onStop
    };
    const {
      deltaPosition,
      controlledPosition,
      display,
      showPopup,
      marker
    } = this.state;
    const INITIAL_VIEW_STATE = {
      longitude: - 73.97181704026718,
      latitude: 40.76,
      zoom: 4,
      bearing: 0,
      pitch: 30,
      fov: 30,
    };


    // const INITIAL_VIEW_STATE = {
    //   latitude: this.state.
    //   longitude: 40.760357318442715,
    //   zoom: 4,
    //   bearing: 0,
    //   pitch: 30
    // };
    const lumaLayer = new SimpleMeshLayer({
      id: 'mesh-layer',
      data: cubeData,
      texture: null,
      mesh: new CubeGeometry()
    });

    const layers3D = [
      new SimpleMeshLayer({
        id: 'mini-coopers',
        data: SAMPLE_DATA,
        mesh: MESH_URL,
        coordinateSystem: COORDINATE_SYSTEM.IDENTITY,
        getPosition: d => d.position,
        getColor: d => d.color,
        getOrientation: d => d.orientation
      })
    ];

    let layers = [
      new GeoJsonLayer({
        id: 'airports',
        data: AIR_PORTS,
        // Styles
        filled: true,
        pointRadiusMinPixels: 2,
        opacity: 1,
        pointRadiusScale: 2000,
        getRadius: f => 4 - f.properties.scalerank,
        getFillColor: [
          255, 234, 0.2
        ],
        // Interactive props
        pickable: true,
        autoHighlight: true,
        onClick: this._onClick
      }),
      new ArcLayer({
        id: 'arcs',
        data: AIR_PORTS,
        dataTransform: d => d.features.filter(f => f.properties.scalerank < 4),
        // Styles
        getSourcePosition: f => [-0.4531566, 51.4709959], // London
        getTargetPosition: f => f.geometry.coordinates,
        getSourceColor: [183, 241, 253],
        getTargetColor: [234, 0, 255],
        getWidth: 1
      })
    ];

    const { globalPopUp } = this.props.globalPopUpState

    if (globalPopUp) {
      // layers = []
    }


    return (
      <div style={{ backgroundColor: 'black' }}>
        {/* title */}
        <Title title={"Experiment"} />
        <Exit />

        <Nav />
        <FlyDestinations flyTo={this._goToViewport} />


        {/* <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true} layers={layers3D}> */}

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
          {/* Peter Zumthor */}
          <DestinationMarker
            globalPopUpState={this.state.popUpState}
            longitude={6.4636}
            latitude={59.6528}
            bottom={"-20px"}
            name={"Allmannajuvet Museum"}
            videos={["https://player.vimeo.com/video/239261005#t=29s"]}
            images={[
              "https://nordnorge.com/sites/n/nordnorge.com/files/570f0fc155e7b311737aa885d54880c8.jpg",
              "https://www.iconeye.com/images/2017/06/Zumthor_norway_Mine_1.jpg",
              "https://static.dezeen.com/uploads/2016/12/allmannajuvet-tourist-route-peter-zumthor-norway-arne-espeland-dezeen-sq.jpg",
              "https://images.adsttc.com/media/images/57ed/0c31/e58e/ce02/a000/011f/large_jpg/010620_Photo_Per_Berntsen.jpg?1475152917",
              'https://static.dezeen.com/uploads/2016/06/allmannajuvet-tourist-route-peter-zumthor-norway-per-berntsen-dezeen-936.jpg',
            ]}
            popUpClose={() =>
              this.setState({
                showPopup: false
              })
            }
          />
          <DestinationMarkerForm
            longitude={-73.97181704026718}
            latitude={40.760357318442715}
            name={"This marker is static"}
          />
          <DestinationMarkerDrag
            longitude={-73.97181704026718}
            latitude={40.80}
            name={"you can drag this marker"}
          />
          <DestinationMarker
            longitude={-73.97752525741629}
            latitude={40.7523}
            name={"Grand Central"}
            images={[
              "https://cornerbycorner.files.wordpress.com/2012/09/grand-central.jpg",
              "https://ichef.bbci.co.uk/news/660/media/images/65736000/jpg/_65736479_grand-central-cropped-624x4.jpg",
              "https://media.timeout.com/images/100476721/630/472/image.jpg",
              "https://www.nycgo.com/images/venues/1071/grandcentral_midtown_manhattan_nyc_brittanypetronella0057__x_large.jpg",
              "http://trn.trains.com/~/media/images/railroad-news/news-wire/2016-and-prior/2015/10/grandcentral.jpg"
            ]}
            videos={["https://player.vimeo.com/video/123730837#t=29s", "https://player.vimeo.com/video/123730837#t=29s", "https://player.vimeo.com/video/123730837#t=49s", "https://player.vimeo.com/video/123730837#t=19s"]}
          />
          <DestinationMarker
            longitude={-73.97752525741629}
            latitude={40.7523}
            name={"Grand Central"}
            images={[
              "https://cornerbycorner.files.wordpress.com/2012/09/grand-central.jpg",
              "https://ichef.bbci.co.uk/news/660/media/images/65736000/jpg/_65736479_grand-central-cropped-624x4.jpg",
              "https://media.timeout.com/images/100476721/630/472/image.jpg",
              "https://www.nycgo.com/images/venues/1071/grandcentral_midtown_manhattan_nyc_brittanypetronella0057__x_large.jpg",
              "http://trn.trains.com/~/media/images/railroad-news/news-wire/2016-and-prior/2015/10/grandcentral.jpg"
            ]}
            videos={["https://player.vimeo.com/video/123730837#t=29s", "https://player.vimeo.com/video/123730837#t=29s", "https://player.vimeo.com/video/123730837#t=49s", "https://player.vimeo.com/video/123730837#t=19s"]}
          />

          <DestinationMarker
            longitude={113.5767}
            latitude={22.271}
            left={"40px"}
            name={"Zhuhai Cultural Center"}
            // popUpState={this.state.popUpState}
            images={[
              "http://www.olegmoshkovich.com/img/imgPortfolio/ribbon_realized.png"
            ]}
            videos={["https://player.vimeo.com/video/32440857#t=2s"]}
          />

          {/* Grand Central */}
        </InteractiveMap>
        {/* </DeckGL> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({ globalPopUpState: state.popUpState });

export default connect(
  mapStateToProps,
  { globalPopUp }
)(Map);
