import { createStore } from "redux";
import { STORING_ARTICLES,
  LOGGING_EMAIL,
  LOGGING_PASSWORD,
  SETTING_USER,
  EDITING_ARTICLE,
  EDITING_TEXT ,
  EDITING_HEADLINE,
  POSTING_ARTICLE} from "./types"


const defaultState = {
  articles: [],
  currUser: {},
  currArticle: {},
  email: "",
  password: ""
}

function rootReducer(state = defaultState, action){
  switch(action.type){
    case STORING_ARTICLES:
      return {...state, articles: action.payload};
      //
    case LOGGING_EMAIL:
      return {...state, email: action.payload};
    case LOGGING_PASSWORD:
      return {...state, password: action.payload};
    case SETTING_USER:
      localStorage.setItem("user_id", action.payload.id)
      return {...state, currUser: action.payload}
    case EDITING_ARTICLE:
      return {...state, currArticle: action.payload}
    case EDITING_TEXT:
      return {...state, currArticle: {...state.currArticle, text: action.payload}}
    case EDITING_HEADLINE:
      return {...state, currArticle: {...state.currArticle, headline: action.payload}}
    case POSTING_ARTICLE:
      console.log(state.currArticle)
      return {...state, currArticle: {...state.currArticle, posted: true}}
    default:
      return {};
  }
}

const store = createStore(rootReducer)

export default store;
