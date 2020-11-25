import React, {useState} from 'react';
import {Collapsible} from 'webrix/components';
import {FaChevronRight} from 'react-icons/fa';
import './Nesting.scss';

const CollapsibleItem = ({children, title, expanded: _expanded}) => {
    const [expanded, setExpanded] = useState(_expanded);
    return (
        <div className={`collapsible-item${expanded ? ' expanded' : ''}`}>
            <div className='collapsible-header' onClick={() => setExpanded(!expanded)}><FaChevronRight/>{title}</div>
            <Collapsible expanded={expanded}>
                {children}
            </Collapsible>
        </div>
    );
}

export default () => {
    return (
        <CollapsibleItem title='Parent' expanded>
            <CollapsibleItem title='Child 1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </CollapsibleItem>
            <CollapsibleItem title='Child 2'>
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </CollapsibleItem>
            <CollapsibleItem title='Child 3'>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
            </CollapsibleItem>
        </CollapsibleItem>
    );
};