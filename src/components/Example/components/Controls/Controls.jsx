import React, {useCallback, memo, useRef} from 'react';
import {FaCode, FaCopy, FaUndo} from 'react-icons/fa';
import Sandboxer from '../Sandboxer/Sandboxer';
import './Controls.scss';

const Controls = ({code, style, toggle, reset}) => {
    const tooltip = useRef();
    const active = useRef();
    const handleOnCodeClick = useCallback(e => {
        e.preventDefault();
        toggle();
    }, [toggle]);
    const handleOnMouseMove = e => {
        if (e.target.tagName === 'svg' && active.current !== e.target) {
            active.current = e.target;
            tooltip.current.innerText = e.target.getAttribute('data-title');
            tooltip.current.classList.add('visible');
        }
    }
    const handleOnMouseLeave = e => {
        tooltip.current.classList.remove('visible');
        active.current = null;
    }
    return (
        <div className='controls' onMouseMove={handleOnMouseMove} onMouseLeave={handleOnMouseLeave}>
            <Sandboxer code={code} style={style}/>
            <FaCode onClick={handleOnCodeClick} data-title='Show Source'/>
            <FaCopy data-title='Copy Source'/>
            <FaUndo onClick={reset} data-title='Reset'/>
            <div className='tooltip' ref={tooltip}/>
        </div>
    );
}

export default memo(Controls);