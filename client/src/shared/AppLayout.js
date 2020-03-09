import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';  // moved to Nav

// import logo from './logo.svg';               // moved to Header
import Footer from './Footer';
import Header from './Header';
import Nav from './NavBar';

class AppLayout extends Component {

    render() {

        const { children } = this.props;

        return (
            <div>
                <div className={"page-main"}>
                    <Nav />
                    {/* {children} Aici voi pune pagina principala */}
                </div>
                {/*footer*/}
                <Footer />
            </div>
        )
    }
}

export default AppLayout;
