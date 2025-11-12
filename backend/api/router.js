const handlers = require('./requestHandlers/requestHandlers.js');

const setupRoutes = (app) => {
    app.get('/users', handlers.getAllUsers);
}

module.exports = { setupRoutes };
