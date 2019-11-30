const initialState = {
    markers: []
};

const setMarkers = (state = initialState, action) => {

    switch (action.type) {
        case "SET_MARKERS":
            console.log('from the reducer', action.payload)
            return { ...initialState, markers: action.payload };
        default:
            return initialState;
    }
};

export default setMarkers;
