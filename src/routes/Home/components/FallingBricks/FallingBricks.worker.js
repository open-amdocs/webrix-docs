import {Engine} from './scene';

let engine, canvasEl;

const canvas = ({canvas}) => {
    canvasEl = canvas;
    engine = new Engine(canvas);
};

const resize = ({size: {width, height}}) => {
    canvasEl.width = width;
    canvasEl.height = height;
    engine.resize();
};

onmessage = function(e) {
    const handler = {canvas, resize}[e.data.type];
    handler(e.data);
}