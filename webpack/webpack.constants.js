const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const webrixBuildPath = path.resolve(__dirname, '../../webrix/build/');
const webrixInstalledPath = root + '/node_modules/webrix';

const paths = {
    root,
    src: root + '/src',
    build: root + '/build',
    resources: root + '/src/resources',
    webrix: fs.existsSync(webrixBuildPath) ? webrixBuildPath : webrixInstalledPath,
    node_modules: root + '/node_modules',
}

module.exports = {paths};