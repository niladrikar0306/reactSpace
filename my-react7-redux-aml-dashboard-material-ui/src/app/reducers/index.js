import {combineReducers} from "redux"

import entitlementReducer from "./entitlementReducer"


export default combineReducers({
  layout : entitlementReducer,
})
