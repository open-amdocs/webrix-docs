import React, {useRef} from 'react';
import {Draggable} from 'webrix/components';
import './DragHandle.scss';

const DragSource = ({children}) => {
    const handle = useRef();
    const source = Draggable.useSource({
        canDrag: e => handle.current?.contains(e.target), // Only allow dragging when the target is the handle
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