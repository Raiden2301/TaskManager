import React from 'react';
import { connect } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { editProject, deleteProjectById } from '../../actions/ProjectActions';

import ConfirmationDialog from './ConfirmationDialog';
import TaskEditDialog from './TaskEditDialog';

import './UtilComponent.css';

const _ = require('lodash');


class EditableTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openConfirmation: false,
            idForDeletion: null,
            openTaskEdit: false
        }
    }

    handleEdit = (event, row) => {
        console.log("Clicked!", event, row, this.props.name)
        if (this.props.name === "projects") {
            this.props.editProject('EDIT_PROJECT', row)
        }
    }

    handleDeleteRequest = (id) => {
        this.setState({
            openConfirmation: true,
            idForDeletion: id
        })
    }

    handleDelete = () => {
        this.props.deleteProjectById('DELETE_PROJECT_BY_ID', this.state.idForDeletion)
    }

    handleCancel = () => {
        this.setState({
            openConfirmation: false
        })
    }

    handleTaskEditCancel = () => {
        this.setState({
            openTaskEdit: false
        })
    }

    handleTaskSave = () => {
        console.log("Saved")
    }


    render() {
        return (
            <React.Fragment>
                {console.log("Editable ", this.props)}
                <TableContainer component={Paper}>
                    <Table className="table" aria-label="simple table">
                        <TableHead className="table-head">
                            <TableRow>
                                {
                                    this.props.tableHead && this.props.tableHead.map((row, index) => (
                                        <TableCell className="tableHead-cell" align="center">{_.startCase(row)}</TableCell>
                                    ))
                                }
                                <TableCell className="tableHead-cell" align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.rows.map((row, index) => (
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
                                                <IconButton edge="start" color="inherit" aria-label="menu" onClick={(event) => { this.handleEdit(event, row[0]) }}>
                                                    <MoreHorizIcon />
                                                </IconButton>
                                            </div>
                                            <div>
                                                <IconButton edge="start" color="inherit" aria-label="menu" onClick={(event) => { this.handleDeleteRequest(row[0]) }} >
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

                <ConfirmationDialog
                    title={this.props.name === "projects" ? "Delete project" : ""}
                    name={this.props.name}
                    openConfirmation={this.state.openConfirmation}
                    handleDelete={this.handleDelete}
                    handleCancel={this.handleCancel}
                />

                <TaskEditDialog
                    title="Edit Task"
                    openTaskEdit={this.state.openTaskEdit}
                    handleSave={this.handleTaskSave}
                    handleCancel={this.handleTaskEditCancel}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = {
    editProject,
    deleteProjectById
};


export default connect(mapStateToProps, mapDispatchToProps)(EditableTable);

