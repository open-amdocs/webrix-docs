import React, {Suspense} from 'react';
import {Helmet} from 'react-helmet';
import {MDXProvider} from '@mdx-js/react';
import {Loader, Container, Highlighter} from 'components';
const Comp = React.lazy(() => import('./readme.mdx'));
import './Motivation.scss';

const components = {
    inlineCode: props => <Highlighter code={props.children.trim()} inline/>,
};

const Motivation = () => (
    <MDXProvider components={components}>
        <Helmet>
            <title>Motivation - Webrix.js</title>
            <meta name='description' content='The motivation behind Webrix.js'/>
        </Helmet>
        <Container>
            <article>
                <Suspense fallback={<Loader/>}>
                    <Comp/>
                </Suspense>
            </article>
        </Container>
    </MDXProvider>
);

export default Motivation;