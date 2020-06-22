import React from 'react';

import Container from '@material-ui/core/Container';

import Footer from './Footer';
import NavBar from './NavBar';
import './Layout.css';


const AppLayout = (props) => {
    return (
        <div>
            <NavBar title={props.title}></NavBar>
            <Container maxWidth={props.maxWidth ? props.maxWidth : "md"} className="layout-container">
                {props.children}
            </Container>
            {/* <Footer /> */}
        </div>
    )
}

export default AppLayout;
