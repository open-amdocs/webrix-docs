import React, {useState} from 'react';
import {Scrollable} from 'webrix/components';
import './CustomElement.scss';

export default () => {
    const [value, setValue] = useState('This is a text area.\nYou can edit this content.');
    return (
        <Scrollable element={<textarea value={value} onChange={e => setValue(e.target.value)}/>}/>
    );
}