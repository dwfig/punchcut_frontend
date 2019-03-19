import { createStore, combineReducers} from "redux";
import { STORING_ARTICLES, LOGGING_EMAIL, LOGGING_PASSWORD } from "./types"


const defaultState = {
  articles: [],
  email: "",
  password: ""
}

function rootReducer(state = defaultState, action){
  console.log("rootReducer", state, action)
  switch(action.type){
    case STORING_ARTICLES:
      return {...state, articles: action.payload};
      //
    case LOGGING_EMAIL:
      return {...state, email: action.payload};
    case LOGGING_PASSWORD:
      return {...state, password: action.payload};
    default:
      return {hat:"hit"};
  }
}

const store = createStore(rootReducer)

export default store;
