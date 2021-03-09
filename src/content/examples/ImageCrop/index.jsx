import React, {useCallback, useState, useRef, useEffect} from 'react';
import {Resizable, Movable} from 'webrix/components';
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
    const crop = useRef();
    const movable = useRef();
    const {contain: mContain} = Movable.Constraints;
    const {min, contain: rContain} = Resizable.Constraints;

    const onMove = useCallback(({top, left}) => {
        setPosition(p => ({...p, top, left}));
    }, [setPosition])

    useEffect(() => {
        // Set the crop to the image size initially
        const {width, height, top, left} = image.current.getBoundingClientRect();
        setPosition({width, height, top, left});
    }, [image]);

    return (
        <div className='crop' style={position} ref={crop}>
            <Movable {...Movable.useMove({ref: movable, onMove, constraints: [mContain(image)]})} className='handler' ref={movable}/>
            <Resizable {...Resizable.useResize({ref: crop, onResize: setPosition, constraints: [rContain(image), min(50, 50)]})}>
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