const express = require("express");
const loginRouter = express.Router();
const loginServices = require("../services/loginServices");

const { POST_LOGIN } = require('../config/routeConstants');

loginRouter.route(POST_LOGIN).post(loginServices.login);


module.exports = loginRouter;