import {combineReducers, createStore} from "redux"

const usersReducer = function (state={}, action) {
  console.log("inside usersReducer");
  switch (action.type) {
    case "CHANGE_NAME":
      state = {...state, name: action.payload}
      break;
    case "CHANGE_AGE":
    state = {...state, age: action.payload}
    break;
      break;
    default:

  }
  return state;
}

const commentsReducer = function (state=[], action) {
  console.log("inside commentsReducer");
  return state;
}

const reducers = combineReducers({
  users : usersReducer,
  comments : commentsReducer,
})


const demoState= {
  users: {
    name: "Niladri",
    age: 30
  },
  comments: []
}

const store = createStore(reducers)

store.subscribe(() => {
  console.log("store changed : ", store.getState())
})


store.dispatch({type: "CHANGE_NAME", payload: "Niladri"})
store.dispatch({type: "CHANGE_AGE", payload: 20})
