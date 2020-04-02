import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';

import './EditableTable.css';

const _ = require('lodash');

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const EditableTable = (props) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                {console.log(props.tableHead)}
                <TableHead className="table-head">
                    <TableRow>
                        {
                            props.tableHead && props.tableHead.map((row, index) => (
                                <TableCell className="tableHead-cell" align="center">{_.startCase(row)}</TableCell>
                            ))
                        }
                        <TableCell className="tableHead-cell" align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map((row, index) => (
                        <TableRow key={row[0]}>
                            {
                                row.map((field, index) => {
                                    if (index === 0) {
                                        return (
                                            <TableCell component="th" scope="row" align="center">
                                                {field}
                                            </TableCell>
                                        )
                                    } else {
                                        return (
                                            <TableCell align="center">{field}</TableCell>
                                        )
                                    }
                                })
                            }
                            <TableCell align="center">
                                <div className="icons-container">

                                    <div>
                                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"  >
                                            <EditIcon />
                                        </IconButton>
                                    </div>
                                    <div>
                                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"  >
                                            <DeleteIcon />
                                        </IconButton>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default EditableTable;