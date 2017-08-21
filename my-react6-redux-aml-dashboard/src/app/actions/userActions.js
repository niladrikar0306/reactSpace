import axios from "../axios/axios"

import * as constants from "../common/constants"



export const fetchEntitlements = function() {
  return (dispatch) => {
    dispatch({
      type : "LAYOUT_ENTITLEMENT_FETCHING"
    })

    axios.get(constants.DOMAIN + "api/users/view/entitlements")
      .then((response) => {
        dispatch({
          type : "LAYOUT_ENTITLEMENT_SUCCESSFUL",
          payload : response.data.entitlements,
        })
      })
      .catch((err) => {
        dispatch({
          type : "LAYOUT_ENTITLEMENT_FAILED",
          payload : err,
        })
      })
  }
}
