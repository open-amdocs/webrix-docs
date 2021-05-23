import React, {Suspense, memo} from 'react';
import {Helmet} from 'react-helmet';
import {FaEdit, FaCode} from 'react-icons/fa';
import {Loader} from 'components';
import {getPathToSource} from './AsyncPage.utils';
import './AsyncPage.scss';

const AsyncPage = ({path, title, description}) => {
    const Comp = React.lazy(() => import(`content/docs${path}/readme.mdx`));
    const editURL = `https://github.com/open-amdocs/webrix-docs/blob/master/src/content/docs${path}/readme.mdx`;
    const sourceCodeURL = getPathToSource({path, title});

    return (
        <article>
            <Helmet>
                <title>{title} - Webrix.js</title>
                <meta name='description' content={description}/>
            </Helmet>
            <h1>
                {title}
                <div className='docs-links'>
                    <a className='docs-link' target='_blank' rel='noreferrer' href={editURL}>Edit This Page <FaEdit/></a>
                    {sourceCodeURL && <a className='docs-link' target='_blank' rel='noreferrer' href={sourceCodeURL}>Source<FaCode/></a>}
                </div>
            </h1>
            <Suspense fallback={<Loader/>}>
                <Comp/>
            </Suspense>
            <div className='contribute'>
                <h4>Help us improve the docs</h4>
                If something is missing or not entirely clear,
                please <a target='_blank' rel='noreferrer' href='https://github.com/open-amdocs/webrix-docs/issues/'>file an issue </a>
                or <a target='_blank' rel='noreferrer' href={editURL}>edit this page</a>.
            </div>
        </article>
    );
};

export default memo(AsyncPage);