import React from 'react';
import './Button.scss';

const Button = ({children, size, ...props}) => (
    <div className={`button size-${size}`} {...props}>{children}</div>
);

export default Button;