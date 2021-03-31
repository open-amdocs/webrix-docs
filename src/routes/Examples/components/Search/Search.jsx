import React from 'react';
import {useHistory} from 'react-router-dom';
import {FaSearch} from 'react-icons/fa';
import './Search.scss';

export default ({value, onChange}) => {
    const history = useHistory();
    const handleOnChange = e => {
        const q = e.target.value.trim().toLowerCase();
        history.push({search: !q ? null : new URLSearchParams({q}).toString()});
        onChange(e.target.value);
    };
    return (
        <div className='search'>
            <FaSearch/>
            <input value={value} onChange={handleOnChange} type='text' placeholder='Search...' />
        </div>
    );
}