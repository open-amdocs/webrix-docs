const {parse} = require('react-docgen');

const getProps = source => {
    const before = `const MyComponent = () => <div/>\n`;
    source = source.replace('export const ', before + 'MyComponent.');
    source = source.replace('export const ', 'MyComponent.');
    source += '\nexport default MyComponent;';
    const parseOutput = parse(source);
    return `export default ${JSON.stringify(parseOutput)}`;
}

module.exports = getProps;