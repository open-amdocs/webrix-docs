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
    const getPlacements = useCallback((rbr, tbr) => [
        {// Bottom
            top: rbr.bottom + TRIANGLE_SIZE,
            left: rbr.left + (rbr.width - tbr.width) / 2,
        },
        {// Top
            top: rbr.top - tbr.height - TRIANGLE_SIZE,
            left: rbr.left + (rbr.width - tbr.width) / 2,
        },
        {// Left
            top: rbr.top + (rbr.height - tbr.height) / 2,
            left: rbr.left - tbr.width - TRIANGLE_SIZE,
        },
        {// Right
            top: rbr.top + (rbr.height - tbr.height) / 2,
            left: rbr.right + TRIANGLE_SIZE,
        }
    ], []);
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