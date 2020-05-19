import React, {useState, useCallback} from 'react';
import classNames from 'classnames';
import './HamburgerMenu.scss';

const HamburgerMenu = () => {
    const [active, setActive] = useState(false);
    const handleOnClick = useCallback(() => {
        setActive(!active);
    }, [setActive, active]);
    return (
        <button className={classNames('hamburger', {active})} type='button' onClick={handleOnClick} aria-label='Menu' aria-controls='navigation'>
            <span className='hamburger-box'>
                <span className='hamburger-inner'/>
            </span>
        </button>
    );
};

export default HamburgerMenu;