const handlers = require('./requestHandlers/requestHandlers.js');
const middleWares = require('./middlewares/middlewares.js');
const setupRoutes = (app) => {
    // ######### GET DEVICE DATA #########
    app.get('/devices', handlers.getDevices);
    app.get('/device/:id',handlers.getDevice);
    app.get('/rooms',handlers.getRooms);
    // ####################################

    // ######### CRUD USERS ###############
    app.get('/user/:id',handlers.getUser);
    app.post('/user',middleWares.registerUserMiddleware,handlers.register);
    app.put('/user/:id',middleWares.updateUserMiddleware,handlers.updateUser);
    app.delete('/user/:id',middleWares.deleteUserMiddleware,handlers.deleteUser);
    // ####################################

    // ############# AUTH #################
    app.post('/login',middleWares.loginMiddleware,handlers.login);
    // Crud element of user is also part of auth, POST /user
    // ####################################
}

module.exports = { setupRoutes };
