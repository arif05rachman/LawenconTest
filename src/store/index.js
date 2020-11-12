import { createStore, combineReducers, applyMiddleware } from "redux";
import dataReducer from "./reducers/dataReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
const reducers = combineReducers({
  dataReducer
});

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;