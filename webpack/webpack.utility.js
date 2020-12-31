const fs = require('fs');

const getFileSize = file => {
    const bytes = fs.statSync(file)['size'];
    return (bytes / 1000).toFixed(1) // convert to kb
}

const hasArg = arg => (
    process.argv.filter(a => a === `--${arg}`).length > 0
);

const getDirectories = path => (
    fs.readdirSync(path, {withFileTypes: true}).filter(d => d.isDirectory()).map(d => d.name)
);

module.exports = {hasArg, getFileSize, getDirectories};