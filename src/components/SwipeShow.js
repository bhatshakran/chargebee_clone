import React from 'react';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import freedom from '../images/freedom.png';
import okta from '../images/okta.svg';
import knewton from '../images/knewton.svg';
import fworks from '../images/fworks.svg';
import percona from '../images/percona.png';
import { Typography } from '@material-ui/core';

const SwipeShow = () => {
	let slideIndex = 0;
	window.addEventListener('load', () => carousel());

	function carousel() {
		var i;
		let x = document.querySelectorAll('.swiper-slide');
		for (i = 0; i < x.length; i++) {
			x[i].style.display = 'none';
		}
		slideIndex++;
		if (slideIndex > x.length) {
			slideIndex = 1;
		}

		// console.log(slideIndex);

		x[slideIndex - 1].style.display = 'block';

		setTimeout(carousel, 3000);
	}

	return (
		<Swipe>
			<div className='swiper-container'>
				{/* <div className='prev'>
					<ArrowBackIosIcon />
				</div> */}
				<Typography
					variant='body1'
					style={{ textAlign: 'center', margin: '1rem 0' }}>
					Thousands of Scaling SaaS Businesses Love Us
				</Typography>
				<div className='swiper-slide'>
					{' '}
					<img src={okta} alt='' />
				</div>
				<div className='swiper-slide'>
					<img src={percona} alt='' />
				</div>
				<div className='swiper-slide'>
					<img src={knewton} alt='' />
				</div>
				<div className='swiper-slide'>
					<img src={fworks} alt='' />
				</div>
				<div className='swiper-slide'>
					<img src={freedom} alt='' />
				</div>
				{/* <div className='next'>
					<ArrowForwardIosIcon />
				</div> */}
			</div>
		</Swipe>
	);
};

export default SwipeShow;

const Swipe = styled.div`
	.swiper-container {
		width: 100%;
		height: 100px;
	}
	.swiper-slide {
		display: none;
		width: 100%;
		min-height: 100px;
		text-align: center;
	}
	.swiper-slide img {
		width: 200px;
		height: 100%;
	}
	.prev,
	.next {
		position: absolute;
		z-index: 1;
		top: 50%;
		transform: translateY(-50%);
	}

	.prev {
		left: 20px;
	}
	.next {
		right: 0;
	}
`;
