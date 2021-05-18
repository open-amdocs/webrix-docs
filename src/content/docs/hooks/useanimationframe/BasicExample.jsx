import React, {useState} from 'react';
import {useAnimationFrame} from 'webrix/hooks';
import './BasicExample.scss';

export default () => {
    const [counter, setCounter] = useState(0);
    const {start, stop} = useAnimationFrame(() => {
        setCounter(time => time + 1);
    }, true);
    return (
        <>
            <div>
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
            </div>
            <p><span>Counter:</span> {counter}</p>
        </>
    );
};