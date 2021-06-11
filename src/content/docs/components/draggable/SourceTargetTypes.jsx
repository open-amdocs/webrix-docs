import React, {useState} from 'react';
import {Draggable} from 'webrix/components';
import './SourceTargetTypes.scss';

const DragSource = ({children, valid}) => {
    const source = Draggable.useSource({
        data: {valid},
    });
    return <Draggable {...source} className='drag-source'>{children}</Draggable>;
};

const DropTarget = () => {
    const [className, setClassName] = useState('');
    const target = Draggable.useTarget({
        onBeginHover: data => {
            setClassName(data.valid ? 'valid' : 'invalid');
        },
        onEndHover: data => {
            setClassName('');
        },
        onDrop: data => {
            if (data.valid) {
                alert(`A valid item was dropped!`)
            } else {
                alert(`You cannot drop this item here!`)
            }
        },
    });
    return <Draggable {...target} className={`drop-target ${className}`}>Drop Target</Draggable>;
};

export default () => (
    <Draggable.Context>
        <DropTarget/>
        <DragSource valid={true}>Valid Item</DragSource>
        <DragSource valid={false}>Invalid Item</DragSource>
    </Draggable.Context>
);