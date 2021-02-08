import React from 'react';
import cls from 'classnames';
import './Button.scss';

export default ({active, onClick}) => (
    <button className={cls('hamburger', {active})} type='button' onClick={onClick} aria-label='Menu' aria-controls='navigation'>
        <span className='hamburger-box'>
            <span className='hamburger-inner'/>
        </span>
    </button>
);