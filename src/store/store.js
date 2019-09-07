import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { getUsersReducer,currentUserReducer } from "./reducers/getUsersReducer";
import { getQuestionsReducer } from "./reducers/getQuestionsReducer";

const rootReducer = combineReducers({
    users:getUsersReducer,
    currentUser:currentUserReducer,
    questions: getQuestionsReducer
});

// Middleware logging actions
const logger = (store) => (next) => (action) => {
   // console.log("[Middleware] action ",action);
    const result = next(action);
    console.log("[Middleware] action result ",store.getState(),result);
    return result;
}   



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(logger,thunk)));



export default store;

//Actions must be plain objects. Use custom middleware for async actions.
