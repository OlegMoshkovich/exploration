import React, { Component } from 'react';
import { Nav } from '../components/NavMenu'
import DeckGL, {
    LineLayer,
    ScatterplotLayer,
    COORDINATE_SYSTEM
} from 'deck.gl';

export class graphViz extends Component {
    reateNodeLayer() {
        return new ScatterplotLayer({
            id: 'node-layer',
            data: this.props.nodes,
            getPosition: node => this.props.getNodePosition(node),
            getRadius: node => this.props.getNodeSize(node),
            getColor: node => this.props.getNodeColor(node),
            projectionMode: COORDINATE_SYSTEM.IDENTITY
        });
    }
    createEdgeLayer() {
        return new LineLayer({
            id: 'edge-layer',
            data: this.props.edges,
            getSourcePosition: e =>
                this.props.getEdgePosition(e).sourcePosition,
            getTargetPosition: e =>
                this.props.getEdgePosition(e).targetPosition,
            getColor: e => this.props.getEdgeColor(e),
            strokeWidth: this.props.getEdgeWidth(),
            projectionMode: COORDINATE_SYSTEM.IDENTITY
        });
    }

    render() {
        return (
            <div>
                <Nav />
                <div id="graph-render">
                    <DeckGL
                        // 0. pass the width and height
                        width={this.props.width}
                        height={this.props.height}
                        // 1. pass the viewport we creaetd
                        viewport={this.createViewport()}
                        // 2. add layers we created
                        layers={[
                            this.createEdgeLayer(),
                            this.createNodeLayer()
                        ]}
                    />
                </div>
            </div >
        )
    }
}