import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import MaterialTable from 'material-table'
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DescriptionIcon from '@material-ui/icons/Description';

import ConfirmationDialog from './ConfirmationDialog';
import DescriptionDialog from './DescriptionDialog';
import TaskEditDialog from './TaskEditDialog';

import { editProject, deleteProjectById } from '../../actions/ProjectActions';
import { onSave } from '../../actions/CommonActions';

const EnhancedTable = (props) => {

    const [openDialog, setOpenDialog] = useState(false)
    const [openDescription, setOpenDescription] = useState(false)
    const [openTaskEdit, setOpenTaskEdit] = useState(false)
    const [editableTask, setEditableTask] = useState(null)
    const [idForDeletion, setIdForDeletion] = useState(null)
    const [descriptionForDialog, setDescriptionForDialog] = useState(null)

    useEffect(() => console.log('mounted', props.data), [props.data]);

    const handleEdit = (id) => {
        if (props.name === "projects") {
            props.editProject('EDIT_PROJECT', id)
        }
    }

    const handleDeleteRequest = (id) => {
        setOpenDialog(true);
        setIdForDeletion(id);
    }

    const handleDelete = () => {
        props.deleteProjectById('DELETE_PROJECT_BY_ID', idForDeletion)
        setOpenDialog(false);
        setIdForDeletion(null);
    }


    const openDescriptionDialog = rowData => {
        setOpenDescription(true);
        setDescriptionForDialog(rowData.description)
    }

    const handleCancel = () => {
        setOpenDialog(false);
    }

    const closeDescription = () => {
        setOpenDescription(false);
    }

    const handleOpenTaskEdit = rowData => {
        setOpenTaskEdit(true);
        setEditableTask({ ...rowData })
    }

    const handleTaskEditSave = () => {
        const startDate = new Date(editableTask.startDate)
        const expectedDeliveryDate = new Date(editableTask.expectedDeliveryDate)
        let { tableData, cellStyle, ...taskToSend } = editableTask
        taskToSend = { ...taskToSend, "startDate": startDate, "expectedDeliveryDate": expectedDeliveryDate }
        console.log("aici", taskToSend)
        props.onSave("SAVE_TASK", taskToSend, taskToSend.id)
        setOpenTaskEdit(false);
    }

    const handleTaskEditCancel = () => {
        setOpenTaskEdit(false);
    }

    const handleTaskEditChange = (event, field) => {
        setEditableTask({ ...editableTask, [field]: event.target.value })
    }


    return (
        <React.Fragment>
            <MaterialTable
                title={`Current ${props.name}`}
                columns={props.columns}
                data={props.data}
                actions={props.data.length === 0 ? null : (props.name === "projects" ? [
                    {
                        icon: MoreHorizIcon,
                        tooltip: 'More',
                        onClick: (event, rowData) => {
                            handleEdit(rowData.id)
                        },
                    },
                    rowData => ({
                        icon: DeleteIcon,
                        tooltip: 'Delete entry',
                        onClick: (event, rowData) => {
                            handleDeleteRequest(rowData.id)
                        },
                        disabled: rowData.birthYear < 2000
                    })
                ] : [
                        {
                            icon: DescriptionIcon,
                            tooltip: 'See Description',
                            onClick: (event, rowData) => {
                                openDescriptionDialog(rowData)
                            },
                        },
                        {
                            icon: MoreHorizIcon,
                            tooltip: 'More',
                            onClick: (event, rowData) => {
                                handleOpenTaskEdit(rowData)
                            },
                        },
                        rowData => ({
                            icon: DeleteIcon,
                            tooltip: 'Delete entry',
                            onClick: (event, rowData) => {
                                handleDeleteRequest(rowData.id)
                            },
                            disabled: rowData.birthYear < 2000
                        })
                    ])}
                options={{
                    showTitle: true,
                    actionsColumnIndex: -1,
                    draggable: false,
                    headerStyle: {
                        backgroundColor: '#3f51b5',
                        color: '#FFF',
                        fontSize: '1.1rem',
                        textAlign: 'center'
                    },
                    rowStyle: {
                        textAlign: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        display: 'flex-end'
                    }
                }}
            />

            <ConfirmationDialog
                title={props.name === "projects" ? "Delete project" : ""}
                name={props.name}
                openConfirmation={openDialog}
                handleDelete={handleDelete}
                handleCancel={handleCancel}
            />
            <DescriptionDialog
                description={descriptionForDialog}
                openDescription={openDescription}
                closeDescription={closeDescription}
            />

            <TaskEditDialog
                title="Edit Task"
                open={openTaskEdit}
                task={editableTask}
                onChange={handleTaskEditChange}
                handleSave={handleTaskEditSave}
                handleCancel={handleTaskEditCancel}
            />
        </React.Fragment>
    )
}

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = {
    editProject,
    deleteProjectById,
    onSave
};


export default connect(mapStateToProps, mapDispatchToProps)(EnhancedTable);