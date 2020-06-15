import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton'

import { deleteById } from '../../actions/CommonActions'


import Grid from '@material-ui/core/Grid';

import '../Pages.css'

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

const TODOItem = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <ExpansionPanel>
                <Grid container spacing={0}>
                    <Grid item xs={11}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-label="Expand"
                            aria-controls="additional-actions1-content"
                            id="additional-actions1-header"
                        >
                            <FormControlLabel
                                aria-label="Acknowledge"
                                onClick={(event) => {
                                    event.stopPropagation()
                                }}
                                // onFocus={(event) => event.stopPropagation()}
                                control={<Checkbox
                                    color="primary"
                                    checked={props.checked}
                                    onChange={(event) => { props.onChange(event, props.todo) }}
                                />}
                                label={props.todo.name}
                            />
                        </ExpansionPanelSummary>
                    </Grid>
                    <Grid item xs={1}>
                        <div className="deleteIcon">
                            <IconButton
                                onClick={() => {
                                    props.deleteById('DELETE_TODO_BY_ID', props.todo.id)
                                }}
                            >
                                <DeleteIcon />
                            </IconButton>

                        </div>
                    </Grid>
                </Grid>
                <ExpansionPanelDetails>
                    <Typography color="textSecondary">
                        {props.todo.description}
                    </Typography>
                </ExpansionPanelDetails>

            </ExpansionPanel>



        </div>
    );
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
    deleteById
};

export default connect(mapStateToProps, mapDispatchToProps)(TODOItem);

