const {getDirectories} = require('../webpack.utility');
const {paths} = require('../webpack.constants');

const ROUTES = [
    '/',
    '/docs',
    '/examples',
    '/motivation',
];

class SitemapGenerator {
    constructor(env) {
        this.env = env;
    }
    apply(compiler) {
        if (this.env.production) {
            compiler.hooks.emit.tapAsync('SitemapGenerator', (compilation, callback) => {
                ROUTES.push(
                    ...getDirectories(paths.src + '/content/docs/introduction').map(d => '/docs/introduction/' + d),
                    ...getDirectories(paths.src + '/content/docs/components').map(d => '/docs/components/' + d),
                    ...getDirectories(paths.src + '/content/docs/hooks').map(d => '/docs/hooks/' + d),
                    ...getDirectories(paths.src + '/content/docs/tools').map(d => '/docs/tools/' + d),
                    ...getDirectories(paths.src + '/content/examples').map(d => '/examples/' + d),
                );
                const content = ROUTES.reduce((acc, path) => acc + `https://webrix.amdocs.com${path}\n`, '');
                compilation.assets['sitemap.txt'] = {
                    source: () => content,
                    size: () => content.length,
                };
                callback();
            });
        }
    }
}

module.exports = SitemapGenerator;