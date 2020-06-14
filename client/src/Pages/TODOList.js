import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { TextField, Button, Container, Box } from '@material-ui/core'

import TODOItem from './components/TODOItem'
import AppLayout from '../shared/AppLayout';
import DialogWindow from './components/DialogWindow'
import history from '../history';

import { getDataById, onSave } from '../actions/CommonActions';





const TODOList = (props) => {
    const here = ' here '

    const loggedUserId = localStorage.getItem('loggedUserId')

    useEffect(() => {
        props.getDataById('GET_EMPLOYEE_BY_ID', loggedUserId)
    }, [loggedUserId]);


    const todoList = props.employeeObj && props.employeeObj.loggedEmployee && props.employeeObj.loggedEmployee.todoList


    const onChange = (event, todo) => {
        const statusToSend = todo.status === 'TODO' ? 'DONE' : 'TODO'
        let dataToSend = { ...todo, status: statusToSend }
        console.log("Uite aici", todo, dataToSend)
        props.onSave('SAVE_TODO', dataToSend)
    }

    const doneTodo = []
    const notDoneTodo = []
    props.employeeObj && props.employeeObj.loggedEmployee && props.employeeObj.loggedEmployee.todoList &&
        todoList && todoList.map((todo, index) => {
            if (todo.status === 'TODO') {
                notDoneTodo.push(todo)
            } else {
                doneTodo.push(todo)
            }
        })

    const emptyTodo = {
        name: '',
        description: '',
        status: 'TODO',
        employeeId: loggedUserId
    }

    const [newTodo, setNewTodo] = useState({})
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
        setNewTodo(emptyTodo)
    }

    const handleClose = () => {
        setNewTodo(emptyTodo)
        setOpen(false)
    }

    const handleSave = () => {
        props.onSave('SAVE_TODO', newTodo)
        setOpen(false)
    }

    const getDialogActions = () => {
        return (
            <Container className="todoButtons">
                <Button
                    className='dialogAction'
                    color='primary'
                    variant="contained"
                    onClick={handleClose}
                >
                    Cancel
                </Button>
                <Button
                    className='dialogAction'
                    color='primary'
                    variant="contained"
                    onClick={handleSave}
                >
                    Add
                </Button>
            </Container>
        )
    }

    const getDialogContent = () => {
        return (
            <Container className="dialog-container">
                <div className="grid-vertical">
                    <Box width={280} padding="0.5rem">
                        <TextField
                            id="name"
                            label="Name"
                            variant="outlined"
                            value={newTodo.name}
                            onChange={(event) => {
                                setNewTodo({ ...newTodo, name: event.target.value })
                            }}
                        />
                    </Box>
                    <Box width={280} padding="0.5rem">
                        <TextField
                            id="description"
                            label="Description"
                            variant="outlined"
                            value={newTodo.description}
                            onChange={(event) => {
                                setNewTodo({ ...newTodo, description: event.target.value })
                            }}
                        />
                    </Box>
                </div>
            </Container >
        )
    }

    return (
        <AppLayout title="My TO DO's">
            <div className="home-page">
                {
                    notDoneTodo.length > 0 && notDoneTodo.map((todo, index) => {
                        return (
                            <TODOItem
                                todo={todo}
                                checked={false}
                                onChange={onChange}
                            />
                        )
                    })
                }
                {
                    doneTodo.length > 0 && doneTodo.map((todo, index) => {
                        return (
                            <TODOItem
                                todo={todo}
                                checked={true}
                                onChange={onChange}
                            />
                        )
                    })
                }
                <div className="addTodoDiv">
                    <Button variant="contained" className="add-todo" onClick={handleOpen} >
                        Add todo
                </Button>
                </div>
            </div>
            <DialogWindow
                title="Add a TODO"
                open={open}
                handleClose={handleClose}
                actions={getDialogActions()}
                content={getDialogContent()}
            />
        </AppLayout>
    )
}

const mapStateToProps = (state) => ({
    employeeObj: state.employeeObj
});

const mapDispatchToProps = {
    getDataById,
    onSave
};

export default connect(mapStateToProps, mapDispatchToProps)(TODOList);

