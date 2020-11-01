const fs = require('fs');

const getFileSize = file => {
    const bytes = fs.statSync(file)['size'];
    return (bytes / 1000).toFixed(1) // convert to kb
}

const hasArg = arg => (
    process.argv.filter(a => a === `--${arg}`).length > 0
);

module.exports = {hasArg, getFileSize};