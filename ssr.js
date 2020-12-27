const fs = require('fs').promises;
const puppeteer = require('puppeteer');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack/webpack');
const PROXY = 'http://genproxy.amdocs.com:8080';
const PORT = 9000;

const PATHS = [
    {
        path: '/',
        title: 'Webrix.js',
        description: 'Powerful building blocks for React-based web applications',
    },
    {
        path: '/docs/',
        title: 'Documentation - Webrix.js',
        description: 'Detailed documentation, including live, editable examples, for components, tools and hooks within Webrix.js'
    },
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
    const template = await fs.readFile('./src/index.html', 'utf8');
    const server = await runServer();
    const browser = await puppeteer.launch({headless: true, args: [process.argv[2] === 'proxy' ? `--proxy-server=${PROXY}` : '']});
    const page = await browser.newPage();

    for (const {path, description, title} of PATHS) {
        console.log(`Rendering http://localhost:${PORT}${path} into build/ssr${path}index.html`);
        await page.goto(`http://localhost:${PORT}${path}`, {waitUntil: 'networkidle0'});
        const app = await page.$('#app');
        const html = await page.evaluate(app => app.innerHTML, app);
        await fs.mkdir(`build${path}`, {recursive: true});
        await fs.writeFile(`build${path}index.html`, Object.entries({title, description, content: html}).reduce((out, [key, value]) => {
            return out.replace(`{{${key}}}`, value);
        }, template));
    }
    await browser.close();
    await server.close();
};
ssr().then(console.log);