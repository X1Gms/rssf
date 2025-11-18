const fs = require("fs");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yaml");
const svOpt = require("../options.json").server;

// Load YAML
const file = fs.readFileSync(path.join(__dirname, "swagger.yaml"), "utf8");
const swaggerDocument = YAML.parse(file);

function swaggerDocs(app) {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    console.log(`📘 Swagger docs available at http://localhost:${svOpt.port}/api-docs`);
}

module.exports = { swaggerDocs };
