const itemReducer = (state = {
    items: [],
    item: {
        currency:"",
        price:"",
        photo:"",
        name:"",
        link:""
    },
    error: null,
    parsed: false,
    parser: {}
}, action) => {
    switch (action.type){
        case "GET_ITEMS_BY_WISHLIST_ID":
            state = {...state};
            break;
        case "GET_ITEMS_BY_WISHLIST_ID_FULFILLED":
            state = {...state, items: action.payload.data._embedded.items };
            break;
        case "GET_ITEMS_BY_WISHLIST_ID_REJECTED":
            state = {...state, error: action.payload};
            break;
        case "CREATE_ITEM":
            state = {...state};
            break;
        case "CREATE_ITEM_FULFILLED":
            state = {...state, items:[...state.items, action.payload.data]}
            break;
        case "CREATE_ITEM_REJECTED":
            state = {...state, error: action.payload};
            break;
        case "REMOVE_ITEM":
            state = {...state};
            break;
        case "REMOVE_ITEM_FULFILLED":
            state={...state, items: state.items.filter(current => current._links.self.href !== action.payload.request.responseURL )}
            break;
        case "REMOVE_ITEM_REJECTED":
            state = {...state, error: action.payload};
            break;

    }
    return state;
}

export default itemReducer;