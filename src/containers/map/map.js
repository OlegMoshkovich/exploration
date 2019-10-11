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
import { Exit } from "./exit";
import { Title } from "./title";
import { Destination, FlyDestinations } from "./flyNav";
import DestinationMarker from "./marker";
import { connect } from "react-redux";
import { globalPopUp } from "../../actions/popUpState";

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

    return (
      <div>
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
          <DestinationMarker
            longitude={-73.97181704026718}
            latitude={40.760357318442715}
            name={"Facility"}
            images={[
              'https://previews.dropbox.com/p/thumb/AAlhtzdSN47BwXTXDXi_OKJrPXSqjkaic1HjvuTxjfUpkBhZcnUuzlznHepnQtTp5MjagBgHQ4hE9iV_10B2-ewXeLQXgGEicGvxOOD_g219Tj1VvcjqcaNZBacAWj1WvK38Wmy_Gt4S03ZqT4BTR13_grlld30u9AX0Kn8Pnz2tkdbzBwRpNS6cPcWzb30k7SSp73twrhzuteivwgTxy5r0pmoDC6EWxO-g8fht3piRePQBQ-Icf4Chwqua1hqVq733WYnHsBXgYXbDyn7J3WkYMQbpTbhGMZceqCAySw02fuTUFgOOKOkgt79JBoZlmYoN1WEXoOwLA1DIBQ-Jb-YYLQtMjrcRSijIMPdXKBESyodaxiwqxZA8C3Njd6oj1T8Zn-bQ9RENLsGolydlBe8NE78PIrWpTqjJqR6KpIIf-g/p.png?fv_content=true&size_mode=5',
              'https://static.dezeen.com/uploads/2016/06/allmannajuvet-tourist-route-peter-zumthor-norway-per-berntsen-dezeen-936.jpg'
            ]}
            videos={[]}
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
            videos={["https://player.vimeo.com/video/123730837#t=29s"]}
          />
          {/* Grand Central */}
        </InteractiveMap>
      </div>
    );
  }
}

const mapStateToProps = state => ({ globalPopUpState: state.popUpState });

// const mapStateToProps = state => ({
//   openDrawer: state.drawerStatus.drawerOpen,
//   patientRecord: state.activePatient.patientRecord
// });

export default connect(
  mapStateToProps,
  { globalPopUp }
)(Map);
