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
        onBeginHover: source => {
            console.log('begin', name);
            setHovering(true)
        },
        onEndHover: source => {
            console.log('end', name);
            setHovering(false)
        },
    });
    return <Draggable {...target} className={`drop-target ${hovering ? 'hovering' : ''}`}>{children}</Draggable>;
};

export default () => (
    <Draggable.Context>
        <DropTarget name='parent'>
            Parent Target
            <DropTarget name='child'>Child <div className='test'>Target</div></DropTarget>
        </DropTarget>
        <DragSource/>
    </Draggable.Context>
);