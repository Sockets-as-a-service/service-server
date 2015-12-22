'use strict'

//get default settings
var settings = require('./env-defaults.json');

var serverDetails = require('./inc/server/start')({
    port: process.env.PORT || settings.PORT,
    http: require('http'),
    https: require('https'),
    io: require('socket.io'),
    express: require('express')
});

var mongoose = require('mongoose');
//connect to DB
require('./inc/db/connect')(mongoose, process.env.MONGO_URI || settings.MONGO_URI);

//init the API
require('./inc/server/api/v1/init').init({
    secure:{
        salt: settings.salt,
        secret: settings.secret
    },
    clientHost: process.env.CLIENT_URI || settings.CLIENT_URI,
    schemas: require('./inc/db/schemas'),
    mongoose: mongoose,
    app: serverDetails.app,
    io: serverDetails.io,
    bodyParser: require('body-parser'),
    passport: require('passport'),
    http: serverDetails.http,
    https: serverDetails.https,
    cors: require('cors'),
    login: require('connect-ensure-login'),
    session: require('express-session'),
    async: require('async'),
    crypto: require('crypto'),
    helmet: require('helmet')
});

serverDetails.app.get('*', function (req, res) {
    var url = req.url;
});
