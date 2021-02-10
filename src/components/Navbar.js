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
		display: 'flex',
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

	return (
		<ThemeProvider theme={theme}>
			<nav className='navbar'>
				<div className='nav-brand'>
					<img src={logo} alt='' />
				</div>

				<button className='toggle' onClick={toggleHandler}>
					<FaBars />
				</button>
				<div>
					<div className={classes.navGrid} id='nav-group'>
						<div className='nav-item'>
							<Typography
								variant='body1'
								style={{ margin: '1rem 0', color: 'black' }}>
								<a> Product</a>
							</Typography>
							<div className='hidden'>
								<a href=''> Subscription Management</a>

								<a href=''> Billing Automation</a>

								<a href=''> Recurring Payments</a>

								<a href=''> Accounting & Taxes</a>

								<a href=''> Reporting & Analytics</a>
							</div>
						</div>
						<div className='nav-item'>
							<Typography
								variant='body1'
								style={{ margin: '1rem 0', color: 'black' }}>
								<a>Solutions</a>
							</Typography>
							<div className='hidden'>
								<Typography
									variant='body2'
									style={{ margin: '1rem 0', color: 'black' }}>
									BY ROLE
								</Typography>
								<a href=''>Finance</a>

								<a href=''> Sales</a>
								<a href=''> RevOps</a>
								<Typography
									variant='body2'
									style={{ margin: '1rem 0', color: 'black' }}>
									BY INDUSTRY
								</Typography>
								<a href=''> B2B SaaS</a>
								<a href=''> Ecommerce</a>
								<a href=''> E-learning </a>
								<a href=''> Publishing</a>
								<Typography
									variant='body2'
									style={{ margin: '1rem 0', color: 'black' }}>
									BY STRATEGY
								</Typography>
								<a href=''> Roll Out New Pricing </a>

								<a href=''> Expand Globally</a>

								<a href=''> Move Upmarket</a>

								<a href=''> Shift to Subscriptions</a>
								<Typography
									variant='body2'
									style={{ margin: '1rem 0', color: 'black' }}>
									BY BUSINESS SIZE
								</Typography>
								<a href=''> Startup </a>

								<a href=''> Scaleup </a>

								<a href=''>Enterprise</a>
								<Typography
									variant='body2'
									style={{ margin: '1rem 0', color: 'black' }}>
									BY BUSINESS MODEL
								</Typography>
								<a href=''> Self-serve</a>

								<a href=''> Sales-driven</a>
								<Typography
									variant='body2'
									style={{ margin: '1rem 0', color: 'black' }}>
									BY GEOGRAPHY
								</Typography>
								<a href=''> Europe</a>
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
