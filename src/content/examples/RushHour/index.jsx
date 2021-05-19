import React, {useState, useRef, useMemo, useCallback, memo} from 'react';
import classNames from 'classnames';
import {Movable} from 'webrix/components';
import './style.scss';

const {move, update, contain, snap, relative} = Movable.Operations;
const SQUARE_SIZE = 60;
const BOARD = [
    {coords: [4, 3], color: '#ff9f1a', vertical: true},
    {coords: [4, 1], color: '#20bf6b', vertical: true},
    {coords: [2, 0], color: '#6c5ce7', vertical: true},
    {coords: [2, 3], color: '#e056fd', vertical: true},
    {coords: [1, 1], color: '#17c0eb', vertical: true},
    {coords: [0, 2], color: '#67e6dc', vertical: true},
    {coords: [3, 3], color: '#6a89cc', vertical: true},
    {coords: [5, 3], color: '#38ada9', vertical: true},
    {coords: [5, 1], color: '#a4b0be', vertical: true},
    {coords: [3, 0], color: '#0984e3'},
    {coords: [4, 5], color: '#fad390'},
    {coords: [1, 5], color: '#636e72'},
    {coords: [2, 2], color: 'red'},
];

// Returns true if the given areas overlap
const overlap = (a, b) => (
    a.some(([ax, ay]) => b.some(([bx, by]) => ax === bx && ay === by))
);

// Generate a list of coordinates covering the area given by from/to
const genCoords = (from, to, vertical) => {
    const axis = vertical ? 1 : 0;
    const min = Math.min(from[axis], to[axis]);
    const max = Math.max(from[axis], to[axis]);
    return [...new Array(max - min + 2)].map((_, i) => {
        const c = [];
        c[axis] = i + min;
        c[1 ^ axis] = from[1 ^ axis];
        return c;
    });
};

const canMove = (board, index, next) => {
    const spliced = [...board];
    // Generate the area covered by moving the car from its original position to the next.
    const a = genCoords(board[index].coords, next, board[index].vertical);
    spliced.splice(index, 1);
    return !spliced.some(b => overlap(a, genCoords(b.coords, b.coords, b.vertical)));
};

const Car = memo(({index, container, color: backgroundColor, vertical, coords, setPosition}) => {
    const movable = useRef();
    const top = coords[1] * SQUARE_SIZE, left = coords[0] * SQUARE_SIZE;
    const props = Movable.useMove(
        useMemo(() => [
            move(movable),
            contain(movable, container),
            relative(container),
            snap(SQUARE_SIZE, SQUARE_SIZE),
            update(({top, left}) => {
                const x = !vertical ? Math.floor(left / SQUARE_SIZE) : coords[0];
                const y = vertical ? Math.floor(top / SQUARE_SIZE) : coords[1];
                setPosition(index, [x, y]);
            }),
        ], [index, container, setPosition, coords])
    );
    return (
        <Movable
            className={classNames('car', {vertical})}
            ref={movable}
            style={{top, left, backgroundColor}}
            {...props}
        />
    );
});

export default () => {
    const board = useRef();
    const [state, setState] = useState(BOARD);
    const setPosition = useCallback((index, coords) => {
        setState(b => {
            if (canMove(b, index, coords)) {
                const next = [...b];
                next[index] = {...next[index]};
                next[index].coords = coords;
                return next;
            }
            return b;
        })
    },[setState]);

    return (
        <div className='board' ref={board}>
            {state.map((car, index) => (
                <Car key={index} index={index} container={board} setPosition={setPosition} {...car}/>
            ))}
        </div>
    );
};
