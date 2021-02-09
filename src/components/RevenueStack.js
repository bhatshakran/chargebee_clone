import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import revenue from '../images/revenue-management.svg';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import hubspot from '../images/hubspot.png';
import paypal from '../images/paypal.png';
import intact from '../images/intact.png';

const RevenueStack = () => {
	return (
		<Wrapper>
			<div className='inside'>
				<Typography variant='h4' className='inside_item'>
					Works With Your Revenue Management Stack
				</Typography>
				<Typography variant='subtitle1' className='inside_item'>
					Managing sales, payments, customer experience or your books: if it
					affects your revenue cycle, Chargebee works with it.
				</Typography>
				<img src={revenue} alt='' className='inside_item' />
			</div>
			<Grid container spacing={3} className='article-grid'>
				<Grid item className='items' xs={12} lg={6}>
					<Typography variant='body1' className='top'>
						Quote-to-Cash Automation
					</Typography>
					<Typography variant='h5'>Powers Sales and Marketing CRM</Typography>
					<img src={hubspot} alt='' />
					<Typography variant='body1'>
						Handle quotes, approvals, acceptance, and collections seamlessly
						from within the CRM.
					</Typography>
					<Button variant='contained'>Learn More</Button>
				</Grid>
				<Grid item className='items' xs={12} lg={6}>
					<Typography variant='body1' className='top'>
						Offer More Payment Methods
					</Typography>
					<Typography variant='h5'>25+ Payment Gateways</Typography>
					<img src={paypal} alt='' />
					<Typography variant='body1'>
						Accept payments across a wide array of gateways, geographies, and
						currencies.
					</Typography>
					<Button variant='contained'>Learn More</Button>
				</Grid>
				<Grid item className='items' xs={12} lg={6}>
					<Typography variant='body1' className='top'>
						Streamline Finance Operations
					</Typography>
					<Typography variant='h5'>Syncs with Accounting Software</Typography>
					<img src={intact} alt='' />
					<Typography variant='body1'>
						Reconcile books in seconds, handle compliance, and recognize revenue
						painlessly.
					</Typography>
					<Button variant='contained'>Learn More</Button>
				</Grid>
			</Grid>
		</Wrapper>
	);
};

export default RevenueStack;

const Wrapper = styled.section`
	background: #8a2be2;
	min-height: 800px;
	width: 100%;
	clip-path: polygon(0% 5%, 100% 0%, 100% 100%, 0% 100%);
	.inside {
		width: 100%;
		height: 800px;
		background: #371b81;
		clip-path: polygon(0% 10%, 100% 3%, 100% 100%, 0% 100%);
		display: flex;
		flex-direction: column;
		align-items: Center;
		justify-content: center;
		color: #fff;
	}
	.inside img {
		max-width: 900px;
	}
	.inside_item {
		margin: 0 2rem;
	}
	.article-grid {
		background: #371b81;
		color: #fff;
		padding: 2rem;
	}
	.top {
		color: #d9664c;
		font-weight: 100;
	}
	.items {
		width: calc(100% - 2rem);
	}
	.items img {
		width: 100%;
		max-width: 300px;
		margin: 1rem 0;
	}
	button {
		margin: 1rem 0;
	}
`;
