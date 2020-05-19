const path = require('path');
const root = path.resolve(__dirname, '..');

const paths = {
    root,
    src: root + '/src',
    build: root + '/build',
    resources: root + '/src/resources'
}

module.exports = {paths};