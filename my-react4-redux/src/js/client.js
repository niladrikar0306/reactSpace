import {applyMiddleware, createStore} from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import axios from "./axios/axios.js"

const initialState = {
  fetching : false,
  fetched : true,
  users : []
}

const reducer = function(state, action) {

  switch (action.type) {
    case "USERS_PENDING":
      // using spread syntax
      state = {...state, fetching: true}
      break;
    case "USERS_FULFILLED":
      // using spread syntax
      state = {...state, fetching: false, fetched : true, users : action.payload.data.users}
      break;
    case "USERS_REJECTED":
      state = {...state, fetching: false, fetched : false}
      break;
  }
  console.log("action.payload : ", action.payload);
  // all reducer should return the state
  return state
}

// Now create the middleware
const middleware = applyMiddleware(promise(), thunk, logger)

const store = createStore(reducer, initialState, middleware)

store.subscribe(() => {
  console.log("store changed : ", store.getState())
})

// for success
store.dispatch({
  type: "USERS",
  payload : axios.get("/users")
})

// for error
store.dispatch({
  type: "USERS",
  payload : axios.get("/usersErr")
})

// without promise for success
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

// without promise for error
store.dispatch((dispatch) => {
  // init load users
  dispatch({type: "FETCH_USERS_START"})
  // get loaded users
  axios.get("/usersError")
    .then(response => {
      console.log(response)
      dispatch({type: "FETCH_USERS_SUCCESSFUL", payload: response.data})
    })
    .catch(err => {
      console.log(err)
      dispatch({type: "FETCH_USERS_ERROR", payload: err})

    })
  // handle loaded users

})
