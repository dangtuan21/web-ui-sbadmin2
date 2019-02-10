import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import NavbarTop from "./modules/common/components/layout/NavbarTop";
import Sidebar from "./modules/common/components/layout/Sidebar";
import Dashboard from "./modules/common/components/layout/Dashboard";
import Tables from "./modules/common/components/layout/Tables";
import Forms from "./modules/common/components/layout/Forms";
import Login from "./modules/common/components/layout/Login";

import "./App.css";
import store from './store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <div id="wrapper">
                            <Sidebar />
                            <div id="content-wrapper" className="d-flex flex-column">
                                <div id="content">
                                    <NavbarTop />
                                    <div id="page-wrapper" className="container-fluid">
                                        <Switch>
                                            <Route path="/dashboard" component={Dashboard} />
                                        </Switch>
                                        <Switch>
                                            <Route path="/tables" component={Tables} />
                                        </Switch>
                                        <Switch>
                                            <Route path="/forms" component={Forms} />
                                        </Switch>
                                        <Switch>
                                            <Route path="/login" component={Login} />
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                </Router>
            </Provider>
        );
    }
}

export default App;
