import React from 'react';

import {SpinnerOverlay, SpinnerContainer} from './spinner.styles';

const Spinner = ({bigger}) => (
    <SpinnerOverlay>
        <SpinnerContainer bigger={bigger}/>
    </SpinnerOverlay>
);

export default Spinner;