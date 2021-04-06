import React, {useCallback, useRef} from 'react';
import {Poppable} from 'webrix/components';
import {useVisibilityState} from 'webrix/hooks';
import './style.scss';

const TRIANGLE_SIZE = 5;
const {vbefore, vafter, vcenter, hbefore, hafter, hcenter} = Poppable.Placements;

const Tooltip = ({reference, placement, text}) => {
    const getPlacements = useCallback((rbr, tbr) => [
        {...vbefore(rbr, tbr, -TRIANGLE_SIZE), ...hcenter(rbr, tbr)}, // Top
        {...vafter(rbr, tbr, TRIANGLE_SIZE), ...hcenter(rbr, tbr)}, // Bottom
        {...vcenter(rbr, tbr), ...hbefore(rbr, tbr, -TRIANGLE_SIZE)}, // Left
        {...vcenter(rbr, tbr), ...hafter(rbr, tbr, TRIANGLE_SIZE)}, // Right
    ], []);
    return (
        <Poppable reference={reference} default={placement} placements={getPlacements} className='tooltip'>
            {text}
            <Poppable.Triangle size={TRIANGLE_SIZE}/>
        </Poppable>
    );
};

const TooltipButton = ({text, placement}) => {
    const {visible, show, hide} = useVisibilityState();
    const ref = useRef();
    return (
        <>
            <div className='tooltip-button' ref={ref} onMouseEnter={show} onMouseLeave={hide}>{text}</div>
            {visible && <Tooltip text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...' reference={ref} placement={placement}/>}
        </>
    );
};

export default () => (
    <>
        <TooltipButton text='Top' placement={0}/>
        <TooltipButton text='Right' placement={3}/>
        <TooltipButton text='Left' placement={2}/>
        <TooltipButton text='Bottom' placement={1}/>
    </>
);