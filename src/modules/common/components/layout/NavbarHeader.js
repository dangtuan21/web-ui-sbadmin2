import React, { Component } from "react";

class NavbarHeader extends Component {
    render() {
        const authContent =
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="index.html">SB Admin v2.0</a>
            </div>

        return (
            <div>
                {authContent}
            </div>
        )
    }
}

export default NavbarHeader;
