import React from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
// import useMediaQuery from '@material-ui/core/useMediaQuery';

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
				margin: '5rem',
				justifyContent: 'flex-start',
			},
		},

		li: {
			listStyleType: 'none',
			margin: ' 0.5rem',
			display: 'flex',
			alignItems: 'center',
			textAlign: 'left',
		},
		body: {
			marginTop: '2rem',
			width: '60%',
			textAlign: 'justify',
			['@media (min-width:1280px)']: {
				// eslint-disable-line no-useless-computed-key
				gridColumn: '1/2',
				gridRow: '3/7',
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
			['@media (min-width:1280px)']: {
				// eslint-disable-line no-useless-computed-key
				gridColumn: '1/2',
				gridRow: '7/10',
			},
		},
	});
	const classes = useStyles();
	return (
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
			<ul style={{ marginTop: '3rem' }} className={classes.ul}>
				{data.features.map(feature => {
					return (
						<li key={feature} className={classes.li}>
							<CheckIcon style={{ color: 'green' }} />
							<Typography variant='body1'>{feature}</Typography>
						</li>
					);
				})}
			</ul>
		</Grid>
	);
};

export default Highlight;
