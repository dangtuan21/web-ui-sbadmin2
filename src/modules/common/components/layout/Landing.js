import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LOGGED_IN_USER } from "../../utils/constants";

var store = require("store-js");

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInUser: null
    };
  }
  componentDidMount() {
    const loggedInUser = store.get(LOGGED_IN_USER);
    this.setState({
      loggedInUser
    });
  }

  render() {
    const loginContent =
      this.state.loggedInUser == null ? (
        <Link to="/login" className="btn btn-lg btn-light">
          Login
        </Link>
      ) : null;

    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">P2P</h1>
                <p className="lead"> We match your demand!</p>
                <hr />
                {loginContent}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
