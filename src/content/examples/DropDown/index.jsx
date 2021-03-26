import React, {useCallback, useState, useRef} from 'react';
import {FaCaretDown} from 'react-icons/fa';
import cls from 'classnames';
import {Poppable} from 'webrix/components';
import {useVisibilityState, useDimensions, ClickOutside} from 'webrix/hooks';
import './style.scss';

const {vafter, hcenter, vbefore} = Poppable.Placements;
const GAP = 8;

const DropDown = ({value, onChange, placeholder, children}) => {
    const ref = useRef();
    const {width} = useDimensions(ref);
    const {visible, toggle, hide} = useVisibilityState();
    const placements = useCallback((rbr, tbr) => [
        {...hcenter(rbr, tbr), ...vafter(rbr, tbr, GAP)}, // Bottom
        {...hcenter(rbr, tbr), ...vbefore(rbr, tbr, -GAP)}, // Top
    ], []);
    const handleOnClickOutside = useCallback(e => {
        if (!e.target.closest('.dropdown-menu')) {
            hide();
        }
    }, [hide]);

    return (
        <>
            <ClickOutside onClickOutside={handleOnClickOutside}>
                <div tabIndex={1} className={cls('dropdown', {open: visible})} onClick={toggle} ref={ref}>{value || placeholder}<FaCaretDown/></div>
            </ClickOutside>
            {visible && <Poppable placements={placements} reference={ref}>
                <div className='dropdown-menu' style={{width}}>
                    {React.Children.toArray(children).map(child => (
                        React.cloneElement(child, {onChange, hide, active: value === child.props.value})
                    ))}
                </div>
            </Poppable>}
        </>
    );
};

DropDown.Item = ({value, onChange, hide, active, children}) => {
    const handleOnClick = () => {
        onChange(value);
        hide();
    }
    return (
        <div className={cls('dropdown-item', {active})} onClick={handleOnClick}>{children}</div>
    );
};

export default () => {
    const [value, setValue] = useState();

    return (
        <DropDown value={value} onChange={setValue} placeholder='Select...'>
            <DropDown.Item value='Movable'>Movable</DropDown.Item>
            <DropDown.Item value='Poppable'>Poppable</DropDown.Item>
            <DropDown.Item value='Resizable'>Resizable</DropDown.Item>
            <DropDown.Item value='Collapsible'>Collapsible</DropDown.Item>
            <DropDown.Item value='Scalable'>Scalable</DropDown.Item>
        </DropDown>
    );
};