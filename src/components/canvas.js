import React from 'react';


export class CanvasComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 10,
            height: 10
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        this.updateCanvas();
    }
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(0, 0, 100, 100);
    }

    render() {
        return (
            <canvas ref="canvas" width={300} height={300} />
        );
    }
}
