const fs = require('fs');
const path = require('path');

const loadMiddlewares = (dir) => {
    const allMiddlewares = {};

    for (const file of fs.readdirSync(dir)) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            Object.assign(allMiddlewares, loadMiddlewares(fullPath));
        } else if (file.endsWith('.js')) {
            if (path.basename(fullPath) === 'middlewares.js') continue;
            const moduleExports = require(fullPath);
            Object.assign(allMiddlewares, moduleExports);
        }
    }
    return allMiddlewares;
}

const middlewaresDir = path.join(__dirname, 'middlewares');
const middleWares = loadMiddlewares(middlewaresDir);

module.exports = middleWares;
