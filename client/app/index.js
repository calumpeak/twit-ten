'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import eventPlugin from 'react-tap-event-plugin';
import store from '../store';
import Twitter from './twitter';

eventPlugin();

/**
 * Render Application structure
 * Pass any providers & dependencies
 * 
 * @function App
 * @return {Component} App
 */
const App = () => (
    <Provider store = {store}>
        <MuiThemeProvider>
            <Twitter />
        </MuiThemeProvider>
    </Provider>
);

export default App;
