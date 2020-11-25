import React, {useState, useCallback, useRef} from 'react';
import {Stackable} from 'webrix/components';
import './Ancestors.scss';

export default () => {
    const ref = useRef();
    const [ancestors, setAncestors] = useState('(Click on a Stackable)');
    const handleOnClick = useCallback(e => {
        setAncestors(Stackable.getAncestors(e.target));
    }, [setAncestors]);
    return (
        <div ref={ref} className='container'>
            React Components Path: {ancestors}
            <Stackable className='stacking' onClick={handleOnClick} parent={ref}>
                <Stackable className='stacking' onClick={handleOnClick}>
                    <Stackable className='stacking' onClick={handleOnClick}/>
                </Stackable>
            </Stackable>
        </div>
    );
};