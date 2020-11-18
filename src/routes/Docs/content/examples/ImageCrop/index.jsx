import React, {useCallback, useState} from 'react';
import {Resizable, Movable} from 'webrix';
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

const Crop = () => {
    const INITIAL = {top: (window.innerHeight - 280) / 2, left: (window.innerWidth - 440) / 2, width: 440, height: 280};
    const [position, setPosition] = useState(INITIAL);

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
    return (
        <div className='image-crop'>
            <Crop/>
            <Image/>
            <div className='attribution'>
                Image courtesy of <a target='_blank' rel='noreferrer' href='https://pixabay.com/users/pexels-2286921/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1850116'>Pexels</a> from <a target='_blank' rel='noreferrer' href='https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1850116'>Pixabay</a>
            </div>
        </div>
    );
};