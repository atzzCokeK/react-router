import React from "react";
import {Link, withRouter, NavLink} from "react-router-dom";
import Nav from "../components/layout/Nav"
import Footer from "../components/layout/Footer"

class Layout extends React.Component {
    render() {
        const {location} = this.props;
        const containerStyle = {
            marginTop: "60px"
        }
    return(
    <div>
        <Nav location={location}></Nav>
        <div className="container" style={containerStyle}>
            <div className="row">
                <div className="col-lg-12">
                <h1>KillerNews.neto</h1>
                {this.props.children}
                </div>
            </div>
        <Footer/>
        </div>
    </div>
    )
    }
}

export default withRouter(Layout)