import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

import './UtilComponent.css';

const _ = require('lodash');


const TextInput = (props) => {

    return (
        <TextField
            size="small"
            className="text-input"
            id={props.id}
            label={props.lalbel}
            variant={props.variant}
            type={props.type}
            error={props.error}
            helperText={props.helperText}
            disabled={props.disabled}
            required={props.required}
            multiline={props.isMultiline}
            rowsMax={props.rowsMax}
            rows={props.rows}
            value={props.value}
            onChange={props.onChange}
            defaultValue={props.defaultValue}
            placeholder={props.placeholder}
        />
    );
}

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    type: PropTypes.oneOf(['string', 'number', 'password']).isRequired,
    variant: PropTypes.oneOf(['standard', 'filled', 'outlined']),
    multiline: PropTypes.bool,
    rowsMax: PropTypes.number,
    rows: PropTypes.number,
    onChange: PropTypes.func,
    helperText: PropTypes.string,
    defaultValue: PropTypes.any,
    placeholder: PropTypes.any,
};

TextInput.defaultProps = {
    id: _.uniqueId(),
    label: "Default label",
    value: "",
    required: false,
    disabled: false,
    error: false,
    type: "string",
    variant: "standard",
    multiline: false,
    rowsMax: 1,
    rows: 1,
    helperText: "",
    defaultValue: "",
    placeholder: ""
};

export default TextInput;