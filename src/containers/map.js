import React, { Component } from 'react'
import ReactMapGL, { Marker, Popup, InteractiveMap } from 'react-map-gl';

import { Nav } from '../components/NavMenu'

import Pin from '../map/pin';
import styled from 'styled-components'
import Draggable from 'react-draggable';


const Rectangle = styled.div`
position:absolute;
display:${props => props.display || 'block'};
top:100px;
left:100px;
width: auto;
border-radius:10%;
height: auto;
padding:20px;
background-color: #C0F75E;
border:1px solid #F3C242;
z-index:105;
font-size:10px;
`
const Circle = styled.div`
position = relative;
// top:2px;
// left:2px;
width: 20px;
height: 20px;
border-radius:50%;
background-color: #F3C242;
border:1px solid #F3C242;
z-index:106;
`



class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            display: 'none',
            style: 'mapbox://styles/mapbox/light-v9',
            showPopup: true,
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
        const { deltaPosition, controlledPosition, display, showPopup, marker } = this.state;


        return (
            <div>


                {/* < Draggable {...dragHandlers}> */}
                <Nav />
                {/* </Draggable > */}

                < Draggable {...dragHandlers}>
                    {/* <Frame name={'hello'} display={this.state.display} /> */}
                    <Rectangle display={this.state.display}  >
                        <Circle onClick={() => {
                            console.log('state', this.state.display)
                            return this.setState(display === 'none' ? { display: 'block' } : { display: 'none' })
                        }} />
                        {/* <div onClick={() => this.setState(display === 'none' ? { display: 'block' } : { display: 'none' })}>{parseFloat(this.state.marker.longitude).toFixed(3)}</div> */}

                    </Rectangle >
                </Draggable >


                <InteractiveMap
                    {...this.state.viewport}
                    mapboxApiAccessToken={'pk.eyJ1Ijoib2xlZ21vc2hrb3ZpY2giLCJhIjoiY2pmeTFidnQzMGUwaDMycTd6aGlseXF6ayJ9._4zzVy5_Q5lPjIiN56SMyQ'}
                    onViewportChange={(viewport) => {
                        this.setState({ viewport });

                    }}
                // onClick={console.log('map is clicked')}
                >
                    <Marker

                        captureClick={true}
                        latitude={marker.latitude}
                        longitude={marker.longitude}
                        offsetLeft={-20}
                        offsetTop={-10}
                        draggable={true}
                        onDragStart={this._onMarkerDragStart}
                        onDrag={this._onMarkerDrag}
                        onDragEnd={this._onMarkerDragEnd}

                    >
                        <Pin onClick={(e) => {

                            return (
                                this.setState(display === 'none' ? { display: 'block' } : { display: '' }),
                                this.setState(showPopup === false ? { showPopup: true } : { showPopup: '' })

                            )
                        }} />

                    </Marker>
                    {showPopup && <Popup
                        latitude={marker.latitude}
                        longitude={marker.longitude}
                        closeButton={true}
                        closeOnClick={false}
                        onClose={() => this.setState({ showPopup: false })}
                        anchor="left" >
                        < Draggable {...dragHandlers}>
                            <Rectangle />
                        </Draggable>

                        <img src={'https://static.dezeen.com/uploads/2016/12/allmannajuvet-tourist-route-peter-zumthor-norway-arne-espeland-dezeen-sq.jpg'} style={{ 'width': '100px', 'height': '100px', 'padding': '10px' }} />
                    </Popup>}
                </InteractiveMap>
            </div >
        )
    }
}
export default Map