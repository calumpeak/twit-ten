'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardMedia, CardText } from 'material-ui/Card';

/**
 * Renders out a card based twitter view
 * @function TwitterCard
 * @param {String} name 
 * @param {String} handle
 * @param {String} avatar
 * @param {String} text
 * @param {String} url
 * @returns {Component}
 */
const TwitterCard = ({ name, handle, avatar, text, url }) => (
    <div onClick = {() => url ? window.open(url) : null}>
        <Card style = {{height: '170px', overflow: 'hidden'}}>
            <CardHeader
                title = {name}
                subtitle = {`@${handle}`}
                avatar = {avatar}
            />
            <CardText>
                {text}
            </CardText>
        </Card>
    </div>
);

TwitterCard.propTypes = {
    name: PropTypes.string,
    handle: PropTypes.string,
    avatar: PropTypes.string,
    text: PropTypes.string,
    url: PropTypes.string,
}

export default TwitterCard;
