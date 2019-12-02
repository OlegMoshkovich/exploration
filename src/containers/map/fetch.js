import React, { Component } from "react";
import { firestore } from "../../firebase";
import { setMarkers } from '../../actions/markers'
import { connect } from "react-redux";

class FireFetch extends Component {
    state = {
        markers: []
    };

    unsubscribe = null;

    componentDidMount = async () => {
        const snapshot = await firestore.collection("markers").get();
        snapshot.forEach(doc => {
            const data = doc.data();
            // console.log('data', data);
        })
        const markers = snapshot.docs.map(doc => {
            const markerObj = { ...doc.data() }
            let extractedVals = {}
            Object.keys(markerObj).forEach(key => {
                // console.log('printing', key)
                // console.log('printing', markerObj[key])

                if (key === "latitude") {
                    // console.log('latitude equal to =', markerObj[key])

                }
                if (key === "longitude") {
                    // console.log('latitude equal to =', markerObj[key])
                    // console.log('converted latitude equal to =', parseFloat(markerObj[key]))
                    extractedVals = { longitude: parseFloat(markerObj[key]) }
                    // console.log('extracted value', extractedVals)
                }
            })
            const updatedMarker = Object.assign(markerObj, extractedVals)
            // console.log('after object.assign', updatedMarker)
            return { ...updatedMarker }

        })
        this.setState({ markers })
        this.props.setMarkers(markers)
        // console.log(this.props)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log('props from the update method', this.props)
    }


    componentWillUnmount = () => {
        // this.unsubscribe();
    };


    render() {
        const { posts } = this.state;

        return (

            <div style={{ position: 'absolute' }}>hi</div>

        );
    }
}

const mapStateToProps = state => ({ globalMarkers: state.setMarkers.markers });

export default connect(mapStateToProps, { setMarkers })(FireFetch);


