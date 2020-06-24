import React from 'react';
import {string} from 'prop-types';
import dracula from 'prism-react-renderer/themes/dracula';
import Highlight, {defaultProps} from 'prism-react-renderer';

const Highlighter = ({code, language}) => (
    <Highlight {...defaultProps} theme={dracula} code={code} language={language}>
        {({className, style, tokens, getLineProps, getTokenProps}) => (
            <pre className={className} style={{...style, padding: '20px'}}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({line, key: i})}>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({token, key})} />
                            ))}
                        </div>
                    ))}
                </pre>
        )}
    </Highlight>
);

Highlighter.propTypes = {
    code: string,
    language: string,
};

Highlighter.defaultProps = {
    code: '',
    language: 'jsx',
};

export default Highlighter;