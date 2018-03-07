const securityReducer = (state = {
    id:""
}, action) => {
    switch (action.type){
        case "GET_LOGGED_USER_ID":
            state = {...state};
            break;
        case "GET_LOGGED_USER_ID_FULFILLED":
            state = {...state, id: action.payload };
            break;
        case "GET_LOGGED_USER_ID_REJECTED":
            state = {...state, error: action.payload};
            break;
    }
    return state;
}

export default securityReducer;