import React, {useCallback, useState, useRef, useEffect} from 'react';
import {Resizable, Movable} from 'webrix/components';
import './style.scss';

const clamp = (rect, min, max, delta) => {
    const width = Math.max(Math.min(rect.width, delta.left !== 0 ? rect.left + rect.width - max.left : max.right - rect.left), min.width);
    const height = Math.max(Math.min(rect.height, delta.top !== 0 ? rect.top + rect.height - max.top : max.bottom - rect.top), min.height);
    const left = Math.min(Math.max(rect.left, max.left), max.right - width);
    const top = Math.min(Math.max(rect.top, max.top), max.bottom - height);
    return {width, height, top, left};
};

const add = (rect, delta) => ({
    top: rect.top + delta.top,
    left: rect.left + delta.left,
    width: rect.width + delta.width,
    height: rect.height + delta.height,
});

const Grid = () => (
    <div className='grid'>
        {[...new Array(4)].map((_, i) => (
            <div key={i} className='grid-line'/>
        ))}
    </div>
);

const Circles = () => (
    <div className='circles'>
        {[...new Array(8)].map((_, i) => (
            <div key={i} className='circle'/>
        ))}
    </div>
);

const Crop = ({image}) => {
    const [position, setPosition] = useState({});
    const crop = useRef();
    const max = useRef({});
    const initial = useRef({});

    const handleOnBeginResize = useCallback(a => {
        initial.current = crop.current.getBoundingClientRect()
    }, []);

    const handleOnResize = useCallback(({delta}) => {
        setPosition(clamp(
            add(initial.current, delta),
            {width: 0, height: 0},
            max.current,
            delta,
        ));
    }, [setPosition]);

    const handleOnMove = useCallback(({cx, cy}) => {
        setPosition(p => {
            const delta = new DOMRect(cx, cy, p.width, p.height);
            return clamp({...p, left: p.left + cx, top: p.top + cy}, {width: p.width, height: p.height}, max.current, delta)
        });
    }, [setPosition]);

    useEffect(() => {
        const {width, height, top, left} = image.current.getBoundingClientRect();
        setPosition({width, height, top, left});
        max.current = new DOMRect(left, top, width, height);
    }, []);

    return (
        <div className='crop' style={position} ref={crop}>
            <Movable className='movable' onMove={handleOnMove}/>
            <Resizable onResize={handleOnResize} onBeginResize={handleOnBeginResize}>
                <Resizable.Resizer.All/>
            </Resizable>
            <Circles/>
            <Grid/>
        </div>

    );
};

export default () => {
    const ref = useRef();
    return (
        <div className='image-crop' ref={ref}>
            <Crop image={ref}/>
            <div className='image'/>
            <div className='attribution'>
                Image courtesy of <a target='_blank' rel='noreferrer' href='https://pixabay.com/users/pexels-2286921/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1850116'>Pexels</a> from <a target='_blank' rel='noreferrer' href='https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1850116'>Pixabay</a>
            </div>
        </div>
    );
};