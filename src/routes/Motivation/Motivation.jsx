import React, {Suspense} from 'react';
import {Helmet} from 'react-helmet';
import {Loader, Container, Highlighter, Article} from 'components';
const Comp = React.lazy(() => import('./readme.mdx'));
import './Motivation.scss';

const components = {
    inlineCode: props => <Highlighter code={props.children.trim()} inline/>,
};

const Motivation = () => (
    <>
        <Helmet>
            <title>Motivation - Webrix.js</title>
            <meta name='description' content='The motivation behind Webrix.js'/>
        </Helmet>
        <Container>
            <Article components={components}>
                <Suspense fallback={<Loader/>}>
                    <Comp/>
                </Suspense>
            </Article>
        </Container>
    </>
);

export default Motivation;