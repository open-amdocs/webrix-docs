import React from 'react';
import amdocsLogo from '../../../resources/images/amdocs-logo-light-small.png';

export default () => (
    <div className='copyright-notice'>
        <a href='https://amdocs.com'>
            <img src={amdocsLogo} alt='Amdocs Corp. Logo' loading='lazy' width='160' height='30'/>
        </a>
        <p>Copyright © 2020 Amdocs Corp.</p>
    </div>
)