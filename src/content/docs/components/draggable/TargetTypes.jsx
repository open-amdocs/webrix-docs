import React, {useState} from 'react';
import {Draggable} from 'webrix/components';
import './TargetTypes.scss';

const DragSource = () => {
    const source = Draggable.useSource({
        canDrop: target => target.data.valid,
        onDrop: target => {
            if (target.data.valid) {
                alert('Valid target!')
            } else {
                alert('Invalid target!')
            }
        },
    });
    return <Draggable {...source} className='drag-source'>Item</Draggable>;
};

const DropTarget = ({children, valid}) => {
    const [className, setClassName] = useState('');
    const target = Draggable.useTarget({
        data: {valid},
        onBeginHover(source) {
            const valid = source.canDrop(this);
            setClassName(valid ? 'valid' : 'invalid');
        },
        onEndHover: () => {
            setClassName('');
        },
    });
    return <Draggable {...target} className={`drop-target ${className}`}>{children}</Draggable>;
};

export default () => (
    <Draggable.Context>
        <DropTarget valid={true}>Valid Target</DropTarget>
        <DropTarget valid={false}>Invalid Target</DropTarget>
        <DragSource/>
    </Draggable.Context>
);