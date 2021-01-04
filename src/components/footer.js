import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Footer = ({ siteTitle }) => (
	<footer
		style={{
			marginTop: `2rem`
		}}
	>
        <b>Last cultivated on 210103.</b>{` `}
		© {new Date().getFullYear()}, Anne Li. Built with
		{` `}
		<a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">
			Gatsby
		</a>.
	</footer>
);

export default Footer;
