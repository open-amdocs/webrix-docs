import React, {useState} from 'react';
import {usePrevious} from 'webrix/hooks';
import './BasicExample.scss';

export default () => {
    const [value, setValue] = useState('');
    const prevValue = usePrevious(value);
    return (
        <div>
            <input value={value} onChange={e => setValue(e.target.value)}/>
            <p><span>Current Value:</span> {value}</p>
            <p><span>Previous Value:</span> {prevValue}</p>
        </div>
    );
};