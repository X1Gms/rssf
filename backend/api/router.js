const handlers = require('./requestHandlers/requestHandlers.js');
const middleWares = require('./middlewares/middlewares.js');
const setupRoutes = (app) => {
    // ######### GET DEVICE DATA #########
    app.get('/devices', handlers.getDevices);
    app.get('/device/:id',handlers.getDevice);
    app.get('/rooms',handlers.getRooms);
    // ####################################
    // ######### GET ROLES DATA #########
    app.get("/roles", handlers.getRoles);
    // ####################################

    // ######### CRUD USERS ###############
    app.get("/users", handlers.getUsers);
    app.get('/user/:id',handlers.getUser);
    app.post('/user',middleWares.registerUserMiddleware,handlers.registerUser);
    app.put('/user/:id',middleWares.updateUserMiddleware,handlers.updateUser);
    app.delete('/user/:id',middleWares.deleteUserMiddleware,handlers.deleteUser);
    // ####################################

    // ############# AUTH #################
    app.post('/login',middleWares.loginMiddleware,handlers.loginUser);
    // Crud element of user is also part of auth, POST /user
    // ####################################

    // ########### SAMPLES ###############
    app.get("/samples", handlers.getReadings);
    // ####################################

}

module.exports = { setupRoutes };
