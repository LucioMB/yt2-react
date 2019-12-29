export default (state = [], { type, payload }) => {
    switch (type) {
        case "NAV_BAR_LINK":
            return payload;
        default:
            return state;
    }
};
