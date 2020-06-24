import React from 'react';
import {string, bool} from 'prop-types';
import classNames from 'classnames';
import dracula from 'prism-react-renderer/themes/dracula';
import github from 'prism-react-renderer/themes/github';
import Highlight, {defaultProps} from 'prism-react-renderer';
import './Highlighter.scss';

const Highlighter = ({code, language, inline}) => (
    <Highlight {...defaultProps} theme={inline ? github : dracula} code={code} language={language}>
        {({className, style, tokens, getLineProps, getTokenProps}) => (
            <pre className={classNames(className, {inline})} style={{...style}}>
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
    inline: bool,
};

Highlighter.defaultProps = {
    code: '',
    language: 'jsx',
    inline: false,
};

export default Highlighter;