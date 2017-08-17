import axios from "axios"
import MockAdapter from "axios-mock-adapter"

const mock = new MockAdapter(axios)

mock.onGet("/users").reply(200, {
  users: [{
    id : 1,
    name : "Niladri"
  }]
})

export default axios
