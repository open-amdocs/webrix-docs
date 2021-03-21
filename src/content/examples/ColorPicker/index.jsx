import React, {useCallback, useState, useEffect, useRef, useMemo} from 'react';
import {Movable} from 'webrix/components';
import {useDimensions} from 'webrix/hooks';
import './style.scss';

const WIDTH = 250;
const {transform, trackpad, update} = Movable.Constraints;
const {clamp} = Movable.Transformers;

const componentToHex = c => {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
};

const rgbToHex = (r, g, b) => (
    '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
);

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
    }, [gradients, ctx, height]);

    return (
        <canvas ref={node => {ctx.current = node?.getContext('2d')}} width={WIDTH} height={height}/>
    )
};

const HueSelector = ({onChange}) => {
    const movable = useRef();
    const ctx = useRef();
    const {width} = useDimensions(movable);
    const [left, setLeft] = useState(0);

    const props = Movable.useMove(useMemo(() => [
        trackpad(movable),
        transform(v => v.left, clamp(0, width - 1)),
        update(next => {
            onChange(ctx.current.getImageData(next, 0, 1, 1).data.slice(0, 3));
            setLeft(next);
        })
    ], [onChange, setLeft, width]));

    return (
        <Movable className='hue-selector' ref={movable} {...props}>
            <div className='pointer' style={{left}}/>
            <GradientCanvas ctx={ctx} height={8} gradients={useMemo(() => [
                [
                    [0, 0, WIDTH, 0],
                    [['red', 0.01], ['#ff0', 0.166], ['lime', 0.333], ['cyan', 0.5], ['blue', 0.666], ['#f0f', 0.833], ['red', 0.99]],
                ],
            ], [])}/>
        </Movable>
    );
}

const ShadeSelector = ({onChange, hue}) => {
    const movable = useRef();
    const ctx = useRef();
    const {width, height} = useDimensions(movable);
    const hex = rgbToHex(...hue);
    const [{top, left}, setPosition] = useState({top: 0, left: 0});

    const props = Movable.useMove(useMemo(() => [
        trackpad(movable),
        transform(({top, left}) => ({
            top: clamp(0, height)(top),
            left: clamp(0, width - 1)(left),
        })),
        update(({top, left}) => {
            onChange(ctx.current.getImageData(left, top, 1, 1).data.slice(0, 3));
            setPosition({top, left});
        })
    ], [onChange, setPosition, width]));

    // Update the shade when the hue changes
    useEffect(() => onChange(ctx.current.getImageData(left, top, 1, 1).data.slice(0, 3)), [hue, left, top, onChange])

    return (
        <Movable className='shade-selector' ref={movable} {...props}>
            <div className='pointer' style={{top, left}}/>
            <GradientCanvas ctx={ctx} height={250} gradients={useMemo(() => [
                [[0, 0, WIDTH, 0], [[hex, 0], [hex, 1]]],
                [[0, 0, WIDTH, 0], [['white', 0.01], ['rgba(255, 255, 255, 0)', 0.99]]],
                [[0, 0, 0, WIDTH], [['rgba(0, 0, 0, 0)', 0.01], ['black', 0.99]]],
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