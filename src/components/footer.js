import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Footer = ({ siteTitle }) => (
	<footer
		style={{
			marginTop: `2rem`
		}}
	>
        <b>Last cultivated on 210117.</b>{` `}
		© {new Date().getFullYear()}, <a href="https://anli.io" target="_blank" rel="noreferrer">Anne Li</a>. Built with
		{` `}
		<a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">
			Gatsby
		</a>.
	</footer>
);

export default Footer;
