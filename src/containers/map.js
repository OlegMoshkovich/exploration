import React, { Component } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import DeckGL from 'deck.gl';
import { Nav } from '../components/NavMenu'
import { BaseControl } from 'react-map-gl';
import Pin from '../map/pin';
import styled from 'styled-components'
import Draggable from 'react-draggable';


const Rectangle = styled.div`
position:absolute;
display:${props => props.display};
top:100px;
left:100px;
width: 50px;
height: 50px;
background-color: #C0F75E;
border:1px solid #F3C242;
z-index:105;
font-size:10px;

`



const INITIAL_VIEW_STATE = {
    longitude: -74,
    latitude: 40.7,
    zoom: 11,
    minZoom: 5,
    maxZoom: 16,
    pitch: 0,
    bearing: 0
};


class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            display: 'block',
            style: 'mapbox://styles/mapbox/light-v9',
            viewport: {
                width: window.innerWidth,
                height: window.innerHeight,
                longitude: -74,
                latitude: 40.7,
                zoom: 11,
                maxZoom: 16
            },
            marker: {
                longitude: -74,
                latitude: 40.7,
            },
            activeDrags: 0,
            deltaPosition: {
                x: 0, y: 0
            },
            popupInfo: null

        }
    }

    componentDidMount() {
        window.addEventListener('resize', this._resize);
        this._resize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._resize);
    }

    _onViewportChange(viewport) {

        this.setState({
            viewport: { ...this.state.viewport, ...viewport }
        });
    }

    _resize = () => {
        this._onViewportChange({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }
    onStyleChange = style => {
        this.setState({ style });
    };
    _logDragEvent(name, event) {
        this.setState({
            events: {
                ...this.state.events,
                [name]: event.lngLat
            }
        })
    };

    _onMarkerDragStart = event => {
        this._logDragEvent('onDragStart', event);
    };

    _onMarkerDrag = event => {
        this._logDragEvent('onDrag', event);
    };

    _onMarkerDragEnd = event => {
        this._logDragEvent('onDragEnd', event);
        this.setState({
            marker: {
                longitude: event.lngLat[0],
                latitude: event.lngLat[1]
            }
        });
    };


    onStart = () => {
        this.setState({ activeDrags: ++this.state.activeDrags });
    };

    onStop = () => {
        this.setState({ activeDrags: --this.state.activeDrags });
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
                    onClose={() => this.setState({ popupInfo: null })}
                >

                </Popup>
            )
        );
    }

    render() {
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        const { deltaPosition, controlledPosition, display } = this.state;

        return (
            <div>


                {/* < Draggable {...dragHandlers}> */}
                <Nav />
                {/* </Draggable > */}

                < Draggable {...dragHandlers}>
                    <Rectangle display={this.state.display}>
                        drag
                    </Rectangle >
                </Draggable >


                <ReactMapGL
                    {...this.state.viewport}
                    mapboxApiAccessToken={'pk.eyJ1Ijoib2xlZ21vc2hrb3ZpY2giLCJhIjoiY2pmeTFidnQzMGUwaDMycTd6aGlseXF6ayJ9._4zzVy5_Q5lPjIiN56SMyQ'}
                    onViewportChange={(viewport) => {
                        this.setState({ viewport });

                    }}
                >
                    <Marker


                        latitude={this.state.marker.latitude}
                        longitude={this.state.marker.longitude}
                        offsetLeft={-20}
                        offsetTop={-10}
                        draggable={true}
                        onDragStart={this._onMarkerDragStart}
                        onDrag={this._onMarkerDrag}
                        onDragEnd={this._onMarkerDragEnd}

                    >
                        <Pin onClick={() => this.setState(display === 'none' ? { display: 'block' } : { display: 'none' })} />
                    </Marker>
                </ReactMapGL>
            </div >
        )
    }
}
export default Map