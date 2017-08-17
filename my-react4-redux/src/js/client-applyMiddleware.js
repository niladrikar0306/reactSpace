import {applyMiddleware, createStore} from "redux"

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
    case "E":
      throw new Error("error occurred");
      break;
  }

  return state
}

// creating redux middleware
// actual functions are
// ({ getState, dispatch }) => next => action
const logger = (store) => next => action => {
  console.log("action fired : ", action.type);
  try {
   next(action)
  } catch (e) {
   console.error("Error : ", e);
  }

}

// Now create the middleware
const middleware = applyMiddleware(logger)

const store = createStore(reducer, {value: 0}, middleware)

store.subscribe(() => {
  console.log("store changed : " + store.getState().value)
})

store.dispatch({type: "INC", payload: 100})
store.dispatch({type: "DEC", payload: 10})
store.dispatch({type: "INC", payload: 100})
store.dispatch({type: "DEC", payload: 10})
store.dispatch({type: "E", payload: 10})
