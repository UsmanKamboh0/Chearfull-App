import{combineReducers,applyMiddleware} from "redux";
import {legacy_createStore as createStore} from 'redux'

import thunk from "redux-thunk";
import {composeWithDevTools } from "redux-devtools-extension";
import {  loginReducer } from "./Redux/Reducers/UserReducers";
const Reducer =combineReducers({
    user:loginReducer,
 
});
const middleware =[thunk]
let initialState = {
  
};
const store = createStore(
    Reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

export default store;
