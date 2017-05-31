'use strict';

const api = require('../utils/api');
const _ = require('lodash');
const normalise = require('../utils/normaliser').bind(null, {
    name: 'user.name',
    handle: 'user.screen_name',
    avatar: 'user.profile_image_url',
    text: 'text',
    url: 'entities.urls[0].url',
    id: 'id'
});
const COUNT = 10;

/**
 * Queries twitter for a users posts
 * @function twitterHandler
 * @param {Object} req 
 * @param {Object} res 
 */
const twitterHandler = (req, res) => {
    const query = encodeURIComponent(`${req.query.handle}`);
    const count = _.parseInt(req.query.count);

    api.getTweets(query, count || COUNT).then((tweets) => {
        res.json(tweets.map(tweet => normalise(tweet)));
    }).catch((err) => {
        res.status(400).send(err);
    });
};

module.exports = twitterHandler;
