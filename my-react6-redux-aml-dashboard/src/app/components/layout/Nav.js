import React from "react";
import PropTypes from 'prop-types'
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux"

import * as constants from "../../common/constants"

import {fetchEntitlements} from "../../actions/userActions"

@connect((store) => {
  return {
    fetching : store.layout.fetching,
    entitlements : store.layout.entitlements,
    // navs : store.layout.navs,
  }
})
class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
      navs : [{
        id : 1,
        path : constants.ROOT_PATH,
        name : constants.ROOT_NAME,
      },{
        id : 2,
        path : constants.DQ_PATH,
        name : constants.DQ_NAME,
      }],
    };
  }

  componentWillMount() {
    this.props.dispatch(fetchEntitlements())
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  setActiveClass(pathname){
    const { match, location, history } = this.props;
    return location.pathname === pathname ? "active" : "";
  }

  render() {
    const { match, location, history, entitlements } = this.props;
    const { collapsed, navs } = this.state;
    const homeClass =  location.pathname === constants.ROOT_PATH ? "active" : "";
    const dqClass = location.pathname === constants.DQ_PATH ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    console.log("Nav : ", this.props);

    const mappedItems = navs.map(i => {
      for(const e of entitlements) {
        if(e.name === i.name) {
          const activeClass = location.pathname === i.path ? "active" : "";
          return(<li key={i.id} class={activeClass}>
            <Link to={i.path} onClick={this.toggleCollapse.bind(this)}>{i.name}</Link>
          </li>);
        }
      }


    })

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              {mappedItems}

            </ul>
          </div>
        </div>
      </nav>
    );
  }
}


export default withRouter(Nav)
