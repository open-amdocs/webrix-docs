import React from 'react';
import {Draggable} from 'webrix/components';
import './NestingSources.scss';

const DragSource = ({children, name}) => {
    const source = Draggable.useSource({
        data: {name},
    });
    return <Draggable {...source} className='drag-source'>{children}</Draggable>;
};

const DropTarget = () => {
    const target = Draggable.useTarget({
        onDrop: source => alert(`${source.data.name} dropped!`),
    });
    return <Draggable {...target} className={'drop-target'}>Drop Target</Draggable>;
};

export default () => (
    <Draggable.Context>
        <DropTarget/>
        <DragSource name='parent'>
            Parent
            <DragSource name='child 1'>Child 1</DragSource>
            <DragSource name='child 2'>Child 2</DragSource>
        </DragSource>
    </Draggable.Context>
);