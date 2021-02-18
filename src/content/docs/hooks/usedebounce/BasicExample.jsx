import React, {useState, useCallback} from 'react';
import {useDebounce} from 'webrix/hooks';
import './BasicExample.scss';

export default () => {
    const [value, setValue] = useState('');
    const [typing, setTyping] = useState(false);
    const onStopTyping = useDebounce(useCallback(() => setTyping(false), [setTyping]), 500);
    const onStartTyping = useCallback(e => {
        setTyping(true);
        setValue(e.target.value);
        onStopTyping();
    }, [setTyping, onStopTyping, setValue]);

    return (
        <>
            <input placeholder='Type something' value={value} onChange={onStartTyping}/>
            {typing ? 'Typing...' : 'Idle'}
        </>
    );
};