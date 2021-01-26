import React, {useCallback, useState, useRef, useEffect} from 'react';
import {Resizable, Movable} from 'webrix/components';
import img from './image.jpg';
import './style.scss';

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

    const handleOnResize = useCallback(({change}) => {
        setPosition(({top, left, width, height}) => ({
            top: top + change.top,
            left: left + change.left,
            width: width + change.width,
            height: height + change.height,
        }));
    }, [setPosition]);

    const handleOnMove = useCallback(({cx, cy}) => {
        setPosition(p => ({...p, left: p.left + cx, top: p.top + cy}));
        // setValue(() => Math.round((clamp(0, width - 5, x - left) / width) * MAX));
    }, [setPosition]);

    useEffect(() => {
        console.log(image.current.clientWidth);
        const {width, height, top, left} = image.current.getBoundingClientRect();
        setPosition({width, height, top, left});
    }, []);

    return (
        <div className='crop' style={position}>
            <Movable className='movable' onMove={handleOnMove}/>
            <Resizable onResize={handleOnResize}>
                <Resizable.Resizer.All/>
            </Resizable>
            <Circles/>
            <Grid/>
        </div>

    );
};

const Image = () => (
    <div
        className='image'
        style={{backgroundImage: `url(${img})`}}/>
)

export default () => {
    const ref = useRef();
    return (
        <div className='image-crop' ref={ref}>
            <Crop image={ref}/>
            <Image/>
            <div className='attribution'>
                Image courtesy of <a target='_blank' rel='noreferrer' href='https://pixabay.com/users/pexels-2286921/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1850116'>Pexels</a> from <a target='_blank' rel='noreferrer' href='https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1850116'>Pixabay</a>
            </div>
        </div>
    );
};