'use strict';

// Set environment variables
require('dotenv').config();

const config = require('./config');
const router = require('./src/router')();
const winston = require('winston');

const gracefulClose = () => {
    winston.info('Gracefully closing server. Goodbye...');
    router.close().then(() => process.exit());
};

config.signals.forEach(signal => {
    process.on(signal, () => {
        winston.info(`Received signal ${signal}. Exiting...`);
        gracefulClose();
    });
});

process.on('uncaughtException', (err) => {
    winston.error(err);
    gracefulClose();
});

process.on('unhandledRejection', (reason, promise) => {
    winston.error(`Unhandled Rejection ${reason} at ${promise}`);
    gracefulClose();
});

router.listen(config.port).then(() => {
    winston.info(`twit-ten server listening on ${config.port}`);
});
