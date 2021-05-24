import React from 'react';
import {MDXProvider} from '@mdx-js/react';
import './Article.scss';

const Article = ({children, components}) => (
    <MDXProvider components={components}>
        <article>
            {children}
        </article>
    </MDXProvider>
);

export default Article