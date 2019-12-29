export default ( state = [], { type, payload }) => {
    switch (type) {
        case "HEADERS_SEARCH":
            return payload;
        default:
            return state;
    }
};
