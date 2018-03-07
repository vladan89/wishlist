import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import wishlistReducer from "./reducers/wishlistReducer";
import securityReducer from "./reducers/securityReducer";
import itemReducer from "./reducers/itemReducer";

import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const error = (store) => (next) => (action) =>{
    try{ next(action)	}
    catch(err){	console.log("Caught an exception: ",err)	}
}


const store = createStore(combineReducers({wishlistReducer, securityReducer, itemReducer}), {}, applyMiddleware(promise(),thunk, logger, error));


export default store;