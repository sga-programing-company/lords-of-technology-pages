import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import HomePage from './pages/HomePage';

const App = () => {
	return (
		<Fragment>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact>
						<HomePage />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</Fragment>
	);
}

export default App;
