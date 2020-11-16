import React, {useCallback, useState, useEffect, useRef, useMemo} from 'react';
import {Movable} from 'webrix';
import './style.scss';

const WIDTH = 250;

const componentToHex = c => {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}

const rgbToHex = (r, g, b) => (
    '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
);

const clamp = (min, max, value) => Math.min(Math.max(value, min), max);

const GradientCanvas = ({ctx, height, gradients}) => {

    useEffect(() => {
        gradients.forEach(([orientation, gradient]) => {
            const grd = ctx.current.createLinearGradient(...orientation);
            gradient.forEach(([color, offset]) => (
                grd.addColorStop(offset, color)
            ));
            ctx.current.fillStyle = grd;
            ctx.current.fillRect(0, 0, WIDTH, height);
        });
    }, [gradients]);

    return (
        <canvas ref={node => {ctx.current = node?.getContext('2d')}} width={WIDTH} height={height}/>
    )
};

const HueSelector = ({onChange}) => {
    const movable = useRef();
    const ctx = useRef();
    const [left, setLeft] = useState(0);

    const handleOnMove = useCallback(({x}) => {
        const {left} = movable.current.getBoundingClientRect();
        onChange(ctx.current.getImageData(x - left, 0, 1, 1).data.slice(0, 3));
        setLeft(clamp(0, 240, x - left));
    }, [setLeft, onChange]);

    return (
        <Movable className='hue-selector' onBeginMove={handleOnMove} onMove={handleOnMove} ref={movable}>
            <div className='pointer' style={{left}}/>
            <GradientCanvas ctx={ctx} height={8} gradients={useMemo(() => [
                [
                    [0, 0, WIDTH, 0],
                    [['red', 0], ['#ff0', 0.17], ['lime', 0.33], ['cyan', 0.5], ['blue', 0.66], ['#f0f', 0.83], ['red', 1]],
                ],
            ], [])}/>
        </Movable>
    );
}

const ShadeSelector = ({onChange, hue}) => {
    const movable = useRef();
    const ctx = useRef();
    const hex = rgbToHex(...hue);
    const [{top, left}, setPosition] = useState({top: 0, left: 0});

    const handleOnMove = useCallback(({x, y}) => {
        const {top, left, width} = movable.current.getBoundingClientRect();
        onChange(ctx.current.getImageData(x - left, y - top, 1, 1).data.slice(0, 3));
        setPosition({
            top: clamp(0, width - 7, y - top),
            left: clamp(0, width - 7, x - left),
        });
    }, [setPosition]);

    return (
        <Movable className='shade-selector' onBeginMove={handleOnMove} onMove={handleOnMove} ref={movable}>
            <div className='pointer' style={{top, left}}/>
            <GradientCanvas ctx={ctx} height={250} gradients={useMemo(() => [
                [[0, 0, WIDTH, 0], [[hex, 0], [hex, 1]]],
                [[0, 0, WIDTH, 0], [['white', 0], ['transparent', 1]]],
                [[0, 0, 0, WIDTH], [['transparent', 0], ['black', 1]]],
            ], [hex])}/>
        </Movable>
    );
};

const InfoBox = ({rgb}) => (
    <div className='info-box'>
        <div title='Hex'>{rgbToHex(...rgb)}</div>
        <div title='R'>{rgb[0]}</div>
        <div title='G'>{rgb[1]}</div>
        <div title='B'>{rgb[2]}</div>
    </div>
);

export default () => {
    const [{shade, hue}, update] = useState({hue: [255,0,0], shade: [0,0,0]});
    const updateHue = useCallback(hue => update(c => ({...c, hue})), [update]);
    const updateShade = useCallback(shade => update(c => ({...c, shade})), [update]);
    return (
        <div className='color-picker'>
            <ShadeSelector hue={hue} onChange={updateShade}/>
            <HueSelector onChange={updateHue}/>
            <InfoBox rgb={shade}/>
        </div>
    );
};