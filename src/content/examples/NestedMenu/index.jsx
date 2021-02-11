import React, {forwardRef, useRef, memo, useCallback} from 'react';
import classNames from 'classnames';
import {useVisibilityState, useClickOutside} from 'webrix/hooks';
import {Poppable} from 'webrix/components';
import {FaCut, FaCopy, FaEdit, FaFileImport, FaSave, FaTrashAlt, FaTrashRestore} from 'react-icons/fa';
import './style.scss';

const menuItems = [[{name: 'Edit', icon: FaEdit, showSubmenu: true},
                   {name: 'Copy', icon: FaCopy},
                   {name: 'Cut', icon: FaCut},
                   {name: 'Import tasks', icon: FaFileImport},
                   {name: '', divider: true},
                   {name: 'Save as', icon: FaSave, color: 'green'},
                   {name: '', divider: true},
                   {name: 'Restore', icon: FaTrashRestore, color: 'salmon'},
                   {name: 'Delete all', icon: FaTrashAlt, color: 'pink'}],
                   [{name: 'Rename project'}, {name: 'Mark as seen'}, {name: 'Email notification'}, {name: 'Purchase', showSubmenu: true}],
                   [{name: 'First item', showSubmenu: true}, {name: 'Second item'}, {name: 'Last item'}],
];

const MenuItem = forwardRef(({text, Icon, showTriangle, toggle, color}, ref) => (
    text ?
        (<div className={classNames('menu-item', color ? `color-${color}`: '')}>
            <div className='content'>
                {Icon && <Icon/>}
            <span>{text}</span>
            </div>
            {showTriangle && <div className='triangle' onClick={toggle} ref={ref}></div>}
        </div>) :
        (<div className='menu-item-divider'/>)
));

const SubMenu = ({counter = 0}) => {
    const {visible, toggle, hide} = useVisibilityState();
    const handleOnMouseDownCapture = useClickOutside(useCallback(hide, []));
    const subMenuRef = useRef();
    const {vcenter, hafter} = Poppable.Placements;

    return (
        <div className='menu' onMouseDownCapture={handleOnMouseDownCapture}>
            {visible &&
            <Poppable placements={(rbr, tbr) => [{...hafter(rbr, tbr, 11), ...vcenter(rbr, tbr, 50)}]} reference={subMenuRef}>
                <SubMenu counter={counter + 1}/>
            </Poppable>
            }
            {menuItems[counter].map(({name, icon, showSubmenu, color}, index) =>
                <MenuItem key={index} Icon={icon} text={name} toggle={showSubmenu && toggle} ref={showSubmenu && subMenuRef}
                          showTriangle={showSubmenu && counter < 2} color={color}/>)}
        </div>

    );
}

export default memo(SubMenu);



