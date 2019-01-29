import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import NavbarHeader from "./modules/common/components/layout/NavbarHeader";
import NavbarTopRight from "./modules/common/components/layout/NavbarTopRight";
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

                            <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{ marginBottom: 0 }}>
                                <NavbarHeader />
                                <NavbarTopRight />
                                <Sidebar />
                            </nav>

                            <div id="page-wrapper">
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

                        </div >
                    </div >
                </Router>
            </Provider>
        );
    }
}

export default App;
