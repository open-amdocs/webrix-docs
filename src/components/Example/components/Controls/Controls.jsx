import React from 'react';
import {FaCode, FaCopy, FaPen, FaUndo} from 'react-icons/fa';
import './Controls.scss';

const Controls = ({}) => (
    <div className='controls'>
        <FaPen/>
        <FaCode/>
        <FaCopy/>
        <FaUndo/>
    </div>
);

export default Controls;