import React from 'react';
import {Draggable} from 'webrix/components';
import './BasicExample.scss';

const DragSource = ({children}) => {
    const source = Draggable.useSource({
        data: {content: children},
    });
    return <Draggable {...source} className='drag-source'>{children}</Draggable>;
};

const DropTarget = () => {
    const target = Draggable.useTarget({
        onDrop: data => alert(`${data.content} dropped!`),
    });
    return <Draggable {...target} className={'drop-target'}>Drop Target</Draggable>;
};

export default () => (
    <Draggable.Context>
        <DropTarget/>
        <div className='sources'>
            <DragSource>Item 1</DragSource>
            <DragSource>Item 2</DragSource>
            <DragSource>Item 3</DragSource>
        </div>
    </Draggable.Context>
);