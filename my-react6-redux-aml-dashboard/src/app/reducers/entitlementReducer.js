const initialLayoutStore = {
  fetching : false,
  entitlements : [],
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
