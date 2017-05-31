'use strict';

import 'whatwg-fetch';
const { fetch } = window; 

/**
 * Handles fetching of tweets from api endpoint
 * @function fetchTweets
 * @param {String} handle
 * @return {Promise} 
 */
const fetchTweets = (handle) => {
    return new Promise((resolve, reject) => {
        fetch(`/api/twitter?handle=${encodeURIComponent(handle)}`)
        .then(response => response.json())
        .then(body => {
            // fetch doesn't catch http errors...
            // Handle it ourselves
            if (body[0].code) {
                return reject(body);
            }

            resolve(body);
        })
        .catch(err => {
            reject(err);
        });
    });
};

export default {
    fetchTweets
};
