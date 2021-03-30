import React, {useCallback} from 'react';
import {Poppable} from 'webrix/components';
import './Preview.scss';

const {vcenter, hafter} = Poppable.Placements;
const GAP = 8;

export default ({reference, path}) => {

    const placements = useCallback((rbr, tbr) => [
        {...vcenter(rbr, tbr), ...hafter(rbr, tbr, GAP)}, // Right
    ], []);

    return !path ? null : (
        <Poppable placements={placements} reference={reference} className='example-preview'>
            <video className='preview' src={require(`../../../../content${path}/preview.mp4`).default} autoPlay loop playsInline muted/>
            <Poppable.Triangle size={GAP}/>
        </Poppable>
    );
}