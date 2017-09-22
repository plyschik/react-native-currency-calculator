import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './src/reducers';
import Application from './src/Application';

class rnccGIT extends Component {
    store = createStore(
        reducers,
        applyMiddleware(thunk)
    );

    render() {
        return (
            <Provider store={ this.store }>
                <Application />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('rnccGIT', () => rnccGIT);