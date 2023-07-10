import React from 'react';
import { Para } from './SubTitle.style';

function SubTitle({children}) {
    return (
        <Para>
            {children}
        </Para>
    );
}

export default SubTitle;