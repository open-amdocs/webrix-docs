const fs = require('fs').promises;
const puppeteer = require('puppeteer');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack/webpack');
const {getDirectories} = require('./webpack/webpack.utility');
const {paths} = require('./webpack/webpack.constants');
const PORT = 9000;

const PATHS = [
    ...getDirectories(paths.src + '/content/docs/components').map(d => '/docs/components/' + d),
    ...getDirectories(paths.src + '/content/docs/hooks').map(d => '/docs/hooks/' + d),
    ...getDirectories(paths.src + '/content/docs/tools').map(d => '/docs/tools/' + d),
];

const runServer = () => new Promise((resolve, reject) => {
    config.resolve.alias.webrix = 'webrix';
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
    const template = await fs.readFile('./build/index.html', 'utf8');
    const server = await runServer();
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();

    for (const path of PATHS) {
        console.log(`Rendering http://localhost:${PORT}${path} into build${path}/index.html`);
        await page.goto(`http://localhost:${PORT}${path}`, {waitUntil: 'networkidle0'});
        const app = await page.$('#app');
        const html = await page.evaluate(app => app.innerHTML, app);
        await fs.mkdir(`build${path}`, {recursive: true});
        await fs.writeFile(`build${path}/index.html`, template.replace('<div id="app"></div>', `<div id="app">${html}</div>`));
    }
    await browser.close();
    await server.close();
};
ssr();