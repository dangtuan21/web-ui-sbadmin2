import React, { Component } from "react";

class Borders extends Component {
    render() {
        const authContent =
        <div className="container-fluid">

        {/* <!-- Page Heading --> */}
        <h1 className="h3 mb-1 text-gray-800">Border Utilities</h1>
        <p className="mb-4">Bootstrap's default utility classes can be found on the official <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>

        {/* <!-- Content Row --> */}
        <div className="row">

          {/* <!-- Border Left Utilities --> */}
          <div className="col-lg-6">

            <div className="card mb-4 py-3 border-left-primary">
              <div className="card-body">
                .border-left-primary
              </div>
            </div>

            <div className="card mb-4 py-3 border-left-success">
              <div className="card-body">
                .border-left-success
              </div>
            </div>

            <div className="card mb-4 py-3 border-left-info">
              <div className="card-body">
                .border-left-info
              </div>
            </div>

            <div className="card mb-4 py-3 border-left-warning">
              <div className="card-body">
                .border-left-warning
              </div>
            </div>

            <div className="card mb-4 py-3 border-left-danger">
              <div className="card-body">
                .border-left-danger
              </div>
            </div>

          </div>

          {/* <!-- Border Bottom Utilities --> */}
          <div className="col-lg-6">

            <div className="card mb-4 py-3 border-bottom-primary">
              <div className="card-body">
                .border-bottom-primary
              </div>
            </div>

            <div className="card mb-4 py-3 border-bottom-success">
              <div className="card-body">
                .border-bottom-success
              </div>
            </div>

            <div className="card mb-4 py-3 border-bottom-info">
              <div className="card-body">
                .border-bottom-info
              </div>
            </div>

            <div className="card mb-4 py-3 border-bottom-warning">
              <div className="card-body">
                .border-bottom-warning
              </div>
            </div>

            <div className="card mb-4 py-3 border-bottom-danger">
              <div className="card-body">
                .border-bottom-danger
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

export default Borders;
