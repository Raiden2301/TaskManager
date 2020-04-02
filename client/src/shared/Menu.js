import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';

import history from '../history';

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

const AppMenu = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>

            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick} >
                <MenuIcon />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => {
                    history.push('/');
                    setAnchorEl(null);
                }}>Home Page</MenuItem>
                <Divider />
                <MenuItem onClick={() => {
                    history.push('/projects');
                    setAnchorEl(null);
                }}>Projects</MenuItem>
                <Divider />
                <MenuItem onClick={() => {
                    history.push('/tasks');
                    setAnchorEl(null);
                }}>Tasks</MenuItem>
            </Menu>
        </div>
    );
}

export default AppMenu;