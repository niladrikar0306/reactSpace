import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"

import store from "./redux/redux"

import Layout from "./pages/layout/Layout";


console.log(Provider);
const app = document.getElementById('app');

ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
  </Provider>
  , app);
