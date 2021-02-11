import React, {useCallback, useState, useRef, memo} from 'react';
import {Movable} from 'webrix/components';
import img from './image.jpg';
import './style.scss';

const CONTROLS = [
    {name: 'blur', initial: 0, max: 20, suffix: 'px'},
    {name: 'brightness', initial: 100, max: 200, suffix: '%'},
    {name: 'contrast', initial: 100, max: 200, suffix: '%'},
    {name: 'grayscale', initial: 0, max: 100, suffix: '%'},
    {name: 'invert', initial: 0, max: 100, suffix: '%'},
    {name: 'saturate', initial: 100, max: 200, suffix: '%'},
    {name: 'hue-rotate', initial: 0, max: 360, suffix: 'deg'},
    {name: 'sepia', initial: 0, max: 100, suffix: '%'},
];

const INITIAL = CONTROLS.map(({initial}) => initial);

const Slider = memo(({value, onChange, index}) => {
    const {max, name} = CONTROLS[index];
    const width = 150, pad = 8;
    const movable = useRef();
    const left = (value / max) * (width - pad * 2) + pad;
    const {padding} = Movable.Constraints;
    const onMove = useCallback(({left}) => {
        const next = ((left - pad) / (width - pad * 2)) * max;
        onChange(next, index);
    }, [onChange]);
    const props = Movable.useMoveArea({ref: movable, onMove, constraints: [padding(0, pad, 0, pad)]});
    return (
        <div className='slider'>
            <div className='name'>{name}</div>
            <Movable className='track' {...props}>
                <div className='handle' style={{left}}/>
            </Movable>
        </div>
    );
});

const Controls = ({filters, onChange, onReset}) => {
    const handleOnChange = useCallback((value, index) => {
        onChange(current => current.map((v, i) => i === index ? value : v));
    }, [onChange]);
    return (
        <div className='controls'>
            {CONTROLS.map((_, i) => (
                <Slider value={filters[i]} index={i} onChange={handleOnChange}/>
            ))}
            <div className='button' onClick={onReset}>Reset</div>
        </div>
    );
}

const Image = ({filters}) => (
    <div className='image-container'>
        <div
            className='image'
            style={{
                filter: filters.map((value, i) => `${CONTROLS[i].name}(${value}${CONTROLS[i].suffix})`).join(' '),
                backgroundImage: `url(${img})`,
            }}/>
    </div>
)

export default () => {
    const [filters, setFilters] = useState(INITIAL);
    const handleOnReset = useCallback(() => setFilters(INITIAL), [setFilters]);
    return (
        <div className='photo-editor'>
            <Image filters={filters}/>
            <Controls filters={filters} onChange={setFilters} onReset={handleOnReset}/>
            <div className='attribution'>Image courtesy of <a target='_blank' rel='noreferrer' href='https://pixabay.com/users/thuyhabich-6663646/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3192772'>ThuyHaBich</a> from <a target='_blank' rel='noreferrer' href='https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3192772'>Pixabay</a></div>
        </div>
    );
};