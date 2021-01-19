import React, {useCallback, useState, useRef} from 'react';
import cls from 'classnames';
import {Movable} from 'webrix/components';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import './style.scss';

const clamp = (min, max, value) => Math.min(Math.max(value, min), max);

const Resizer = ({orientation, onResize}) => {
    const movable = useRef();
    const handleOnMove = useCallback(({x, y}) => {
        onResize(orientation === 'row' ? x : y);
    }, [onResize, orientation]);
    return (
        <Movable ref={movable} onMove={handleOnMove} className={cls('resizer', orientation)}/>
    );
};

const Image = ({size, src}) => (
    <div className='image' style={{flexBasis: `${size * 100}%`, backgroundImage: `url(${src})`}}/>
);

const Collage = ({children, size, orientation}) => {
    const [sizes, setSizes] = useState(React.Children.map(children, child => child.props.size));
    const ref = useRef();
    const handleOnResize = position => {
        const {left, top, width, height} = ref.current.getBoundingClientRect();
        const offset = orientation === 'row' ? left : top;
        const length = orientation === 'row' ? width : height;
        const sizepx = clamp(50, length - 50, position - offset);
        const size = sizepx / length;
        setSizes([size, 1 - size]);
    }
    return (
        <div className='collage' style={{flexDirection: orientation, flexBasis: `${size * 100}%`}} ref={ref}>
            {React.Children.map(children, (child, i) => (
                <>
                    {i > 0 && <Resizer orientation={orientation} onResize={handleOnResize}/>}
                    {React.cloneElement(child, {size: sizes[i]})}
                </>
            ))}
        </div>
    );
};

export default () => (
    <div className='collage-maker'>
        <Collage orientation='row' size={1}>
            <Image size={0.5} src={img1}/>
            <Collage orientation='column' size={0.5}>
                <Image size={0.5} src={img2}/>
                <Image size={0.5} src={img3}/>
            </Collage>
        </Collage>
    </div>
);