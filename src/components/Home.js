import React from 'react';
import Banner from './Banner';
import SwipeShow from './SwipeShow';
import Highlights from './Highlights';
// import Animation from './Animation';
import RevenueStack from './RevenueStack';
import TalkToUs from './TalkToUs';

const Home = () => {
	return (
		<>
			<Banner />
			<SwipeShow />
			<Highlights />
			{/* <Animation /> */}
			<RevenueStack />
			<TalkToUs />
		</>
	);
};

export default Home;
