import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: not found" />
			<div style={{ height: '30px' }} />
		<h3>this place doesn't exist!</h3>
		<Link to='/'>go home</Link>.
	</Layout>
);

export default NotFoundPage;
