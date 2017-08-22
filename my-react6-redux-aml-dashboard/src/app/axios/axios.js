import axios from "axios"
import MockAdapter from "axios-mock-adapter"

const mock = new MockAdapter(axios)

mock.onGet("api/users/view/entitlements").reply(200, {
  entitlements: [{
    id : 1,
    name : "Home",
    path : "/"
  },{
    id : 2,
    name : "DQ",
    path : "/dq",
  }]
})

export default axios
