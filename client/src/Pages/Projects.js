import React from 'react';
import { connect } from 'react-redux';

import AppLayout from '../shared/AppLayout';
import EditableTable from '../utils/components/EditableTable';

import { getData } from '../actions/CommonActions';

function createData(id, name, startDate, expectedDeliveryDate) {
    return { id, name, startDate, expectedDeliveryDate };
}

function getFields(project) {
    let fields = [];
    Object.entries(project).map(([key, value], index) => {
        fields.push(key);
    });

    return fields;
}

class Projects extends React.Component {

    componentDidMount() {
        this.props.getData({}, 'GET_PROJECTS');
    }

    render() {
        //To do: make the same changes as in projects
        const fields = this.props.projectObj.projects && getFields(this.props.projectObj.projects[0]);
        let fieldsToSend = fields && [fields[0], fields[1], fields[6], fields[7]];
        let rows = [];
        this.props.projectObj && this.props.projectObj.projects && this.props.projectObj.projects.map((project, index) => {
            let row = [];
            fieldsToSend.map((field, index) => {
                row.push(project[field])
            })
            rows.push(row)
        })
        console.log(this.props);
        return (
            <AppLayout title="Projects">
                <div>
                    <EditableTable tableHead={fieldsToSend} rows={rows} />
                </div>
            </AppLayout>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    projectObj: state.projectObj
});

const mapDispatchToProps = {
    getData
};


export default connect(mapStateToProps, mapDispatchToProps)(Projects);
