import React, {useState, useRef, useMemo, useCallback, memo} from 'react';
import classNames from 'classnames';
import {Movable} from 'webrix/components';
import './style.scss';

const {move, update, contain, snap, relative} = Movable.Operations;
const SQUARE_SIZE = 60;
const Card = [
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

const getPathCells = (from, to, vertical) => {
    const i = vertical ? 1 : 0;
    const range = Math.abs(from[i] - to[i]) + 2;
    const fromRange = Math.min(from[i], to[i])
    return [...new Array(range)].map((_, index) =>
        vertical ? [from[0], fromRange + index] : [fromRange + index, from[1]])
}

const getCells = (anchor, vertical) => (vertical
        ? [anchor, [anchor[0], anchor[1] + 1]]
        : [anchor, [anchor[0] + 1, anchor[1]]]
);

const isColliding = (road, car) => road.some(r =>
    car.some(c => c[0] === r[0] && c[1] === r[1])
);

const isBlocked = (coords, index, cars) => {
    const path = getPathCells(coords, cars[index].coords, cars[index].vertical);
    return cars.some((item, i) =>
        i !== index && isColliding(path, getCells(item.coords, item.vertical))
    );
}

const getPosition = ([col, row]) => ({top: row * SQUARE_SIZE, left: col * SQUARE_SIZE});

const getCoords = ({top, left}) => ([left / SQUARE_SIZE, top / SQUARE_SIZE]);

const Car = memo(({container, color, vertical, position, setPosition, index}) => {
    const movable = useRef();
    const handleOnUpdate = useCallback(({top, left}) =>
            setPosition(index, vertical ? {...position, top} : {...position, left})
        ,[vertical, position, setPosition, index]
    );
    const props = Movable.useMove(
        useMemo(() => [
            move(movable),
            contain(movable, container),
            relative(container),
            snap(SQUARE_SIZE, SQUARE_SIZE),
            update(handleOnUpdate),
        ], [container, handleOnUpdate])
    );
    return (
        <Movable
            className={classNames('car', {vertical})}
            ref={movable}
            style={{ ...position, backgroundColor: color }}
            {...props}
        />
    );
});

export default () => {
    const board = useRef();
    const [state, setState] = useState(Card);
    const setPosition = useCallback((index, position) =>
            setState(lastState => {
                const coords = getCoords(position);
                if (!isBlocked(coords, index, lastState)) {
                    const newState = [...lastState];
                    newState[index] = {...lastState[index], coords}
                    return newState;
                }
                return lastState;
            })
        ,[setState]
    );

    return (
        <div className='board' ref={board} >
            {state.map(({coords, ...car}, index) => (
                <Car key={index} container={board} index={index} {...car}
                     setPosition={setPosition} position={getPosition(coords)}/>
            ))}
        </div>
    );
};