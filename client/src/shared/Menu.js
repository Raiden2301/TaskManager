import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';

import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import ReportIcon from '@material-ui/icons/Report';

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

    const isLoggedIn = localStorage.getItem('loggedIn')

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
                {
                    isLoggedIn === 'true' &&
                    <div>
                        <MenuItem onClick={() => {
                            history.push('/');
                            setAnchorEl(null);
                        }}>
                            <ListItemIcon>
                                <HomeIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Acasa" />
                        </MenuItem>

                        <Divider />

                        <MenuItem onClick={() => {
                            history.push('/projects');
                            setAnchorEl(null);
                        }}>
                            <ListItemIcon>
                                <BusinessCenterIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Projects" />
                        </MenuItem>

                        <Divider />

                        <MenuItem onClick={() => {
                            history.push('/tasks');
                            setAnchorEl(null);
                        }}>
                            <ListItemIcon>
                                <AssignmentIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Tasks" />
                        </MenuItem>

                        <Divider />

                        <Tooltip title="Not implemented yet" aria-label="add">
                            <MenuItem onClick={() => {
                                history.push('/todo');
                                setAnchorEl(null);
                            }}>
                                <ListItemIcon>
                                    <FormatListNumberedIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary="My TO DOs" />
                            </MenuItem>
                        </Tooltip>

                        <Divider />
                    </div>
                }


                <Tooltip title="Not implemented yet" aria-label="add">
                    <MenuItem>
                        <ListItemIcon>
                            <ReportIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Report a problem" />
                    </MenuItem>
                </Tooltip>


            </Menu>
        </div>
    );
}

export default AppMenu;
