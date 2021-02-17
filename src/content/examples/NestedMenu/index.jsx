import React, {useRef} from 'react';
import cls from 'classnames';
import {useVisibilityState, useClickOutside} from 'webrix/hooks';
import {Poppable} from 'webrix/components';
import {FaCut, FaCopy, FaEdit, FaFileImport, FaSave, FaTrashAlt, FaTrashRestore, FaCaretRight} from 'react-icons/fa';
import './style.scss';

const MenuItem = ({title, icon: Icon, children, color = 'black'}) => {
    const {visible, show, hide} = useVisibilityState();
    const handleOnMouseDownCapture = useClickOutside(hide);
    const child = children && React.Children.only(children);
    const ref = useRef();

    return (
        <div className={cls('menu-item', `color-${color}`, {active: visible})} onMouseDownCapture={handleOnMouseDownCapture}
             onClick={show} ref={ref}>
            {Icon && <Icon/>}
            {title}
            {child && <FaCaretRight className='caret'/>}
            {visible && child && React.cloneElement(child, {reference: ref})}
        </div>
    );
}

const Divider = () => <div className='menu-item-divider'/>;

const Menu = ({children, reference}) => {
    const {vafter, hafter} = Poppable.Placements;

    return (
        <Poppable placements={(rbr, tbr) => [{...hafter(rbr, tbr), ...vafter(rbr, tbr, -34)}]} reference={reference}>
            <div className='menu'>
                {children}
            </div>
        </Poppable>
    );
}
export default () => (
    <Menu reference={new DOMRect((window.innerWidth - 170) / 2 ,(window.innerHeight - 200) / 2, 0 , 0)}>
        <MenuItem title='Edit' icon={FaEdit}>
            <Menu>
                <MenuItem title='Rename Project'/>
                <MenuItem title='Mark As Seen'/>
                <MenuItem title='Email Notification'/>
                <Divider/>
                <MenuItem title='Purchase'>
                    <Menu>
                        <MenuItem title='First Item'/>
                        <MenuItem title='Second Item'/>
                        <MenuItem title='Last Item'/>
                    </Menu>
                </MenuItem>
            </Menu>
        </MenuItem>
        <MenuItem title='Copy' icon={FaCopy}/>
        <MenuItem title='Cut' icon={FaCut}/>
        <MenuItem title='Import tasks' icon={FaFileImport}/>
        <Divider/>
        <MenuItem title='Save as' icon={FaSave} color='green'/>
        <Divider/>
        <MenuItem title='Restore' icon={FaTrashRestore} color='salmon'/>
        <MenuItem title='Delete All' icon={FaTrashAlt} color='pink'/>
    </Menu>
);
