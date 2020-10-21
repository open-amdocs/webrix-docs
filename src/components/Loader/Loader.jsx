import React from 'react';
import ReactDOM from 'react-dom';
import './Loader.scss';

const Loader = () => ReactDOM.createPortal(
    <div id='webrix-loader'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500' width='500' height='500'>
            <path fillRule='evenodd' d='M404.86 82.89L494.19 116.39L500 120.86L477.67 244.59L248.52 418.35L27.86 245.04L0 119.4L5.08 114.61L95.31 82L247.64 162.51L404.86 82.89ZM250 190.83L92.78 105.49L40.36 125.59L245.95 256.66L462.81 128.31L406.94 106.23L250 190.83ZM232.69 280.34L30.92 151.96L47.03 231.91L233.8 376.04L232.69 280.34ZM260.99 281.35L260.12 380.86L456.92 233.19L470.46 150.09L260.99 281.35Z'/>
        </svg>
    </div>

, document.body);

export default Loader;