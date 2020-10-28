import React, {Suspense, memo} from 'react';
import {FaExternalLinkAlt} from 'react-icons/fa';
import {Loader} from 'components';
import './AsyncPage.scss';

const AsyncPage = ({path, title}) => {
    const Comp = React.lazy(() => import(`../../content${path}/readme.mdx`));

    return (
        <article>
            <h1>
                {title}
                <a target='_blank' rel='noreferrer' href={`https://github.com/open-amdocs/webrix-docs/blob/master/src/routes/Docs/content${path}/readme.mdx`}>Edit This Page <FaExternalLinkAlt/></a>
            </h1>
            <Suspense fallback={<Loader/>}>
                <Comp/>
            </Suspense>
        </article>
    );
};

export default memo(AsyncPage);