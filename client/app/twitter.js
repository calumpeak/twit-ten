'use strict';

import 'styles/twitter.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'ducks/twitter';
import TwitterCard from 'components/twitter-card';
import CircularProgress from 'material-ui/CircularProgress';

// Regex to pull handle out of url path
const HANDLE = /\/(.*?)-/g;

/**
 * Twitter class
 * Handles rendering of twitter cards and fetching data
 * on component mount
 * 
 * @class Twitter
 */
class Twitter extends Component {
    constructor (props) {
        super(props);
    }

    /**
     * On mount grab the current location pathname
     * and parse the twitter handle out of it
     * then go get the tweets
     */
    componentDidMount () {
        const { getTweets } = this.props;
        const { pathname } = window.location;
        const handle = HANDLE.exec(pathname)[1];
    
        if (!handle.length) {
            return;
        }

        getTweets(handle);
    }

    render () {
        const { tweets, fetching, error } = this.props;

        return (
            <div className = 'tileContainer'>
                {tweets.map((tweet) => (
                    <div key = {tweet.id} className = 'tile'>
                        <TwitterCard {...tweet} />
                    </div>
                ))}
                {fetching ? 
                    <div className = 'progressContainer'>
                        <CircularProgress size={60} />
                    </div> 
                : null}
                {error ? error : null}
            </div>
        );
    }
}

const mapStateToProps = ({ twitter }) => ({
    ...twitter
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Twitter);



