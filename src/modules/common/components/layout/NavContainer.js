import React, { Component } from "react";
import NavbarTop from "./NavbarTop";
import Sidebar from "./Sidebar";

class NavContainer extends Component {
    navigate() {
      console.log(this.props);
    }
    render() {
        const authContent =
          <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <NavbarTop />
                    <div id="page-wrapper">
                      {this.props.children}
                    </div>
                    <button className="btn btn-primary" onClick={this.navigate.bind(this)}>Test</button>
                </div>
            </div>
        </div >
        return (
          <div>
              {authContent}
          </div>
        )
    }
}

export default NavContainer;
