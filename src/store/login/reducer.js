const initialState = {
    token: localStorage.getItem("token"),
    loading: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TOKEN_LOADING":
            return { ...state, loading: action.payload };
        case "SET_TOKEN_ERROR":
            return { ...state, error: action.payload };
        case "SET_TOKEN":
            return {...state, token: action.payload};
        case "LOG_OUT":
            return {...state, token: action.payload};
        default:
            return state;
    }
};

export default reducer;
