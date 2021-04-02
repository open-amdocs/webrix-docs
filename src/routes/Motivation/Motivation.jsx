import React, {Suspense} from 'react';
import {MDXProvider} from '@mdx-js/react';
import {Loader, Container, Highlighter} from 'components';
const Comp = React.lazy(() => import('./readme.mdx'));
import './Motivation.scss';

const components = {
    inlineCode: props => <Highlighter code={props.children.trim()} inline/>,
}

const Motivation = () => (
    <MDXProvider components={components}>
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