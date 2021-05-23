import React, {Suspense, memo} from 'react';
import {Helmet} from 'react-helmet';
import {Loader} from 'components';

const AsyncPage = ({title, description, fileName}) => {
    const Comp = React.lazy(() => import(`content/posts/${fileName}.mdx`));
    return (
        <article className='blog-page'>
            <Helmet>
                <title>{title} - Webrix.js Blog</title>
                <meta name='description' content={description}/>
            </Helmet>
            <Suspense fallback={<Loader/>}>
                <Comp/>
            </Suspense>
        </article>
    )
}

export default memo(AsyncPage);