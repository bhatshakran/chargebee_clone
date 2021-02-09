import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.scss';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
			</Switch>
		</div>
	);
}

export default App;
