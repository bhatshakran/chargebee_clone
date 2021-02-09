import React from 'react';
import Banner from './Banner';
import SwipeShow from './SwipeShow';
import Highlights from './Highlights';
// import Animation from './Animation';
import RevenueStack from './RevenueStack';

const Home = () => {
	return (
		<>
			<Banner />
			<SwipeShow />
			<Highlights />
			{/* <Animation /> */}
			<RevenueStack />
		</>
	);
};

export default Home;
