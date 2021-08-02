import React from 'react';
import {Link} from 'react-router-dom';
import {Logo} from 'components';
import {HOME} from '../../../routes/Router.routes';
import {Divider} from '../../';

export default () => (
    <div className='logo-container'>
        <div className='graphic'/>
        <Link to={HOME.path}>
            <Logo.Text/>
        </Link>
        <Divider/>
    </div>
);