import React, { Component } from 'react'
import { LinkCircleWrapper } from '../components/LinkCircle'
import ReactMapGL from 'react-map-gl';
import styled from 'styled-components';



class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                width: window.innerWidth,
                height: window.innerHeight,
                longitude: -74,
                latitude: 40.7,
                zoom: 11,
                maxZoom: 16
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

    render() {
        return (
            <div>

                <LinkCircleWrapper route={'/'} linkName={'home'} />

                <ReactMapGL
                    {...this.state.viewport}
                    mapboxApiAccessToken={'pk.eyJ1Ijoib2xlZ21vc2hrb3ZpY2giLCJhIjoiY2pmeTFidnQzMGUwaDMycTd6aGlseXF6ayJ9._4zzVy5_Q5lPjIiN56SMyQ'}
                    onViewportChange={(viewport) => this.setState({ viewport })}
                />
            </div >
        )
    }
}
export default Map