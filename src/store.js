import { createStore, combineReducers} from "redux";
import { STORING_ARTICLES } from "./types"

const defaultState = {
  articles: []
}

function rootReducer(state = defaultState, action){
  console.log("rootReducer", state, action)
  switch(action.type){
    case STORING_ARTICLES:
      return {...state, articles: action.payload};
      //
    default:
      return {hat:"hit"};
  }
}

const store = createStore(rootReducer)

export default store;
