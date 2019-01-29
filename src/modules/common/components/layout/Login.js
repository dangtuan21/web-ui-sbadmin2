import React, { Component } from "react";

class Login extends Component {
    render() {
        const authContent =
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <div className="login-panel panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Login</h3>
                            </div>
                            <div className="panel-body">
                                <form>
                                    <fieldset>
                                        <div className="form-group">
                                            <input className="form-control" name="email" placeholder="Email" type="email" autoFocus />
                                            <label className="control-label">E-mail Address</label>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" name="password" placeholder="Password" type="password" />
                                            <label className="control-label">Password</label>
                                        </div>
                                        <div className="checkbox mt-15">
                                            <label>
                                                <input name="remember" type="checkbox" value="Remember Me" />Remember Me
                                    </label>
                                        </div>
                                        <a href="index.html" className="btn btn-primary btn-block mt-20">Login</a>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        return (
            <div>
                {authContent}
            </div>
        )
    }
}

export default Login;
