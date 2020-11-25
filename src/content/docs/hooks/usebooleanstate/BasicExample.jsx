import React from 'react';
import {useVisibilityState} from 'webrix/hooks';
import './BasicExample.scss';

export default () => {
    const {visible, show, hide, toggle} = useVisibilityState(true);
    return (
        <div>
            {visible && <div className='box'/>}
            <div className='controls'>
                <div onClick={show}>Show</div>
                <div onClick={hide}>Hide</div>
                <div onClick={toggle}>Toggle</div>
            </div>
        </div>
    );
};