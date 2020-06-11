import React, { useState } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { logOut } from '../actions/CommonActions';

import AppMenu from './Menu';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const NavBar = (props) => {
    const classes = useStyles()
    const isLoggedIn = localStorage.getItem('loggedIn')

    const [anchorElement, setAnchorElement] = useState(null)

    const handleOpen = (event) => {
        setAnchorElement(event.currentTarget)
    };

    const handleClose = () => {
        setAnchorElement(null)
    };

    const handleLogout = () => {
        props.logOut('LOG_OUT')
        setAnchorElement(null)
    };

    const open = anchorElement ? true : false

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <AppMenu />
                    {/* <SideDrawer /> */}
                    <Typography variant="h6" className={classes.title}>
                        {props.title}
                    </Typography>
                    {
                        isLoggedIn === 'true' &&
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElement}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >

                                <MenuItem onClick={handleLogout}>
                                    <ListItemIcon>
                                        <ExitToAppIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Log Out" />
                                </MenuItem>

                            </Menu>
                        </div>
                    }
                </Toolbar>
            </AppBar>
        </div >
    );
}

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = {
    logOut
};


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
