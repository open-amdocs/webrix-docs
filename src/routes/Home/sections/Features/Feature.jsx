import React from 'react';
import './Feature.scss';

const Feature = ({title, icon, children}) => (
    <div className='feature'>
        <div className='icon'>
            {icon}
        </div>
        <h3>{title}</h3>
        {children}
    </div>
);

export default Feature;