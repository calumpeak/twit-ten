'use strict';

const env = process.env;
const config = {
    // Server port
    port: 3020,

    // API's
    api: {
        twitter: {
            key: env.TWITTER_CONSUMER_KEY,
            secret: env.TWITTER_CONSUMER_SECRET,
            token: env.TWITTER_BEARER_TOKEN
        }
    },

    // Signals
    signals: ['SIGTERM', 'SIGINT', 'SIGHUP']
};

module.exports = config;
