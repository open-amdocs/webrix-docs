import React, {useRef, useCallback, useContext, forwardRef, useState} from 'react';
import {Poppable, Movable} from 'webrix/components';
import './Context.scss';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const isEmpty = o => JSON.stringify(o) === '{}';

const MovableRectangle = forwardRef(({width, height, title}, ref) => {
    const {innerWidth, innerHeight} = window;
    const [{top, left}, setPosition] = useState({top: (innerHeight - 200) / 2, left: (innerWidth - width) / 2});

    const handleOnMove = useCallback(({cx, cy}) => {
        setPosition(({top, left}) => ({
            top: clamp(top + cy, 0, innerHeight - height),
            left: clamp(left + cx, 0 , innerWidth - width),
        }));
    }, [setPosition]);

    return (
        <Movable
            className={`movable ${title.toLowerCase()}`}
            title={title}
            style={{top, left}}
            onBeginMove={handleOnMove}
            onMove={handleOnMove}
            ref={ref}/>
    );
});

const Triangle = () => {
    const {tbr} = useContext(Poppable.Context);
    const SIZE = 20;
    return !isEmpty(tbr) && <div className='triangle' style={{top: tbr.top - SIZE, left: tbr.left + (tbr.width - SIZE) / 2}}/>;
};

export default () => {
    const reference = useRef();
    const {vafter, hcenter} = Poppable.Placements;
    const getPlacements = useCallback((rbr, tbr) => [{
        ...vafter(rbr, tbr, 10),
        ...hcenter(rbr, tbr),
    }], []);

    return (
        <>
            <MovableRectangle title='Reference' height={100} width={100} ref={reference}/>
            <Poppable reference={reference} placements={getPlacements} className='poppable-target'>
                <Triangle/>
                Target
            </Poppable>
        </>
    );
};