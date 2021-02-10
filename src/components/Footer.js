import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const Footer = () => {
	return (
		<FooterWrapper>
			<ul>
				<Typography variant='h6'>Product</Typography>
				<li>Subscription Management</li>
				<li>Recurring Billing and Invoicing</li>
				<li>Recurring Payments</li>
				<li>Accounting and Taxes</li>
				<li>SaaS Reporting</li>
				<li>Enterprise Billing</li>
				<li>Integrations</li>
			</ul>
			<ul>
				<Typography variant='h6'>Help & Support</Typography>
				<li> Security </li>
				<li> FAQs </li>
				<li> Status </li>
				<li> Product Documentation </li>
				<li> API Documentation </li>
				<li> Supported Payment Gateways </li>
				<li> Sitemap </li>
			</ul>
			<ul>
				<Typography variant='h6'>Resources</Typography>
				<li> Blog </li>
				<li> Compare Payment Gateways </li>
				<li> Tackling Payment Failures </li>
				<li> Enterprise Billing Guide </li>
				<li> Webinars </li>
				<li> Glossaries </li>
			</ul>
			<ul>
				<Typography variant='h6'>Company</Typography>
				<li> Customers </li>
				<li> Partners </li>
				<li> Careers </li>
				<li> Press </li>
				<li> Terms </li>
				<li> Privacy </li>
			</ul>
		</FooterWrapper>
	);
};

export default Footer;

const FooterWrapper = styled.footer`
	position: relative;
	top: 400px;
	padding: 1rem;
	border-top: 1px solid gray;
	ul {
		list-style: none;
		margin: 1rem 0;
	}
	li {
		color: blue;
		font-family: 'Roboto';
		cursor: pointer;
		margin: 0.5rem 0;
	}
	li:hover {
		color: gray;
	}
	@media screen and (max-width: 600px) {
		top: 450px;
	}
`;
