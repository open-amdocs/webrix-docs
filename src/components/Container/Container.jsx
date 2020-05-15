import React from 'react';
import './Container.scss';

const Container = ({children}) => (
    <div className='container'>
        {children}
    </div>
);

export default Container;