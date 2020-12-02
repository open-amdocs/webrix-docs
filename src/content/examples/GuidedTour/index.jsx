import React, {forwardRef, useRef, useCallback, useEffect, useState} from 'react';
import cls from 'classnames';
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa';
import {Poppable} from 'webrix/components';
import './style.scss';

const TRIANGLE_SIZE = 10, BOXES = 4;

const Popup = ({children, reference}) => {
    const {vbefore, vafter, hcenter} = Poppable.Placements;
    const placements = useCallback((rbr, tbr) => [
        {...vbefore(rbr, tbr, -TRIANGLE_SIZE), ...hcenter(rbr, tbr)}, // Top
        {...vafter(rbr, tbr, TRIANGLE_SIZE), ...hcenter(rbr, tbr)}, // Bottom
    ], []);
    return (
        <Poppable className='popup' placements={placements} reference={reference}>
            {children}
            <Poppable.Triangle size={TRIANGLE_SIZE}/>
        </Poppable>
    );
};

const SkeletonBox = forwardRef((_, ref) => (
    <div className='skeleton-box' ref={ref}/>
));

const Dimmer = ({target}) => {
    const ref = useRef();
    useEffect(() => {
        const {top, left, width, height} = target.current.getBoundingClientRect();
        ref.current.style.top = `${top}px`;
        ref.current.style.left = `${left}px`;
        ref.current.style.width = `${width}px`;
        ref.current.style.height = `${height}px`;
    }, [target.current])
    return (
        <div className='dimmer' ref={ref}/>
    );
};

const Controls = ({active, onChange}) => {
    const increment = useCallback(() => onChange(active => active + 1), [onChange]);
    const decrement = useCallback(() => onChange(active => active - 1), [onChange]);
    return (
        <div className='controls'>
            <FaChevronLeft onClick={decrement} className={cls({visible: active > 0})}/>
            <div className='circles'>
                {[...new Array(BOXES)].map((_, i) => (
                    <div className={cls('circle', {active: active === i})} key={i}/>
                ))}
            </div>
            <FaChevronRight onClick={increment} className={cls({visible: active < BOXES - 1})}/>
        </div>
    );
}

export default () => {
    const refs = [...new Array(BOXES)].map(() => useRef());
    const [active, setActive] = useState(0);
    return (
        <div className='boxes'>
            <Popup reference={refs[active]}>
                <h3>Step {active + 1}</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                <Controls active={active} onChange={setActive}/>
            </Popup>
            <Dimmer target={refs[active]}/>
            {[...new Array(BOXES)].map((_, i) => (
                <SkeletonBox key={i} ref={refs[i]}/>
            ))}
        </div>
    );
};