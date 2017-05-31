'use strict';

// Namespace
const ns = 'TWITTER_';

// Action Types
const TWEETS = `${ns}TWEETS`;
const FETCHING = `${ns}FETCHING`;
const ERROR = `${ns}ERROR`;

// Initial State
const initialState = {
    tweets: [],
    fetching: false,
    error: ''
};

// Reducer

/**
 * @function reducer
 * @param {Object} state 
 * @param {Object} action
 * @return {Object} state
 */
export default function reducer (state = initialState, action) {
    switch (action.type) {
        case TWEETS:
            return {
                ...state,
                tweets: action.tweets,
                error: ''
            };
        case FETCHING:
            return {
                ...state,
                fetching: action.fetching
            }
        case ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
};

// Action Creators

/**
 * @function updateTweets
 * @param {Array} tweets
 * @return {Object}
 */
export const updateTweets = (tweets) => ({ type: TWEETS, tweets });

/**
 * @function isFetching
 * @param {Boolean} fetching
 * @return {Object}
 */
export const isFetching = (fetching) => ({ type: FETCHING, fetching });

/**
 * @function hasError
 * @param {string} error
 * @return {Object} 
 */
export const hasError = (error) => ({ type: ERROR, error });

/**
 * @function getTweets
 * @param {String} handle
 * @return {Function} thunk
 */
export const getTweets = (handle) => {
    return (dispatch, getState, api) => {
        dispatch(isFetching(true));
        api.fetchTweets(handle).then((tweets) => {
            dispatch(isFetching(false));
            dispatch(updateTweets(tweets));
        }).catch((err) => {
            dispatch(isFetching(false));
            dispatch(hasError(`No Tweets Found For Twitter Handle ${handle}!!`));
        });
    };
};



