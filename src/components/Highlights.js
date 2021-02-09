import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Highlight from './Highlight';
import recurring from '../images/recurring.svg';
import smarter from '../images/smarter.svg';
import streamline from '../images/streamline.svg';

const useStyles = makeStyles({
	root: {
		margin: '4rem 1rem 1rem 0',
		color: 'black',
		boxSizing: 'border-box',
		padding: '1rem',
	},
});

const Highlights = () => {
	const [heading, setHeading] = useState([
		'No more spreadsheet errors',
		'No more developer dependency',
		'No more lost opportunities',
	]);

	const [data, setData] = useState([
		{
			heading: 'Automate Recurring Billing',
			body:
				'Scale your SaaS through 480+ recurring billing scenarios that automate who you bill, when, and how. No humans, no spreadsheets, no missed payments!',
			features: [
				'Billing Schedules',
				'Proration & Invoicing',
				' Tax management',
				'Payment Methods',
			],
		},
		{
			heading: 'Smarter Subscription Management',
			body:
				'Experiment rapidly with pricing structures, product catalogs, and subscription lifecycles with a business-user-first experience.',
			features: [
				'Price modeling',
				'Product Catalog',
				' Trial management',
				'Lifecycle automation',
			],
		},
		{
			heading: 'Streamline Revenue Operations',
			body:
				'Plug revenue leaks by aligning GTM & Finance. Uncover growth opportunities across processes, geographies, and business models.',
			features: [
				'SaaS Analytics',
				'Quote-to-cash',
				' Order-to-revenue',
				'Revenue Recognition',
			],
		},
	]);
	const classes = useStyles();
	return (
		<Grid container justify='center' className={classes.root}>
			<Highlight dp={recurring} top={heading[0]} data={data[0]} />
			<Highlight dp={smarter} top={heading[1]} data={data[1]} />
			<Highlight dp={streamline} top={heading[2]} data={data[2]} />
		</Grid>
	);
};

export default Highlights;
