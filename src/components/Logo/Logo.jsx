import React from 'react';
import text from '!raw-loader!resources/svg/logo-text.svg';
import icon from '!raw-loader!resources/svg/logo-icon.svg';
import './Logo.scss';

const Logo = {};

Logo.Text = props => (
    <div {...props} className='logo-text' dangerouslySetInnerHTML={{__html: text}}/>
);

Logo.Icon = props => (
    <div {...props} className='logo-icon' dangerouslySetInnerHTML={{__html: icon}}/>
);

export default Logo;