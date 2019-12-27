export default (state, { type, payload }) => {
    switch (type) {
        case "VIDEOS_LOADED":
            return payload;
        default:
            return [];
    }
};
