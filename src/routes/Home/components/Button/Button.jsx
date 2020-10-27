import React from 'react';
import './Button.scss';

const Button = ({href, children}) => (
    <a href={href} className='blue-button'>
        {children}
    </a>
);

export default Button;