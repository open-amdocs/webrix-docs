import React, {useState, useCallback} from 'react';
import {Draggable, Sortable} from 'webrix/components';
import './BasicExample.scss';

const move = (arr, from, to) => {
    const copy = [...arr];
    copy.splice(from, 1);
    copy.splice(to, 0, arr[from]);
    return copy;
}

const SortableList = () => {
    const [order, setOrder] = useState([...new Array(5)].map((_, i) => ({id: i, label: `Item ${i + 1}`})));
    const handleOnSort = useCallback(({from, to}) => {
        setOrder(order => move(order, from, to));
    }, [setOrder]);
    return (
        <Sortable onSort={handleOnSort}>
            {order.map((item, index) => (
                <Sortable.Item key={item.id} id={item.id} index={index}><div>{item.label}</div></Sortable.Item>
            ))}
        </Sortable>
    );
};

export default () => {
    return (
        <Draggable.Context>
            <SortableList/>
        </Draggable.Context>
    );
}