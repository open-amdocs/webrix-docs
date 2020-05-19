import React from 'react';
import classNames from 'classnames';
import './HamburgerMenu.scss';

const HamburgerMenu = ({active, onClick}) => (
    <button className={classNames('hamburger', {active})} type='button' onClick={onClick} aria-label='Menu' aria-controls='navigation'>
        <span className='hamburger-box'>
            <span className='hamburger-inner'/>
        </span>
    </button>
);

export default HamburgerMenu;