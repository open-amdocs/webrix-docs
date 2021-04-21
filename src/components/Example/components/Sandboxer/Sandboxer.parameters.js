import {getParameters} from 'codesandbox/lib/api/define';
import rootpkg from '../../../../../package.json';
import pkg from './files/package.json';
import index from '!raw-loader!./files/index.js';
import html from '!raw-loader!./files/index.html';
import reset from '!raw-loader!./files/reset.scss';
import colors from '!raw-loader!../../../../resources/styles/colors.scss';

// Match the webrix version to the one in root
pkg.dependencies.webrix = rootpkg.dependencies.webrix;

export default ({code, style}) => getParameters({
    files: {
        'package.json': {
            content: pkg,
        },
        'index.js': {
            content: index,
        },
        'index.html': {
            content: html,
        },
        'Example.jsx': {
            content: code.replace(/\w+.scss/, 'style.scss'),
        },
        'style.scss': {
            content: '@import "./colors.scss";\n\n' + reset + style,
        },
        'colors.scss': {
            content: colors,
        },
    },
});