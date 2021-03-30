import React from 'react';
import {FaSearch} from 'react-icons/fa';
import './Search.scss';

export default ({value, onChange}) => {
    const handleOnChange = e => {
        onChange(e.target.value);
    };
    return (
        <div className='search'>
            <FaSearch/>
            <input value={value} onChange={handleOnChange} type='text' placeholder='Search...' />
        </div>
    );
}