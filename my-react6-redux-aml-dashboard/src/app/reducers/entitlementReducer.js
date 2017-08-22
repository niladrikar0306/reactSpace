import Home from "../pages/home/Home";
import DQ from "../pages/dq/DQ";

import * as constants from "../common/constants"

const initialLayoutStore = {
  fetching : false,
  entitlements : [],
  navs : [{
    id : 1,
    path : constants.ROOT_PATH,
    name : constants.ROOT_NAME,
    comp : Home,
  },{
    id : 2,
    path : constants.DQ_PATH,
    name : constants.DQ_NAME,
    comp : DQ
  }],
}

export default function entitlementReducer(store=initialLayoutStore, action) {
  switch (action.type) {
    case "LAYOUT_ENTITLEMENT_FETCHING":
      store = {...store, fetching : true}
      break;
    case "LAYOUT_ENTITLEMENT_SUCCESSFUL":
      store = {...store, fetching : false, entitlements : action.payload}
      break;
    case "LAYOUT_ENTITLEMENT_FAILED":
      store = {...store, fetching : false}
      break;
  }
  return store;
}
