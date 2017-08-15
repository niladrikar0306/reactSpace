import {createStore} from "redux"

const reducer = function(state, action) {

  const previous = state;
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
  console.log(previous)
  console.log(state)
  return state
}

const store = createStore(reducer, {value: 0})

store.subscribe(() => {
  console.log("store changed : " + store.getState().value)
})

store.dispatch({type: "INC", payload: 100})
store.dispatch({type: "DEC", payload: 10})
store.dispatch({type: "INC", payload: 100})
store.dispatch({type: "DEC", payload: 10})
