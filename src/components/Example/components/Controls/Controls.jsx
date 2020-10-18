import React, {useCallback, memo} from 'react';
import {FaCode, FaCopy, FaUndo} from 'react-icons/fa';
import Sandboxer from '../Sandboxer/Sandboxer';
import './Controls.scss';

const Controls = ({code, id, toggle}) => {
    const handleOnCodeClick = useCallback(e => {
        e.preventDefault();
        toggle();
    }, [toggle]);
    return (
        <div className='controls'>
            <Sandboxer code={code} id={id}/>
            <FaCode onClick={handleOnCodeClick}/>
            <FaCopy/>
            <FaUndo/>
        </div>
    );
}

export default memo(Controls);