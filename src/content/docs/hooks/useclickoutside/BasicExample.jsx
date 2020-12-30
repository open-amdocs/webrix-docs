import React, {useState, useCallback} from 'react';
import {useClickOutside} from 'webrix/hooks';
import './BasicExample.scss';

export default () => {
    const [inside, setInside] = useState(null);
    const handleOnClickOutside = useCallback(() => setInside(false), [setInside]);
    const handleOnMouseDownCapture = useClickOutside(handleOnClickOutside)
    return (
        <div onMouseDownCapture={handleOnMouseDownCapture} onClick={() => setInside(true)}>
            {inside === null && 'Click Anywhere'}
            {inside === false && 'Outside'}
            {inside === true && 'Inside'}
        </div>
    );
};