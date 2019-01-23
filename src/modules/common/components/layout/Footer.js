import React, { Component } from "react";

class Footer extends Component {
    render() {
        const content =
            <footer className="sticky-footer">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <p>Copyright &copy; {new Date().getFullYear()} P2P Lending</p>
                    </div>
                </div>
            </footer>

        return (
            <div>
                {content}
            </div>
        )
    }
}
export default Footer;
