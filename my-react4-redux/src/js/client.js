import {combineReducers, createStore} from "redux"

const usersReducer = function (state={}, actions) {
  console.log("inside usersReducer");
  return state;
}

const commentsReducer = function (state=[], actions) {
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

store.dispatch({type: "INC", payload: 100})
