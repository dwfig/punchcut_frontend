import { createStore, combineReducers} from "redux";

const defaultState = {
  tip: "tap"
}

function rootReducer(state = defaultState, action){
  console.log("rootReducer", state, action)
  switch(action.type){
    case "HELLO":
      return "hello";
    default:
      return "hit";
  }
}

const store = createStore(rootReducer)

export default store;
