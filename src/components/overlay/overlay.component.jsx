import React from 'react';

import {OverlayContainer} from './overlay.styles';

const Overlay = ({children, ...otherProps}) => (
    <OverlayContainer {...otherProps}>
        {children}
    </OverlayContainer>
);

export default Overlay;