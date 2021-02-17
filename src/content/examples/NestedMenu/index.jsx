import React, {useRef, useCallback} from 'react';
import classNames from 'classnames';
import {useVisibilityState, useClickOutside} from 'webrix/hooks';
import {Poppable} from 'webrix/components';
import {FaCut, FaCopy, FaEdit, FaFileImport, FaSave, FaTrashAlt, FaTrashRestore} from 'react-icons/fa';
import './style.scss';

const MenuItem = ({title, Icon, children, color}) => {
    const {visible, show, hide} = useVisibilityState();
    const handleOnMouseDownCapture = useClickOutside(useCallback(hide, []));
    const child = children && React.Children.only(children);
    const menuItemRef = useRef();

    return (
        <div className={classNames('menu-item', color ? `color-${color}` : '')} onMouseDownCapture={handleOnMouseDownCapture}
             onClick={show} ref={menuItemRef}>
            <div className='content'>
                {Icon && <Icon/>}
                <span>{title}</span>
            </div>
            {child && <div className='triangle'/>}
            {visible && child && React.cloneElement(child, {reference: menuItemRef})}
        </div>
    );
}

const Divider = () => <div className='menu-item-divider'/>;

const Menu = ({children, reference}) => {
    const {vcenter, hafter} = Poppable.Placements;

    return (
        <Poppable placements={(rbr, tbr) => [{...hafter(rbr, tbr, 11), ...vcenter(rbr, tbr, 50)}]} reference={reference}>
            <div className='menu'>
                {children}
            </div>
        </Poppable>
    );
}
export default () => (
    <Menu reference={new DOMRect((window.innerWidth - 170) / 2 ,(window.innerHeight - 200) / 2, 0 , 0)}>
        <MenuItem title='Edit' Icon={FaEdit}>
            <Menu>
                <MenuItem title='Rename project'/>
                <MenuItem title='Mark as seen'/>
                <MenuItem title='Email notification'/>
                <Divider/>
                <MenuItem title='Purchase'>
                    <Menu>
                        <MenuItem title='First item'/>
                        <MenuItem title='Second item'/>
                        <MenuItem title='Last item'/>
                    </Menu>
                </MenuItem>
            </Menu>
        </MenuItem>
        <MenuItem title='Copy' Icon={FaCopy}/>
        <MenuItem title='Cut' Icon={FaCut}/>
        <MenuItem title='Import tasks' icon={FaFileImport}/>
        <Divider/>
        <MenuItem title='Save as' Icon={FaSave} color='green'/>
        <Divider/>
        <MenuItem title='Restore' Icon={FaTrashRestore} color='salmon'/>
        <MenuItem title='Delete all' Icon={FaTrashAlt} color='pink'/>
    </Menu>
)



