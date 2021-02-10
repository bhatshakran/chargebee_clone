import React from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { theme } from './Banner';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Highlight = ({ dp, top, data }) => {
	const useStyles = makeStyles({
		highlight: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'flex-start',
			flexDirection: 'column',
			margin: '2rem 0',
			['@media (min-width:1280px)']: {
				// eslint-disable-line no-useless-computed-key
				display: 'grid',
				gridTemplateColumns: 'repeat(2, 50%)',
				gridTemplateRows: 'repeat(9, minmax(40px, 50px))',
				gridRowGap: '0.7rem',
				margin: '5rem',
				justifyContent: 'flex-end',
			},
		},

		li: {
			listStyleType: 'none',
			margin: '0',
			display: 'flex',
			alignItems: 'flex-start',
			textAlign: 'left',
			['@media (min-width:1280px)']: {
				// eslint-disable-line no-useless-computed-key
				width: '50%',
			},
		},
		body: {
			marginTop: '2rem',
			width: '60%',
			textAlign: 'justify',
			['@media (min-width:1280px)']: {
				// eslint-disable-line no-useless-computed-key
				gridColumn: '1/2',
				gridRow: '3/6',
				margin: '0',
			},
		},
		dp: {
			width: '90%',
			alignSelf: 'left',
			['@media (min-width:1280px)']: {
				// eslint-disable-line no-useless-computed-key
				gridColumn: '2/3',
				gridRow: '1/10',
				minWidth: '500px',
			},
		},
		heading: {
			textAlign: 'left',
			['@media (min-width:1280px)']: {
				// eslint-disable-line no-useless-computed-key
				gridColumn: '1/2',
				gridRow: '2/3',
			},
		},
		top: {
			['@media (min-width:1280px)']: {
				// eslint-disable-line no-useless-computed-key
				gridColumn: '1/2',
				gridRow: '1/2',
			},
		},
		ul: {
			marginTop: '3rem',
			['@media (min-width:1280px)']: {
				// eslint-disable-line no-useless-computed-key
				gridColumn: '1/2',
				gridRow: '6/8',
				display: 'grid',
				gridTemplateColumns: 'repeat(2, 50%)',
				gridRowGap: '0.5rem',
				justifyContent: 'start',
				// alignItems: 'flex-start',
				margin: '0',
				padding: '0',
			},
		},
		btn: {
			margin: '1rem 0 ',
			['@media (min-width:1280px)']: {
				// eslint-disable-line no-useless-computed-key
				gridColumn: '1/2',
				gridRow: '9/10',
				maxWidth: '150px',
				margin: '0',
			},
		},
	});
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<Grid
				item
				xs={12}
				md={8}
				lg={7}
				style={{ textAlign: 'center' }}
				className={classes.highlight}>
				<Typography
					variant='body1'
					style={{ textAlign: 'left', color: '#a784e8' }}
					className={classes.top}>
					{top}
				</Typography>
				<Typography
					variant='h5'
					style={{ fontWeight: '900' }}
					className={classes.heading}>
					{data.heading}
				</Typography>
				<img src={dp} alt='' className={classes.dp} />
				<Typography variant='body1' className={classes.body}>
					{data.body}
				</Typography>
				<ul className={classes.ul}>
					{data.features.map(feature => {
						return (
							<li key={feature} className={classes.li}>
								<CheckIcon style={{ color: 'green' }} />
								<Typography variant='body1'>{feature}</Typography>
							</li>
						);
					})}
				</ul>
				<Button
					variant='outlined'
					color='primary'
					className={`${classes.btn} animated`}
					endIcon={<ArrowForwardIcon />}>
					Learn More
				</Button>
			</Grid>
		</ThemeProvider>
	);
};

export default Highlight;
