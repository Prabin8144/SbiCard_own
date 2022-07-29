
import thunk from "redux-thunk";

import {
  compose,
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { todoReducer } from "./Todo/TodoReducer";

const rootRducer = combineReducers({

  todo: todoReducer,
  
});



const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
       
      })
    : compose;


const enhancer = composeEnhancers(
  applyMiddleware(thunk)
 
);

export const store = createStore(rootRducer, enhancer);