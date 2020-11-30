import React, {useCallback, useRef, forwardRef} from 'react';
import {Poppable} from 'webrix/components';
import './Placements.scss';

const GAP = 5;

const Reference = forwardRef((_, ref) => (
    <div className='reference' ref={ref}>REFERENCE</div>
));

const Popup = props => (
    <Poppable {...props} className='poppable-target'>
        TARGET
    </Poppable>
)

export default () => {
    const reference = useRef();
    const {vbefore, vcenter, vafter, hbefore, hcenter, hafter} = Poppable.Placements;
    const placements = useCallback((rbr, tbr) => [
        {...vbefore(rbr, tbr, -GAP), ...hbefore(rbr, tbr, -GAP)}, // Top left
        {...vbefore(rbr, tbr, -GAP), ...hcenter(rbr, tbr)}, // Top center
        {...vbefore(rbr, tbr, -GAP), ...hafter(rbr, tbr, GAP)}, // Top right
        {...vafter(rbr, tbr, GAP), ...hbefore(rbr, tbr, -GAP)}, // Bottom left
        {...vafter(rbr, tbr, GAP), ...hcenter(rbr, tbr)}, // Bottom center
        {...vafter(rbr, tbr, GAP), ...hafter(rbr, tbr, GAP)}, // Bottom left
        {...vcenter(rbr, tbr), ...hbefore(rbr, tbr, -GAP)}, // Center left
        {...vcenter(rbr, tbr), ...hafter(rbr, tbr, GAP)}, // Center right
    ], []);
    const props = {reference, placements, className: 'poppable-target'};
    return (
        <>
            <Reference ref={reference}/>
            {['top left','top center','top right','bottom left','bottom center','bottom right','center left','center right'].map((title, i) => (
                <Poppable {...props} default={i}>{title}</Poppable>
            ))}
        </>
    );
};