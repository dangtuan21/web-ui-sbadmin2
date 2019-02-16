import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            loggedInUser: ''
        }
    }

    componentDidMount() {
        const loggedInUser = localStorage.getItem('loggedInUser');
        this.setState({
            loggedInUser
        });
    }
    render() {
        const { open, loggedInUser } = this.state;
        const authContent = 
            <ul className={"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion " + (open===true ? "toggled" : "")} id="accordionSidebar" role="navigation">

                {/* <!-- /Sidebar - Brand --> */}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="index">
                    <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin 2</div>
                </Link>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0"></hr>

                {/* <!-- Nav Item - Dashboard --> */}
                <li className="nav-item ">
                    <Link to="/" className="nav-link">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider"></hr>

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">
                    Interface
                </div>

                {/* <!-- Nav Item - Pages Collapse Menu --> */}
                <li className="nav-item d-none">
                    <a className={"nav-link " + (open===true ? " " : "collapsed")} href="/#" data-toggle="collapse" aria-controls="collapseTwo" onClick={() => this.setState({ open: !open })} aria-expanded={open}>
                    </a>
                </li>

                <li className="nav-item">
                <a className="nav-link collapsed" href="/#" data-toggle="collapse" data-target="#collapseComponents" aria-expanded="true" aria-controls="collapseComponents">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Components</span>
                    </a>
                    <div id="collapseComponents" className="collapse" aria-labelledby="headingComponents" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Components:</h6>
                            <Link className="collapse-item" to="buttons">Buttons</Link>
                            <Link className="collapse-item" to="cards">Cards</Link>
                        </div>
                    </div>
                </li>

                {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="/#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>Utilities</span>
                    </a>
                    <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Utilities:</h6>
                            <Link className="collapse-item" to="/utilities-color">Colors</Link>
                            <Link className="collapse-item" to="/utilities-border">Borders</Link>
                            <Link className="collapse-item" to="utilities-animation">Animations</Link>
                            <Link className="collapse-item" to="utilities-other">Other</Link>
                        </div>
                    </div>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider"></hr>

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">
                    Addons
                </div>

                {/* <!-- Nav Item - Pages Collapse Menu --> */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="/#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-pager"></i>
                        <span>Pages</span>
                    </a>
                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Login Screens:</h6>
                            {/* <Link to="/login" className="collapse-item">Login</Link> */}
                            <Link to="/register" className="collapse-item">Register</Link>
                            <Link to="/forgot-password" className="collapse-item">Forgot Password</Link>
                            <div className="collapse-divider"></div>
                            <h6 className="collapse-header">Other Pages:</h6>
                            <Link to="/404" className="collapse-item">404 Page</Link>
                            <Link to="/blank" className="collapse-item">Blank Page</Link>
                        </div>
                    </div>
                </li>

                {/* <!-- Nav Item - Charts --> */}
                <li className="nav-item">
                    <Link to="/charts" className="nav-link">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span>
                    </Link>
                </li>

                {/* <!-- Nav Item - Table --> */}
                <li className="nav-item">
                    <Link to="/tables" className="nav-link">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Table</span>
                    </Link>
                </li>

                {/* <!-- Nav Item - Form --> */}
                <li className="nav-item">
                    <Link to="/forms" className="nav-link">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Form</span>
                    </Link>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider"></hr>

                {/* <!-- Sidebar Toggler (Sidebar) --> */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle" onClick={() => this.setState({ open: !open })} ></button>
                </div>
            </ul>
        const unauthContent = <div/>
        return (
            <div>
                {loggedInUser ? authContent : unauthContent}
            </div>
        )
    }
}
export default connect(null, null)(Sidebar);
