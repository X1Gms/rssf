const fs = require('fs');
const path = require('path');

const loadHandlers = (dir) => {
    const allHandlers = {};

    for (const file of fs.readdirSync(dir)) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            Object.assign(allHandlers, loadHandlers(fullPath));
        } else if (file.endsWith('.js')) {
            if (path.basename(fullPath) === 'mqttHandlers.js') continue;
            const moduleExports = require(fullPath);
            Object.assign(allHandlers, moduleExports);
        }
    }
    return allHandlers;
}

const handlersDir = path.join(__dirname, 'handlers');
const handlers = loadHandlers(handlersDir);

module.exports = handlers;
