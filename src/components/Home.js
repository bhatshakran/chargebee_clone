import React from 'react';
import Banner from './Banner';
import SwipeShow from './SwipeShow';
import Highlights from './Highlights';
// import Animation from './Animation';
import RevenueStack from './RevenueStack';
import TalkToUs from './TalkToUs';
import Comments from './Comments';
import StillUnsure from './StillUnsure';
import Footer from './Footer';

const Home = () => {
	return (
		<>
			<Banner />
			<SwipeShow />
			<Highlights />
			{/* <Animation /> */}
			<RevenueStack />
			<TalkToUs />
			<Comments />
			<StillUnsure />
			<Footer />
		</>
	);
};

export default Home;
