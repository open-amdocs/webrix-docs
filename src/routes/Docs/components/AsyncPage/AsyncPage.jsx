import React, {Suspense, memo} from 'react';
import {FaExternalLinkAlt} from 'react-icons/fa';
import {Loader} from 'components';
import './AsyncPage.scss';

const AsyncPage = ({path, title}) => {
    const Comp = React.lazy(() => import(`../../content${path}/readme.mdx`));
    const editURL = `https://github.com/open-amdocs/webrix-docs/blob/master/src/routes/Docs/content${path}/readme.mdx`;

    return (
        <article>
            <h1>
                {title}
                <a target='_blank' rel='noreferrer' href={editURL}>Edit This Page <FaExternalLinkAlt/></a>
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