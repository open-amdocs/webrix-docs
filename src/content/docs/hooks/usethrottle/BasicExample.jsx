import React, {useCallback, useState} from 'react';
import {useThrottle} from 'webrix/hooks';
import './BasicExample.scss';

export default () => {
    const [raw, setRaw] =  useState(0);
    const [throttled, setThrottled] =  useState(0);
    const handler = useThrottle(useCallback(() => {
        setThrottled(t => t + 1);
    }, [setThrottled]), 500);
    const handleOnMouseMove = useCallback(() => {
        setRaw(r => r + 1);
        handler();
    }, [setRaw, handler]);
    return (
        <div>
            <div className='trigger' onMouseMove={handleOnMouseMove}>Trigger Area</div>
            <p>Raw Events: {raw}</p>
            <p>Throttled Events: {throttled}</p>
        </div>
    );
};
