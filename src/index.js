import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import './assets/stylesheets/index.scss';
import Pokedex from './pokedex';
import configureStore from './store/store';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <Route path="/" component={Pokedex} />
        </HashRouter>
    </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');
    
    ReactDOM.render(<Root store={store} />, root);
});