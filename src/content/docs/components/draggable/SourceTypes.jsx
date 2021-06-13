import React, {useState} from 'react';
import {Draggable} from 'webrix/components';
import './SourceTypes.scss';

const DragSource = ({children, valid}) => {
    const source = Draggable.useSource({
        data: {valid},
    });
    return <Draggable {...source} className='drag-source'>{children}</Draggable>;
};

const DropTarget = () => {
    const [className, setClassName] = useState('');
    const target = Draggable.useTarget({
        onBeginHover: source => {
            setClassName(source.data.valid ? 'valid' : 'invalid');
        },
        onEndHover: () => {
            setClassName('');
        },
        onDrop: source => {
            if (source.data.valid) {
                alert('Valid item!')
            } else {
                alert('Invalid item!')
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