import React from "react";
import PropTypes from 'prop-types'
import { Link, withRouter } from "react-router-dom";

import * as constants from "../../common/constants"

class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
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

  render() {
    const { match, location, history } = this.props;
    const { collapsed } = this.state;
    const homeClass =  location.pathname === "/" ? "active" : "";
    const dqClass = location.pathname === constants.dqPath ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    console.log(this.props);

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
              <li class={homeClass}>
                <Link to='/' onClick={this.toggleCollapse.bind(this)}>Home</Link>
              </li>
              <li class={dqClass}>
                <Link to={constants.dqPath} onClick={this.toggleCollapse.bind(this)}>DQ</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    );
  }
}


export default withRouter(Nav)
