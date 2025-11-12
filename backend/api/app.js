const express = require('express');
const { setupRoutes } = require('./router.js');
const options = require("../options.json").server;

const createApp = () => {
    const app = express();
    app.use(express.json());
    setupRoutes(app);
    app.listen(options.port, () => {
        console.log(`🌐 Express no http://localhost:${options.port}`);
    });
}

module.exports = { createApp };
