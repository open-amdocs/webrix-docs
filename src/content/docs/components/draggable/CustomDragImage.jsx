import React from 'react';
import {Draggable} from 'webrix/components';
import './CustomDragImage.scss';

const DragSource = () => {
    const source = Draggable.useSource({});
    return (
        <Draggable {...source} className='drag-source' dragImage={<div className='smiley'/>}>
            Drag me! 😃
        </Draggable>
    );
};

export default () => (
    <Draggable.Context>
        <DragSource/>
    </Draggable.Context>
);