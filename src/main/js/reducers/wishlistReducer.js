const wishlistReducer = (state = {
    wishlists: [],
    wishlist: {},
    error: null
}, action) => {
    switch (action.type){
        case "GET_WISHLISTS_BY_USER_ID":
            state = {...state};
            break;
        case "GET_WISHLISTS_BY_USER_ID_FULFILLED":
            state = {...state, wishlists: action.payload.data._embedded.wishlists };
            break;
        case "GET_WISHLISTS_BY_USER_ID_REJECTED":
            state = {...state, error: action.payload};
            break;
        case "CREATE_WISHLIST":
            state = {...state};
            break;
        case "CREATE_WISHLIST_FULFILLED":
            state = {...state, wishlists:[...state.wishlists, action.payload.data]}
            break;
        case "CREATE_WISHLIST_REJECTED":
            state = {...state, error: action.payload};
            break;
        case "REMOVE_WISHLIST":
            state = {...state};
            break;
        case "REMOVE_WISHLIST_FULFILLED":
            state={...state, wishlists: state.wishlists.filter(current => current._links.self.href !== action.payload.request.responseURL )}
            break;
        case "REMOVE_WISHLIST_REJECTED":
            state = {...state, error: action.payload};
            break;

    }
    return state;
}

export default wishlistReducer;