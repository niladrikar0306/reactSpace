import React from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "../components/layout/Nav";

import Home from "./Home";
import Sells from "./Sells";


export default class Layout extends React.Component {
  render() {
      const { location } = this.props;
      const containerStyle = {
        marginTop: "60px"
      };
      console.log("layout");
      console.log(this.props);
      return (
        <div>

            <Nav location={location} />

            <div class="container" style={containerStyle}>
              <div class="row">
                <div class="col-lg-12">
                  <h1>Water Treatment Management</h1>

                  <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/sells' component={Sells}/>
                  </Switch>

                </div>
              </div>
            </div>
          </div>
      )
  }
}
