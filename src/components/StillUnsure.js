import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { theme } from './Banner';
import { ThemeProvider } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const StillUnsure = () => {
	return (
		<ThemeProvider theme={theme}>
			<Still>
				<Typography variant='h5'>
					<strong>
						{' '}
						Still unsure? Step Inside and See What The Future Looks Like.
					</strong>
				</Typography>
				<Button
					variant='contained'
					color='primary'
					className='animated'
					endIcon={<ArrowForwardIcon />}>
					Schedule a Demo
				</Button>
			</Still>
		</ThemeProvider>
	);
};

export default StillUnsure;

const Still = styled.div`
	position: relative;
	top: 350px;
	text-align: Center;
	padding: 2rem;
	Button {
		margin: 1rem;
		padding: 1rem 3rem;
	}

	@media screen and (max-width: 600px) {
		top: 450px;
	}
`;
