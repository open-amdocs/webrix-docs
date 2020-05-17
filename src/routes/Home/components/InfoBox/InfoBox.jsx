import React from "react";
import './InfoBox.scss';

const InfoBox = ({title, children}) => (
    <div className='info-box'>
        <h3>{title}</h3>
        {children}
    </div>
);

export default InfoBox;