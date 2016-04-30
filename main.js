import React, { Component } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import App from './app/components/app.js'

import geApp from './app/reducers'

let store = createStore(geApp);

/*
export default class Main extends Component {
	render() {
		return (
			<Provider store={store}>
				<App />
			</Provider>
		);
	}
}
*/
const Main = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	)
};

export default Main