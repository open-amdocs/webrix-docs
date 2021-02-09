import React, {useRef, forwardRef, useState, useCallback} from 'react';
import {Poppable, Movable} from 'webrix/components';
import './Container.scss';

const MovableRectangle = forwardRef(({width, height, title}, ref) => {
    const {innerWidth, innerHeight} = window;
    const [{top, left}, setPosition] = useState({top: (innerHeight - height) / 2, left: (innerWidth - width) / 2});

    const handleOnMove = useCallback(({cx, cy}) => {
        setPosition(({top, left}) => ({
            top: top + cy,
            left: left + cx,
        }));
    }, [setPosition]);

    return (
        <Movable
            className={title.toLowerCase()}
            title={title}
            style={{top, left}}
            onBeginMove={handleOnMove}
            onMove={handleOnMove}
            ref={ref}/>
    );
});

export default () => {
    const reference = useRef();
    const container = useRef();
    const getPlacements = rbr => {
        return [
            {top: 100, left: 0},
            {top: 100, left: 100},
            {top: 0, left: 100},
            {top: -100, left: 100},
            {top: -100, left: 0},
            {top: -100, left: -100},
            {top: 0, left: -100},
            {top: 100, left: -100},
        ].map(({top, left}) => ({top: top + rbr.top, left: left + rbr.left}));
    };

    return (
        <>
            <MovableRectangle title='Reference' height={100} width={100} ref={reference}/>
            <MovableRectangle ref={container} width={300} height={300} title='Container'/>
            <Poppable reference={reference} container={container} placements={getPlacements} className='poppable-target'>
                Target
            </Poppable>
        </>
    );
};
