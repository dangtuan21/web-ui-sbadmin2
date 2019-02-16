import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: true,
        }
    }
    componentDidMount() {
        const loggedInUser = localStorage.getItem('loggedInUser');
        this.setState({
            loggedInUser
        });
    }

    render() {
        const { loggedInUser } = this.state;
        const authContent =
        <div className="container-fluid">
                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <Link to="/#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                        <i className="fas fa-download fa-sm text-white-50"></i> 
                        Generate Report
                    </Link>
                </div>

                {/* <!-- Content Row --> */}
                <div className="row">

                    {/* <!-- Earnings (Monthly) Card Example --> */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Earnings (Monthly)</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Earnings (Monthly) Card Example --> */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-success shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Earnings (Annual)</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Earnings (Monthly) Card Example --> */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-info shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks</div>
                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Pending Requests Card Example --> */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-warning shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Pending Requests</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-comments fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Content Row --> */}
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        {/* <!-- Color System --> */}
                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-primary text-white shadow">
                                <div className="card-body">
                                    Primary
                                    <div className="text-white-50 small">#4e73df</div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-success text-white shadow">
                                <div className="card-body">
                                    Success
                                    <div className="text-white-50 small">#1cc88a</div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-info text-white shadow">
                                <div className="card-body">
                                    Info
                                    <div className="text-white-50 small">#36b9cc</div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-warning text-white shadow">
                                <div className="card-body">
                                    Warning
                                    <div className="text-white-50 small">#f6c23e</div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-danger text-white shadow">
                                <div className="card-body">
                                    Danger
                                    <div className="text-white-50 small">#e74a3b</div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-secondary text-white shadow">
                                <div className="card-body">
                                    Secondary
                                    <div className="text-white-50 small">#858796</div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        {/* <!-- Illustrations --> */}
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
                            </div>
                            <div className="card-body">
                                <p>Add some quality, svg illustrations to your project courtesy of <Link target="_blank" rel="nofollow" to="https://undraw.co/">unDraw</Link>, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
                                <Link target="_blank" rel="nofollow" to="https://undraw.co/">Browse Illustrations on unDraw &rarr;</Link>
                            </div>
                        </div>

                        {/* <!-- Approach --> */}
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
                            </div>
                            <div className="card-body">
                                <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.</p>
                                <p className="mb-0">Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        const unauthContent = <div/>
        return (
            <div>
                {loggedInUser ? authContent : unauthContent}
            </div>
        )
    }
}

export default Dashboard;
