const fs = require('fs').promises;
const puppeteer = require('puppeteer');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack/webpack')({production: true});
const {getDirectories} = require('./webpack/webpack.utility');
const {paths} = require('./webpack/webpack.constants');
const PORT = 9000;

const PATHS = [
    ...getDirectories(paths.src + '/content/examples').map(d => '/examples/' + d),
    ...getDirectories(paths.src + '/content/docs/introduction').map(d => '/docs/introduction/' + d),
    ...getDirectories(paths.src + '/content/docs/components').map(d => '/docs/components/' + d),
    ...getDirectories(paths.src + '/content/docs/hooks').map(d => '/docs/hooks/' + d),
    ...getDirectories(paths.src + '/content/docs/tools').map(d => '/docs/tools/' + d),
];

const runServer = () => new Promise((resolve, reject) => {
    const compiler = webpack(config);
    const server = new WebpackDevServer(compiler, config.devServer);

    compiler.hooks.done.tap('IDoNotUnderstandWhatThisStringIsForButItCannotBeEmpty', () => {
        console.log('Done compiling');
        resolve(server);
    });

    server.listen(PORT, '0.0.0.0', err => {
        if (err) {
            reject(err);
        }
    });
});

const ssr = async () => {
    const server = await runServer();
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();

    for (const path of PATHS) {
        console.log(`Rendering http://localhost:${PORT}${path} into build${path}/index.html`);
        await page.goto(`http://localhost:${PORT}${path}`, {waitUntil: 'networkidle0'});
        const html = await page.content()
        await fs.mkdir(`build${path}`, {recursive: true});
        await fs.writeFile(`build${path}/index.html`, html);
    }
    await browser.close();
    await server.close();
};
ssr();