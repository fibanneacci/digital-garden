import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: not found" />
		<p>
			this place doesn't exist!
		</p>
	</Layout>
);

export default NotFoundPage;
