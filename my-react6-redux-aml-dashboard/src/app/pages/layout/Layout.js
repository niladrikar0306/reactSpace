import React from "react";
import { Switch, Route } from "react-router-dom";

import * as constants from "../../common/constants"

import Nav from "../../components/layout/Nav";

import Home from "../home/Home";
import DQ from "../dq/DQ";


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
                  <h1>AML Dashboard</h1>

                  <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path={constants.dqPath} component={DQ}/>
                  </Switch>

                </div>
              </div>
            </div>
          </div>
      )
  }
}
