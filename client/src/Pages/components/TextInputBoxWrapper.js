import React from 'react';
import Box from '@material-ui/core/Box';

import TextInput from '../../utils/components/TextInput';

import '../Pages.css';

const TextInputBoxWrapper = (props) => {
    return (
        <Box width={250} className="box-wrapper">
            <TextInput
                {...props}
            />
        </Box>
    );
}


export default TextInputBoxWrapper;