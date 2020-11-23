import React, {useState} from 'react';
import {Collapsible} from 'webrix/components';
import {FaChevronRight} from 'react-icons/fa';
import './BasicExample.scss';

export default () => {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className={`collapsible-item${expanded ? ' expanded' : ''}`}>
            <div className='collapsible-header' onClick={() => setExpanded(!expanded)}><FaChevronRight/>Click Here To Toggle!</div>
            <Collapsible expanded={expanded}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
            </Collapsible>
        </div>
    );
};