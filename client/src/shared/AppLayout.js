import React, { Component } from 'react';

import Container from '@material-ui/core/Container';

import Footer from './Footer';
import NavBar from './NavBar';
import './Layout.css';


const AppLayout = (props) => {
    return (
        <div>
            <NavBar title={props.title}></NavBar>
            <Container maxWidth="md" className="layout-container">
                <div>
                    {props.children}
                </div>
            </Container>

            <Footer />
        </div>
    )
}

export default AppLayout;
