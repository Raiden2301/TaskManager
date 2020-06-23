import React from 'react';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';

import Footer from './Footer';
import SnackBar from './SnackBar'
import NavBar from './NavBar';
import './Layout.css';


const AppLayout = (props) => {
    const snack = props.snackObj && props.snackObj.snack
    return (
        <div>
            <NavBar title={props.title}></NavBar>
            <Container maxWidth={props.maxWidth ? props.maxWidth : "md"} className="layout-container">
                {props.children}
            </Container>
            <SnackBar
                open={snack && snack.open}
                severity={snack && snack.severity}
                message={snack && snack.message}
            />
            {/* <Footer /> */}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    snackObj: state.snackObj,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
