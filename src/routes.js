"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const dotenv_1 = require("dotenv");
const AuthenticateUserController_1 = require("./controller/AuthenticateUserController");
const CreateMessageController_1 = require("./controller/CreateMessageController");
const GetLast3MessageesController_1 = require("./controller/GetLast3MessageesController");
const ensureAuthenticated_1 = require("./middlewares/ensureAuthenticated");
const ProfileUserController_1 = require("./controller/ProfileUserController");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.get('/github', (request, response) => {
    const clientId = (0, dotenv_1.config)().parsed;
    response.redirect(`http://github.com/login/oauth/authorize?client_id=${clientId.GITHUB_CLIENT_ID}`);
});
routes.get('/signin/callback', (request, response) => {
    const { code } = request.query;
    return response.json(code);
});
routes.get('/working', (requent, response) => {
    response.json({
        status: 'Everything working fine'
    });
});
routes.post('/authenticate', new AuthenticateUserController_1.AuthenticateUserController().handle);
routes.post('/messages', ensureAuthenticated_1.ensureAuthenticated, new CreateMessageController_1.CreateMessageController().handle);
routes.get('/messages/last3', new GetLast3MessageesController_1.GetLast3MessagesController().handle);
routes.get('/profile', ensureAuthenticated_1.ensureAuthenticated, new ProfileUserController_1.ProfileUserController().handle);
