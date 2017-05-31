'use strict';

const winston = require('winston');

/**
 * Simple request logger
 * Logs out req and res payloads/timings 
 * 
 * @function requestLogger
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
const requestLogger = (req, res, next) => {
    // Skip during tests for now
    if (process.env.NODE_ENV === 'test') {
        return next();
    }

    const reqTime = Date.now();
    const info = `Method: ${req.method}, Path: ${req.path}`;

    winston.info(`Requested: ${info}, Timestamp: ${reqTime}`);

    const done = () => {
        const resTime = Date.now();
        winston.info(`Response: ${info}, Status: ${res.statusCode}, Timestamp: ${resTime}, Took: ${resTime - reqTime}`);
    };

    res.on('finish', done);
    res.on('close', done);

    next();
};

module.exports = requestLogger;
