import React, {useMemo, useCallback, useState, useRef, memo} from 'react';
import {Movable} from 'webrix/components';
import {useDimensions} from 'webrix/hooks';
import './style.scss';

const {transform, trackpad, update} = Movable.Operations;
const {map, clamp} = Movable.Transformers;

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
    const pad = 8;
    const movable = useRef();
    const {width} = useDimensions(movable);
    const left = map(0, max, pad, width - pad)(value);

    const props = Movable.useMove(useMemo(() => [
        trackpad(movable),
        transform(v => v.left, clamp(pad, width - pad), map(pad, width - pad, 0, max)),
        update(v => onChange(v, index)),
    ], [onChange, width, pad, max, index]));

    return (
        <div className='slider'>
            <div className='name'>{name}</div>
            <Movable className='track' ref={movable} {...props}>
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
                <Slider value={filters[i]} index={i} key={i} onChange={handleOnChange}/>
            ))}
            <div className='button' onClick={onReset}>Reset</div>
        </div>
    );
};

const Image = ({filters}) => (
    <div className='image-container'>
        <div
            className='image'
            style={{
                filter: filters.map((value, i) => `${CONTROLS[i].name}(${value}${CONTROLS[i].suffix})`).join(' '),
            }}/>
    </div>
);

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