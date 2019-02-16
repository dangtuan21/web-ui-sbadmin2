import React, { Component } from "react";
import { connect } from "react-redux";

class NavbarHeader extends Component {
    render() {
        console.log('NavbarHeader render');
        const authContent =
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/">SB Admin v2.0</a>
            </div>

        return (
            <div>
                {authContent}
            </div>
        )
    }
}

// export default NavbarHeader;
export default connect(null, null)(NavbarHeader);
