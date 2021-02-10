import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import logo from '../images/logo.svg';

const Comments = () => {
	return (
		<CommentWrapper>
			<Typography variant='h4' style={{ margin: '0 1rem' }}>
				Great Products Deserve Hyper Growth. Chargebee Makes it Easy.
			</Typography>
			<div className='various-opts' style={{ margin: '0 1rem' }}>
				<Select
					style={{
						color: '#fff',
						background: 'rebeccapurple',
						width: '100%',
						margin: ' 1rem 0',
						borderRadius: '12px',
						height: '50px',
						fontSize: '1.3rem',
					}}>
					<MenuItem value='Rethink Pricing'>Rethink Pricing</MenuItem>
					<MenuItem value='Automate Finops'>Automate Finops</MenuItem>
					<MenuItem value='Go Global'>Go Global</MenuItem>
				</Select>
			</div>
			<div className='design_outer'>
				<div className='design_inner'></div>
			</div>

			<div className='drawboard'>
				<div className='green-bg'>
					<Typography variant='subtitle2'>
						{' '}
						<strong>Acheived</strong>{' '}
					</Typography>
					<Typography variant='h3'>20x</Typography>
					<Typography variant='h6'>ROI with Chargebee</Typography>
				</div>
				<div className='body'>
					<Typography variant='h6'>
						“Chargebee has all the concepts of metered billing, flat and tiered
						pricing. If we decided to change the way we want to bill or the
						price structure, it would be accounted for, excuse the pun.”
					</Typography>
				</div>
				<div className='bottom'>
					<div className='author'>
						<Typography variant='h6'>Nathan Field</Typography>
						<Typography variant='subtitle1'>Marketing</Typography>
					</div>
					<div className='logo'>
						<img src={logo} alt='' />
					</div>
				</div>
			</div>
		</CommentWrapper>
	);
};

export default Comments;

const CommentWrapper = styled.div`
	background: #371b81;
	color: #fff;
	text-align: center;
	position: relative;
	border-top: 1px solid rgb(96, 96, 96);
	padding-top: 1rem;
	.design_outer {
		margin: 12rem 0 0 0;
		background: #8a2be2;
		height: 80px;
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
	}

	.design_inner {
		background: #371b81;
		height: 100%;
		clip-path: polygon(0 0, 100% 0, 100% 80%, 0 70%);
	}
	.drawboard {
		background: #fff;
		color: black;
		border-radius: 22px;
		position: absolute;
		margin: 0 2rem;
		bottom: -13%;
		transform: translateY(50%);
		z-index: 1;
		box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.5);
	}
	.green-bg {
		background: #357a7a;
		padding: 2rem 1rem;
		border-radius: 22px 22px 0 0;
		text-align: left;
		color: #fff;
	}
	.body,
	.author,
	.logo {
		padding: 2rem 1rem;
	}
	.bottom {
		display: flex;
		justify-content: space-between;
	}
	.author {
		text-align: left;
		width: 40%;
		margin: 0;
	}
	.logo {
		text-align: right;
		width: 120px;
	}
	.logo img {
		width: 100%;
	}
`;
