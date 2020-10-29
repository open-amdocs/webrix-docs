import React, {useCallback, memo} from 'react';
import {FaCode, FaCopy, FaUndo} from 'react-icons/fa';
import Sandboxer from '../Sandboxer/Sandboxer';
import './Controls.scss';

const Controls = ({code, style, toggle, reset}) => {
    const handleOnCodeClick = useCallback(e => {
        e.preventDefault();
        toggle();
    }, [toggle]);
    return (
        <div className='controls'>
            <Sandboxer code={code} style={style}/>
            <FaCode onClick={handleOnCodeClick}/>
            <FaCopy/>
            <FaUndo onClick={reset}/>
        </div>
    );
}

export default memo(Controls);