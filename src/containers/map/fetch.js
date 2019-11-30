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
            console.log('data', data);
        })
        const markers = snapshot.docs.map(doc => {
            return { ...doc.data() }
        })
        this.setState({ markers }, () => console.log('this is the markers from the state', this.state.markers))
        this.props.setMarkers(markers)
        console.log(this.props)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('props from the update method', this.props)
    }


    componentWillUnmount = () => {
        this.unsubscribe();
    };


    render() {
        const { posts } = this.state;

        return (

            <div>firebase component</div>

        );
    }
}

const mapStateToProps = state => ({ globalMarkers: state.setMarkers.markers });

export default connect(mapStateToProps, { setMarkers })(FireFetch);


