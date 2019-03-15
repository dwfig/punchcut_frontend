import { createStore, combineReducers} from "redux";

const defaultState = {
  tip: "tap"
}

function rootReducer(state = defaultState, action){
  console.log("rootReducer", state, action)
  switch(action.type){
    case "STORING_ARTICLES":
      return {...state, articles: action.payload};
      // "hello" is now the state——whatever the reducer returns is state
      //
    default:
      return {hat:"hit"};
  }
}

const store = createStore(rootReducer)

export default store;
