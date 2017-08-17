import {applyMiddleware, createStore} from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import axios from "./axios/axios.js"

const reducer = function(state, action) {

  switch (action.type) {
    case "INC":
      // using spread syntax
      state = {...state, value: state.value + action.payload}
      break;
    case "DEC":
        // using spread syntax
        state = {...state, value: state.value - action.payload}
        break;
  }
  // all reducer should return the state
  return state
}

// Now create the middleware
const middleware = applyMiddleware(thunk, logger)

const store = createStore(reducer, {value: 0}, middleware)

store.subscribe(() => {
  console.log("store changed : " + store.getState().value)
})

store.dispatch((dispatch) => {
  // init load users
  dispatch({type: "FETCH_USERS_START"})
  // get loaded users
  axios.get("/users")
    .then(response => {
      dispatch({type: "FETCH_USERS_SUCCESSFUL", payload: response.data})
    })
    .catch(err => {
      dispatch({type: "FETCH_USERS_ERROR", payload: err})

    })
  // handle loaded users

})
