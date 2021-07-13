import React, {useState} from 'react';
import {useClickOutside} from 'webrix/hooks';
import './BasicExample.scss';

export default () => {
    const [inside, setInside] = useState(null);
    const handleOnMouseDownCapture = useClickOutside(() => setInside(false))
    return (
        <div onMouseDownCapture={handleOnMouseDownCapture} onClick={() => setInside(true)}>
            {inside === null && 'Click Anywhere'}
            {inside === false && 'Outside'}
            {inside === true && 'Inside'}
        </div>
    );
};