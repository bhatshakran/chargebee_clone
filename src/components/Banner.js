import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#0010f0',
		},
		secondary: {
			main: 'rgb(0,0,0)',
		},
	},
});

const Banner = () => {
	return (
		<ThemeProvider theme={theme}>
			<BannerWrapper>
				<Typography variant='h4' className='banner-txt'>
					<span className='purple'>
						Subscription Billing & Revenue Operations{' '}
					</span>{' '}
					for Fast-growth B2B Saas
				</Typography>
				<Typography variant='body1' className='banner-body-txt'>
					Get the operational sophistication to achieve, sustain, and scale
					recurring revenue.
				</Typography>
				<Button
					variant='contained'
					size='large'
					className='sch-btn'
					endIcon={<ArrowForwardIcon />}>
					Schedule a Demo
				</Button>
				<Button
					variant='outlined'
					size='large'
					className='signUp-btn'
					color='primary'
					endIcon={<ArrowForwardIcon />}>
					Sign up for free
				</Button>
			</BannerWrapper>
		</ThemeProvider>
	);
};

export default Banner;

const BannerWrapper = styled.div`
	background-image: linear-gradient(to bottom, #f1f6f9, #fff);
	padding-top: 8rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	font-family: 'Noto Sans JP', sans-serif;
	font-weight: bolder;
	.banner-txt {
		font-weight: 900;
		margin: 0 2.5rem;
	}

	.purple {
		color: #5009d2;
	}
	.banner-body-txt {
		margin: 1rem 0.8rem;
		font-size: 1.2rem;
	}
	button {
		padding: 0.8rem 2.8rem;
		text-transform: capitalize;
		font-weight: 900;
	}
	.sch-btn {
		background: #5009d2;
		color: #fff;
		box-shadow: 1px 1px 24px 1px rgba(0, 0, 0, 0.5);
	}
	.signUp-btn {
		margin: 1.5rem 0;
	}
`;
