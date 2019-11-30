export const setMarkers = payload => {
    console.log('from markers action', payload)
    return {
        type: "SET_MARKERS",
        payload
    };
};
