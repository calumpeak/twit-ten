'use strict';

const _ = require('lodash');

/**
 * Normalises an object based upon the specified model paths
 * (use lodash.get dot notation paths)
 * If it can't find a value will set undefined to that key
 * 
 * @function normalise
 * @param {Object} model keys to paths
 * @param {Object} object to normalise
 * @return {Object}
 */
const normalise = (model, obj) => {
    const normalised = {};
    
    _.forOwn(model, (path, key) => {
        normalised[key] = _.get(obj, path, undefined);
    });

    return normalised;
};

module.exports = normalise;
