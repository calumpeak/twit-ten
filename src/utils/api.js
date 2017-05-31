'use strict';

const Twitter = require('twitter');
const api = require('../../config').api.twitter;

const twitterClient = new Twitter({
    consumer_key: api.key,
    consumer_secret: api.secret,
    bearer_token: api.token
});

/**
 * Fetches tweets from twitters api
 * @function getTweets
 * @param {String} screen_name twitter handle
 * @param {Number} count of posts to fetch
 * @return {Promise}
 */
const getTweets = (screen_name, count) => {
    return new Promise((resolve, reject) => {
        twitterClient.get('statuses/user_timeline', { screen_name, count }, (err, tweets, res) => {
            if (err) {
                return reject(err);
            }

            resolve(tweets);
        });
    });
};

module.exports = {
    getTweets
};
