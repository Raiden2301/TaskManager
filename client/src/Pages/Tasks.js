import React from 'react';
import { connect } from 'react-redux';

import AppLayout from '../shared/AppLayout';
import EditableTable from '../utils/components/EditableTable';

import { getData } from '../actions/CommonActions';

function createData(name, status, startDate, expectedDeliveryDate, loggedTime) {
    return { name, status, startDate, expectedDeliveryDate, loggedTime };
}

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
                row.push(task[field])
            })
            rows.push(row)
        })
        return (
            <AppLayout title="Tasks">
                <div>
                    <EditableTable tableHead={fieldsToSend} rows={rows} />
                </div>
            </AppLayout>
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
