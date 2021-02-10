import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import revenue from '../images/revenue-management.svg';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import hubspot from '../images/hubspot.png';
import paypal from '../images/paypal.png';
import intact from '../images/intact.png';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './Banner';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const RevenueStack = () => {
	return (
		<ThemeProvider theme={theme}>
			<Wrapper>
				<div className='outer-design'>
					<div className='inner-design'></div>
				</div>
				<div className='inside'>
					<Typography variant='h2' className='inside_item big'>
						Works With Your Revenue Management Stack
					</Typography>
					<Typography variant='subtitle1' className='inside_item'>
						Managing sales, payments, customer experience or your books: if it
						affects your revenue cycle, Chargebee works with it.
					</Typography>
					<img src={revenue} alt='' className='inside_item' />
				</div>
				<Grid container spacing={3} className='article-grid'>
					<Grid item className='items' xs={12} lg={4}>
						<Typography variant='body1' className='top'>
							Quote-to-Cash Automation
						</Typography>
						<Typography variant='h5'>Powers Sales and Marketing CRM</Typography>
						<img src={hubspot} alt='' />
						<Typography variant='body1'>
							Handle quotes, approvals, acceptance, and collections seamlessly
							from within the CRM.
						</Typography>
						<Button
							variant='contained'
							color='secondary'
							className='animated'
							endIcon={<ArrowForwardIcon />}>
							Learn More
						</Button>
					</Grid>
					<Grid item className='items' xs={12} lg={4}>
						<Typography variant='body1' className='top'>
							Offer More Payment Methods
						</Typography>
						<Typography variant='h5'>25+ Payment Gateways</Typography>
						<img src={paypal} alt='' />
						<Typography variant='body1'>
							Accept payments across a wide array of gateways, geographies, and
							currencies.
						</Typography>
						<Button
							variant='contained'
							color='secondary'
							className='animated'
							endIcon={<ArrowForwardIcon />}>
							Learn More
						</Button>
					</Grid>
					<Grid item className='items' xs={12} lg={6}>
						<Typography variant='body1' className='top'>
							Streamline Finance Operations
						</Typography>
						<Typography variant='h5'>Syncs with Accounting Software</Typography>
						<img src={intact} alt='' />
						<Typography variant='body1'>
							Reconcile books in seconds, handle compliance, and recognize
							revenue painlessly.
						</Typography>
						<Button
							variant='contained'
							color='secondary'
							className='animated'
							endIcon={<ArrowForwardIcon />}>
							Learn More
						</Button>
					</Grid>
				</Grid>
			</Wrapper>
		</ThemeProvider>
	);
};

export default RevenueStack;

const Wrapper = styled.section`
	background: #fff;
	min-height: 800px;
	width: 100%;
	overflow: hidden;
	.outer-design {
		clip-path: polygon(0% 30px, 100% 0%, 100% 100%, 0% 100%);
		overflow: hidden;
		background: #8a2be2;
		height: 100px;
		width: 100%;
	}
	.inner-design {
		clip-path: polygon(0% 33px, 100% 15px, 100% 100%, 0% 100%);
		overflow: hidden;
		background: #371b81;
		height: 100%;
	}
	.inside {
		min-height: 800px;
		background: #371b81;
		display: flex;
		flex-direction: column;
		align-items: Center;
		padding-top: 15rem;
		justify-content: center;
		color: #fff;
	}
	.inside img {
		max-width: 900px;
	}
	.inside_item {
		margin: 0 2rem;
		max-width: 600px;
	}
	.big {
		font-size: 3rem;
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
		max-width: calc(100% - 4rem);
	}
	.items img {
		width: 100%;
		max-width: 300px;
		margin: 1rem 0;
	}
	button {
		margin: 1rem 0;
		text-transform: capitalize;
		color: blue;
	}
	@media screen and (min-width: 1280px) {
		.big {
			font-size: 4rem;
		}
		.outer-design {
			clip-path: polygon(0% 60%, 100% 10px, 100% 100%, 0% 100%);
		}
		.inner-design {
			clip-path: polygon(0% 60%, 100% 30px, 100% 100%, 0% 100%);
		}
		.items {
			margin: 0 6rem;
		}
	}
`;
