import React from 'react';
import { connect } from 'react-redux';
import { Container, Button } from '@material-ui/core';

import AppLayout from '../shared/AppLayout';
import EditableTable from '../utils/components/EditableTable';

import { getData } from '../actions/CommonActions';

import './Pages.css'

function getFields(task) {
    let fields = [];
    Object.entries(task).map(([key, value], index) => {
        fields.push(key);
    });

    return fields;
}

class Tasks extends React.Component {

    componentDidMount() {
        this.props.getData({}, 'GET_TASKS');
    }

    render() {
        const fields = this.props.taskObj.tasks && getFields(this.props.taskObj.tasks[0]);
        let fieldsToSend = fields && [fields[1], fields[10], fields[5], fields[7], fields[9]];
        let rows = [];
        this.props.taskObj && this.props.taskObj.tasks && this.props.taskObj.tasks.map((task, index) => {
            let row = [];
            fieldsToSend.map((field, index) => {
                if (field == "loggedTime") {
                    row.push(`${task[field]}h`)
                } else {
                    row.push(task[field])
                }
            })
            rows.push(row)
        })

        return (
            <AppLayout title="Tasks">
                <EditableTable tableHead={fieldsToSend} rows={rows} />
                <Container className="buttons-container">
                    <Button variant="contained" className="primary-buttons">
                        Primary
                    </Button>
                </Container>
            </AppLayout >
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    taskObj: state.taskObj
});

const mapDispatchToProps = {
    getData
};


export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
