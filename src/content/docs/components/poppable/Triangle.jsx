import React, {useCallback, useRef, forwardRef} from 'react';
import {Poppable} from 'webrix/components';
import './Triangle.scss';

const TRIANGLE_SIZE = 10;

const Reference = forwardRef((_, ref) => (
    <div className='reference' ref={ref}>REFERENCE</div>
));

const Popup = props => (
    <Poppable {...props} className='poppable-target'>
        TARGET
        <Poppable.Triangle size={TRIANGLE_SIZE}/>
    </Poppable>
)

export default () => {
    const reference = useRef();
    const getPlacements = useCallback((rbr, tbr) => {
        const {vbefore, vafter, vcenter, hbefore, hafter, hcenter} = Poppable.Placements;
        return [
            {...vbefore(rbr, tbr, -TRIANGLE_SIZE), ...hcenter(rbr, tbr)}, // Top
            {...vafter(rbr, tbr, TRIANGLE_SIZE), ...hcenter(rbr, tbr)}, // Bottom
            {...vcenter(rbr, tbr), ...hbefore(rbr, tbr, -TRIANGLE_SIZE)}, // Left
            {...vcenter(rbr, tbr), ...hafter(rbr, tbr, TRIANGLE_SIZE)}, // Right
        ];
    }, []);
    return (
        <>
            <Reference ref={reference}/>
            <Popup reference={reference} placements={getPlacements} default={0}/>
            <Popup reference={reference} placements={getPlacements} default={1}/>
            <Popup reference={reference} placements={getPlacements} default={2}/>
            <Popup reference={reference} placements={getPlacements} default={3}/>
        </>
    );
};