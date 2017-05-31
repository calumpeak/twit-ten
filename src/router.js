'use strict';

const express = require('express');
const path = require('path');
const http = require('http');
const requestLogger = require('./middleware/req-logger');
const handlers = require('./handlers');

const router = (options) => {
    const app = express();
    const server = http.createServer(app);

    // Methods 
    const listen = (port) => Promise.resolve(server.listen(port));
    const close = () => Promise.resolve(server.close());
    const address = () => server.address();

    // Register Statics & Custom Routes
    app.use(express.static(path.join(__dirname, '../view')));
    app.get('/:handle', function (req, res){
        res.sendFile(path.resolve(__dirname, '../view/index.html'));
    });

    // Register middlewares
    app.use(requestLogger);

    // Register API routes
    app.get('/api/twitter', handlers.twitter);

    return {
        listen,
        close,
        address
    };
};

module.exports = router;
