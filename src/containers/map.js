import React, { Component } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl';
import DeckGL from 'deck.gl';
import { Nav } from '../components/NavMenu'
import { BaseControl } from 'react-map-gl';
import Pin from '../map/pin';
import styled from 'styled-components'


const Rectangle = styled.div`
position:absolute;
top:100px;
left:100px;
width: 50px;
height: 50px;
background-color: #C0F75E;
border:1px solid #F3C242;
z-index:105;

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

class CustomMarker extends BaseControl {
    _render() {
        const { longitude, latitude } = this.props;

        const [x, y] = this._context.viewport.project([longitude, latitude]);

        const markerStyle = {
            position: 'absolute',
            background: '#fff',
            left: x,
            top: y
        };

        return (
            <div ref={this._containerRef}
                style={markerStyle} >
                ({longitude}, {latitude})
        </div>
        );
    }
}
class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
            }

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
        console.log('on view change', viewport)
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

    render() {
        return (
            <div>

                {/* <LinkCircleWrapper route={'/'} linkName={'home'} /> */}
                <Nav />
                <Rectangle />
                {/* 
                <DeckGL initialViewState={INITIAL_VIEW_STATE} >
                    <StaticMap
                        style={this.state.style}
                        mapboxApiAccessToken={'pk.eyJ1Ijoib2xlZ21vc2hrb3ZpY2giLCJhIjoiY2pmeTFidnQzMGUwaDMycTd6aGlseXF6ayJ9._4zzVy5_Q5lPjIiN56SMyQ'} />
                </DeckGL> */}



                <ReactMapGL
                    {...this.state.viewport}
                    mapboxApiAccessToken={'pk.eyJ1Ijoib2xlZ21vc2hrb3ZpY2giLCJhIjoiY2pmeTFidnQzMGUwaDMycTd6aGlseXF6ayJ9._4zzVy5_Q5lPjIiN56SMyQ'}
                    onViewportChange={(viewport) => {
                        this.setState({ viewport });
                        console.log('viewport property from the map', viewport)
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
                        <Pin />
                    </Marker>
                </ReactMapGL>
            </div >
        )
    }
}
export default Map