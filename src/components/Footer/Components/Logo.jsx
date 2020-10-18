import React from 'react';
import {Link} from 'react-router-dom';
import {HOME} from '../../../routes/Router.routes';
import webrixLogo from '../../../resources/images/webrix-logo-text-light.png';
import {Divider} from '../../';

export default () => (
    <div className='logo-container'>
        <div className='graphic'/>
        <Link to={HOME.path}>
            <img src={webrixLogo} alt='Webrix logo' height='30px' loading='lazy'/>
        </Link>
        <Divider/>
    </div>
);