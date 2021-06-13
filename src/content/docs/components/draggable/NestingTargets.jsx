import React, {useState} from 'react';
import {Draggable} from 'webrix/components';
import './NestingTargets.scss';

const DragSource = () => {
    const source = Draggable.useSource({
        onDrop: target => {
            alert(`Dropped on ${target.data.name}!`)
        },
    });
    return <Draggable {...source} className='drag-source'>Item</Draggable>;
};

const DropTarget = ({children, name}) => {
    const [hovering, setHovering] = useState(false);
    const target = Draggable.useTarget({
        data: {name},
        onBeginHover: () => setHovering(true),
        onEndHover: () => setHovering(false),
    });
    return <Draggable {...target} className={`drop-target ${hovering ? 'hovering' : ''}`}>{children}</Draggable>;
};

export default () => (
    <Draggable.Context>
        <DropTarget name='parent'>
            Parent Target
            <DropTarget name='child'>Child Target</DropTarget>
        </DropTarget>
        <DragSource/>
    </Draggable.Context>
);