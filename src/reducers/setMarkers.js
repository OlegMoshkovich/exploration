const initialState = {
    markers: []
};

const setMarkers = (state = initialState, action) => {
    switch (action.type) {
        case "SET_MARKERS":
            return { ...initialState, markers: action.payload };
        default:
            return initialState;
    }
};

export default setMarkers;
