const express = require('express');
const { setupRoutes } = require('./router.js');
const { swaggerDocs } = require('./swagger.js');
const options = require("../options.json").server;

const createApp = () => {
    const app = express();
    app.use(express.json());
    // Setup API Routes
    setupRoutes(app);
    // Setup Swagger
    swaggerDocs(app);
    app.listen(options.port, () => {
        console.log(`🌐 Express on http://localhost:${options.port}`);
    });
}

module.exports = { createApp };
