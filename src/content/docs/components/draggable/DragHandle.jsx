import React, {useRef} from 'react';
import {Draggable} from 'webrix/components';
import './DragHandle.scss';

const DragSource = ({children}) => {
    const handle = useRef();
    const monitor = Draggable.useMonitor();
    const source = Draggable.useSource({
        canDrag: () => {
            const event = monitor.getEvent();
            // Only allow dragging when the target is the handle (or an element contained within)
            return handle.current?.contains(event.target);
        },
        data: {content: children},
    });
    return (
        <Draggable {...source} className='drag-source' dragImage={
            <>
                <div className='handle'/>
                {children}
            </>
        }>
            <div className='handle' ref={handle}/>
            {children}
        </Draggable>
    );
};

export default () => (
    <Draggable.Context>
        <DragSource>Item 1</DragSource>
        <DragSource>Item 2</DragSource>
        <DragSource>Item 3</DragSource>
    </Draggable.Context>
);