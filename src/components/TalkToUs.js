import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { theme } from './Banner';
import { ThemeProvider } from '@material-ui/core/styles';
import styled from 'styled-components';

const TalkToUs = () => {
	return (
		<ThemeProvider theme={theme}>
			<TalkWrapper>
				<Typography
					variant='h6'
					style={{ maxWidth: '400px', margin: '0 auto' }}>
					Talk to us today about your revenue workflow
				</Typography>
				<Button
					variant='contained'
					color='primary'
					size='large'
					className='talk-btn animated'
					endIcon={<ArrowForwardIcon />}>
					Schedule a Demo
				</Button>
			</TalkWrapper>
		</ThemeProvider>
	);
};

export default TalkToUs;

const TalkWrapper = styled.div`
	background: #371b81;
	color: #fff;
	text-align: center;
	padding: 2rem;

	.talk-btn {
		margin: 2rem 0;
	}
`;
