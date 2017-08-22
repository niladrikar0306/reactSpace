import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux"


import * as constants from "../../common/constants"

import Nav from "../../components/layout/Nav";

import Home from "../home/Home";
import DQ from "../dq/DQ";

@connect((store) => {
  return {
    entitlements : store.layout.entitlements,
    //navs : store.layout.navs,
  }
})
class Layout extends React.Component {
  render() {
      const { location, navs, entitlements } = this.props;
      const containerStyle = {
        marginTop: "60px"
      };
      // const mappedRoutes = navs.map(i => {
      //   for(const e of entitlements) {
      //     if(e.name === i.name) {
      //       return (<Route exact path={i.path} component={i.comp}/>)
      //     }
      //   }
      //
      // })

      console.log("layout : " , this.props);
      console.log("layout state : " , this.state);


      return (
        <div>

            <Nav  />

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

export default withRouter(Layout)
