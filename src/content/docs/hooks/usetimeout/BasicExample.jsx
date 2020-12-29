import React, {useState} from 'react';
import {useTimeout} from 'webrix/hooks';
import './BasicExample.scss';

export default () => {
    const [time, setTime] = useState(0);
    const {start, stop} = useTimeout(() => {
        setTime(time => time + 1);
    }, 100, true);
    return (
        <>
            <div>
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
            </div>
            <p><span>Timer:</span> {time}</p>
        </>
    );
};