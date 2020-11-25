import React, {useCallback, useState, useRef} from 'react';
import {Movable} from 'webrix/components';
import img from './image.jpg';
import './style.scss';

const DEFAULTS = [
    ['blur', '0px'],
    ['brightness', '100%'],
    ['contrast', '100%'],
    ['grayscale', '0%'],
    ['invert', '0%'],
    ['saturate', '100%'],
    ['hue-rotate', '0deg'],
    ['sepia', '0%'],
];

const clamp = (min, max, value) => Math.min(Math.max(value, min), max);

const Slider = ({value, onChange, index, suffix, max}) => {
    const width = 150;
    const movable = useRef();
    const name = value[index][0];
    const left = (parseInt(value[index][1].replace(suffix, '')) / max) * width;

    const handleOnMove = useCallback(({x}) => {
        const {left} = movable.current.getBoundingClientRect();
        onChange(value => {
            const next = (clamp(0, width - 5, x - left) / width) * max;
            const copy = [...value];
            copy[index] = [name, `${next}${suffix}`];
            return copy;
        });
    }, [onChange]);

    return (
        <div className='slider'>
            <div className='name'>{name}</div>
            <Movable className='track' ref={movable} onBeginMove={handleOnMove} onMove={handleOnMove}>
                <div className='handle' style={{left}}/>
            </Movable>
        </div>
    );
};

const Controls = ({filters, onChange, onReset}) => {

    return (
        <div className='controls'>
            <Slider value={filters} index={0} max={20} suffix='px' onChange={onChange}/>
            <Slider value={filters} index={1} max={200} suffix='%' onChange={onChange}/>
            <Slider value={filters} index={2} max={200} suffix='%' onChange={onChange}/>
            <Slider value={filters} index={3} max={100} suffix='%' onChange={onChange}/>
            <Slider value={filters} index={4} max={100} suffix='%' onChange={onChange}/>
            <Slider value={filters} index={5} max={200} suffix='%' onChange={onChange}/>
            <Slider value={filters} index={6} max={360} suffix='deg' onChange={onChange}/>
            <Slider value={filters} index={7} max={100} suffix='%' onChange={onChange}/>
            <div className='button' onClick={onReset}>Reset</div>
        </div>
    );
}

const Image = ({filters}) => (
    <div className='image-container'>
        <div
            className='image'
            style={{
                filter: filters.map(([name, value]) => `${name}(${value})`).join(' '),
                backgroundImage: `url(${img})`,
            }}/>
    </div>
)

export default () => {
    const [filters, setFilters] = useState(DEFAULTS);
    const handleOnReset = useCallback(() => setFilters(DEFAULTS), [setFilters]);
    return (
        <div className='photo-editor'>
            <Image filters={filters}/>
            <Controls filters={filters} onChange={setFilters} onReset={handleOnReset}/>
            <div className='attribution'>Image courtesy of <a target='_blank' rel='noreferrer' href='https://pixabay.com/users/thuyhabich-6663646/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3192772'>ThuyHaBich</a> from <a target='_blank' rel='noreferrer' href='https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3192772'>Pixabay</a></div>
        </div>
    );
};