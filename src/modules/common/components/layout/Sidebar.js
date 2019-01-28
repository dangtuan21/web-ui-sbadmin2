import React, { Component } from "react";

class Sidebar extends Component {
    constructor(props) {
        super(props)
    
        this.toggleClass= this.toggleClass.bind(this);
        this.state = {
          activeIndex: 0,
          caretLeft: 'fa-angle-left',
          caretDown: 'fa-angle-down'
        }
    }

    toggleClass(index, e) {
        if(index === this.state.activeIndex) {
            this.setState({ 
                activeIndex: 0
            });
        } else {
            this.setState({ 
                activeIndex: index
            });
        }
    };

    render() {
        const authContent =
            <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" id="side-menu">
                        <li className="sidebar-search">
                            <div className="input-group custom-search-form">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                            {/* <!-- /input-group --> */}
                        </li>
                        <li>
                            <a href="/dashboard"><i className="fa fa-dashboard fa-fw"></i> Dashboard</a>
                        </li>
                        <li className={this.state.activeIndex===1 ? 'active': ''} onClick={this.toggleClass.bind(this, 1)}>
                        <a href="#"><i className="fa fa-bar-chart fa-fw"></i> Charts<span className={"fa pull-right " + (this.state.activeIndex===1 ? this.state.caretDown : this.state.caretLeft)}></span></a>
                            <ul className="nav nav-second-level open">
                                <li>
                                    <a href="flot.html">Flot Charts</a>
                                </li>
                                <li>
                                    <a href="morris.html">Morris.js Charts</a>
                                </li>
                            </ul>
                            {/* <!-- /.nav-second-level --> */}
                        </li>
                        <li>
                            <a href="/tables"><i className="fa fa-table fa-fw"></i> Tables</a>
                        </li>
                        <li>
                            <a href="/forms"><i className="fa fa-edit fa-fw"></i> Forms</a>
                        </li>
                        <li className={this.state.activeIndex===2 ? 'active': ''} onClick={this.toggleClass.bind(this, 2)}>
                        <a href="#"><i className="fa fa-wrench fa-fw"></i> UI Elements<span className={"fa pull-right " + (this.state.activeIndex===2 ? this.state.caretDown : this.state.caretLeft)}></span></a>
                            <ul className="nav nav-second-level open">
                                <li>
                                    <a href="panels-wells.html">Panels and Wells</a>
                                </li>
                                <li>
                                    <a href="buttons.html">Buttons</a>
                                </li>
                                <li>
                                    <a href="notifications.html">Notifications</a>
                                </li>
                                <li>
                                    <a href="typography.html">Typography</a>
                                </li>
                                <li>
                                    <a href="icons.html"> Icons</a>
                                </li>
                                <li>
                                    <a href="grid.html">Grid</a>
                                </li>
                            </ul>
                            {/* <!-- /.nav-second-level --> */}
                        </li>
                        <li className={this.state.activeIndex===3 ? 'active': ''} onClick={this.toggleClass.bind(this, 3)}>
                            <a href="#"><i className="fa fa-sitemap fa-fw"></i> Multi-Level Dropdown<span className={"fa pull-right " + (this.state.activeIndex===3 ? this.state.caretDown : this.state.caretLeft)}></span></a>
                            <ul className="nav nav-second-level open">
                                <li>
                                    <a href="/#">Second Level Item</a>
                                </li>
                                <li>
                                    <a href="/#">Second Level Item</a>
                                </li>
                                <li>
                                    <a href="/#">Third Level <span className="fa pull-right"></span></a>
                                    <ul className="nav nav-third-level">
                                        <li>
                                            <a href="/#">Third Level Item</a>
                                        </li>
                                        <li>
                                            <a href="/#">Third Level Item</a>
                                        </li>
                                        <li>
                                            <a href="/#">Third Level Item</a>
                                        </li>
                                        <li>
                                            <a href="/#">Third Level Item</a>
                                        </li>
                                    </ul>
                                    {/* <!-- /.nav-third-level --> */}
                                </li>
                            </ul>
                            {/* <!-- /.nav-second-level --> */}
                        </li>
                        <li className={this.state.activeIndex===4 ? 'active': ''} onClick={this.toggleClass.bind(this, 4)}>
                            <a href="#"><i className="fa fa-files-o fa-fw"></i> Sample Pages<span className={"fa pull-right " + (this.state.activeIndex===4 ? this.state.caretDown : this.state.caretLeft)}></span></a>
                            <ul className="nav nav-second-level open">
                                <li>
                                    <a href="blank.html">Blank Page</a>
                                </li>
                                <li>
                                    <a href="/login">Login Page</a>
                                </li>
                            </ul>
                            {/* <!-- /.nav-second-level --> */}
                        </li>
                    </ul>
                </div>
                {/* <!-- /.sidebar-collapse --> */}
            </div>


        return (
            <div>
                {authContent}
            </div>
        )
    }
}

export default Sidebar;