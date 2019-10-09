import React, { Component } from "react";
import ReactMapGL, {
  Marker,
  Popup,
  InteractiveMap,
  FlyToInterpolator
} from "react-map-gl";
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
import { Title } from "./title";
import { Destination } from "./flyNav";
import { DestinationMarker } from "./marker";

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
        longitude: 6.4636,
        latitude: 40.6528,
        zoom: 1.5,
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
      popupInfo: null
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
    console.log("vieport on the change", viewport);
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

  onStart = () => {
    this.setState({
      activeDrags: ++this.state.activeDrags
    });
  };

  onStop = () => {
    this.setState({
      activeDrags: --this.state.activeDrags
    });
  };

  _renderPopup() {
    const { popupInfo } = this.state;
    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() =>
            this.setState({
              popupInfo: null
            })
          }
        ></Popup>
      )
    );
  }

  _goToViewport = (latitude, longitude, speed = 5000, zoom = 17) => {
    this._onViewportChange({
      latitude: latitude,
      // : 40.75234736086995,
      longitude: longitude,
      // : -73.97752525741629,
      zoom: zoom,
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: speed
    });
  };

  // togglePopUp = name => {
  //   console.log("passed Name", name);
  //   if (this.state.showPopup === true) {
  //     return this.setState({ showPopup: false });
  //   } else {
  //     return this.setState({ showPopup: true });
  //   }
  // };

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

    return (
      <div>
        <Nav />

        {/* Destinations */}
        <FlyContainer>
          <Destination
            name={"AM"}
            navigate={() => this._goToViewport(59.6528, 6.4636, 20000)}
          />

          <Destination
            name={"NY"}
            navigate={() =>
              this._goToViewport(40.75234736086995, -73.97752525741629, 20000)
            }
          />
          <Destination
            name={"GC"}
            navigate={() =>
              this._goToViewport(40.75234736086995, -73.97752525741629, 20000)
            }
          />
          <Destination
            name={"HI"}
            navigate={() =>
              this._goToViewport(40.74623043587812, -73.93683978026445, 7000)
            }
          />
        </FlyContainer>

        {/* title */}
        <Title />

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
            longitude={6.4636}
            latitude={59.6528}
            toggle={() => this.togglePopUp()}
            name={"Allmannajuvet Museum"}
            images={[
              "https://images.adsttc.com/media/images/57ed/0c31/e58e/ce02/a000/011f/large_jpg/010620_Photo_Per_Berntsen.jpg?1475152917",
              "https://nordnorge.com/sites/n/nordnorge.com/files/570f0fc155e7b311737aa885d54880c8.jpg",
              "https://www.iconeye.com/images/2017/06/Zumthor_norway_Mine_1.jpg",
              "https://static.dezeen.com/uploads/2016/12/allmannajuvet-tourist-route-peter-zumthor-norway-arne-espeland-dezeen-sq.jpg",
              "https://i.pinimg.com/originals/63/94/d1/6394d12d7791bb1c0a64d3845c60d5c6.jpg"
            ]}
            popUpState={this.state.showPopup}
            popUpClose={() =>
              this.setState({
                showPopup: false
              })
            }
          />
          <DestinationMarker
            longitude={-73.97752525741629}
            latitude={40.7523}
            toggle={() => this.togglePopUp()}
            name={"Grand Central"}
            images={[
              "http://trn.trains.com/~/media/images/railroad-news/news-wire/2016-and-prior/2015/10/grandcentral.jpg",
              "https://ichef.bbci.co.uk/news/660/media/images/65736000/jpg/_65736479_grand-central-cropped-624x4.jpg"
            ]}
          />

          {/* <DestinationMarker
            longitude={-73.97752525741629}
            latitude={40.75234736086995}
            toggle={() => this.togglePopUp()}
            name={"Grand Central"}
            popUpState={this.state.showPopup}
            popUpClose={() =>
              this.setState({
                showPopup: false
              })
            }
          /> */}

          {/* Grand Central */}

          {showPopup && (
            <Popup
              latitude={marker.latitude}
              longitude={marker.longitude}
              closeButton={true}
              closeOnClick={false}
              onClose={() =>
                this.setState({
                  showPopup: false
                })
              }
              anchor="left"
            >
              <Draggable {...dragHandlers}>
                <Rectangle bottom={"150px"} left={"-510px"}>
                  information - wikipedia
                </Rectangle>
              </Draggable>

              <Draggable {...dragHandlers}>
                <Rectangle bottom={"-140px"} left={"300px"}>
                  <iframe
                    src="https://player.vimeo.com/video/239261005#t=29s"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                    style={{
                      padding: "15px 0px 5px 0px"
                    }}
                  ></iframe>
                  <Circle>
                    <div
                      style={{
                        cursor: "all-scroll"
                      }}
                    >
                      move me
                    </div>
                  </Circle>
                </Rectangle>
              </Draggable>

              <Text> -Peter Zhumthor </Text>
            </Popup>
          )}
        </InteractiveMap>
      </div>
    );
  }
}
export default Map;
