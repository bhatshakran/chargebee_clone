import React, { useState } from 'react';
import {
	createMuiTheme,
	ThemeProvider,
	makeStyles,
} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { FaBars } from 'react-icons/fa';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import logo from '../images/chargebee-logo-black.svg';

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

const useStyles = makeStyles({
	root: {
		background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
		color: 'white',
		padding: '4rem',
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	navGrid: {
		borderRadius: '5px',
		marginRight: '0.3rem',
		marginTop: '0.3rem',
		padding: '1rem',
		border: '1px solid black',
	},
});

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(true);
	const classes = useStyles();

	function toggleHandler() {
		setShowMenu(!showMenu);
		document.getElementById('nav-group').style.display = 'block';
		if (!showMenu) {
			document.getElementById('nav-group').style.display = 'none';
		}
	}

	function hoverHandler(e) {
		const hidden = e.target.parentNode.nextSibling;

		hidden.style.display = 'block';
	}
	function leaveHandler(e) {
		const hidden = e.target.children[1];
		const nextHidden = e;
		console.log(e);
		hidden.style.display = 'none';
	}
	// window.addEventListener('resize', () => {
	// 	if (window.innerWidth <= '800') {
	// 		const items = document.querySelectorAll('.nav-item');
	// 		const itemsArray = Array.from(items);
	// 		itemsArray.forEach(item => {

	// 	}
	// });
	return (
		<ThemeProvider theme={theme}>
			<nav>
				<div className='nav-brand'>
					<img src={logo} alt='' />
				</div>

				<button className='toggle' onClick={toggleHandler}>
					<FaBars />
				</button>
				<div>
					<div className={classes.navGrid} id='nav-group'>
						<div className='nav-item' onMouseLeave={leaveHandler}>
							<Typography
								variant='body1'
								style={{ margin: '1rem 0', color: 'black' }}>
								<a onMouseOver={hoverHandler}> Product</a>
							</Typography>
							<div className='hidden'>
								Subscription Management
								<br />
								Billing Automation
								<br />
								Recurring Payments
								<br />
								Accounting & Taxes
								<br />
								Reporting & Analytics
							</div>
						</div>
						<div className='nav-item' onMouseLeave={leaveHandler}>
							<Typography
								variant='body1'
								style={{ margin: '1rem 0', color: 'black' }}>
								<a onMouseOver={hoverHandler}>Solutions</a>
							</Typography>
							<div className='hidden'>
								<Typography
									variant='body2'
									style={{ margin: '1rem 0', color: 'black' }}>
									BY ROLE
								</Typography>
								Finance
								<br /> Sales
								<br /> RevOps
								<Typography
									variant='body2'
									style={{ margin: '1rem 0', color: 'black' }}>
									BY INDUSTRY
								</Typography>
								B2B SaaS
								<br /> Ecommerce
								<br /> E-learning
								<br /> Publishing
								<Typography
									variant='body2'
									style={{ margin: '1rem 0', color: 'black' }}>
									BY STRATEGY
								</Typography>
								Roll Out New Pricing
								<br />
								Expand Globally
								<br />
								Move Upmarket
								<br />
								Shift to Subscriptions
								<Typography
									variant='body2'
									style={{ margin: '1rem 0', color: 'black' }}>
									BY BUSINESS SIZE
								</Typography>
								Startup <br />
								Scaleup <br />
								Enterprise
								<Typography
									variant='body2'
									style={{ margin: '1rem 0', color: 'black' }}>
									BY BUSINESS MODEL
								</Typography>
								Self-serve
								<br /> Sales-driven
								<Typography
									variant='body2'
									style={{ margin: '1rem 0', color: 'black' }}>
									BY GEOGRAPHY
								</Typography>
								Europe
							</div>
						</div>
						<div className='nav-item'>
							<Typography
								variant='body1'
								style={{ margin: '1rem 0', color: 'black' }}>
								Customers
							</Typography>
						</div>
						<div className='nav-item'>
							<Typography
								variant='body1'
								style={{ margin: '1rem 0', color: 'black' }}>
								Pricing{' '}
							</Typography>
						</div>
						<div className='nav-item'>
							<Typography
								variant='body1'
								style={{ margin: '1rem 0', color: 'black' }}>
								{' '}
								Resources
							</Typography>
						</div>
					</div>
				</div>
			</nav>
		</ThemeProvider>
	);
};

export default Navbar;
