import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import Home from './HomeComponents/Home';



class MainRouter extends Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route exact path='/' component={Home} />

					{/* <Testers /> */}

				</Switch>
			</HashRouter>
		);
	}
}

export default MainRouter;