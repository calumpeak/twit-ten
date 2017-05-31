'use strict';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'ducks';
import thunk from 'redux-thunk';
import api from 'utils/api';

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument(api)));

export default store;
