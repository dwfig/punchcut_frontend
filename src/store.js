import { createStore, combineReducers} from "redux";
import { STORING_ARTICLES, LOGGING_EMAIL, LOGGING_PASSWORD, SETTING_USER } from "./types"


const defaultState = {
  articles: [],
  currUser: {},
  email: "",
  password: ""
}

function rootReducer(state = defaultState, action){
  //console.log("rootReducer", state, action)
  switch(action.type){
    case STORING_ARTICLES:
      return {...state, articles: action.payload};
      //
    case LOGGING_EMAIL:
      return {...state, email: action.payload};
    case LOGGING_PASSWORD:
      return {...state, password: action.payload};
    case SETTING_USER:
      // console.log('reducer set user', action.payload);
      return {...state, currUser: action.payload}
    default:
      return {hat:"hit"};
  }
}

const store = createStore(rootReducer)

export default store;
