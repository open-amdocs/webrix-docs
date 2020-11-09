import React from 'react';
import src from '../../resources/images/under-construction.png';
import './UnderConstruction.scss';

export default () => (
    <div className='under-construction'>
        <img src={src} alt='Under Construction Sign' loading='lazy'/>
        This page is still under construction. <br/>
        Come back soon!
    </div>
);