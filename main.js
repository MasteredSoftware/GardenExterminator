import React, { Component } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import App from './app/containers/app.js'

import geApp from './app/reducers'

let store = createStore(geApp);

const Main = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	)
};

export default Main