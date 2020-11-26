import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: not found" />
		<p>
			oops...there's nothing here. :(<br />
			<br />
			perhaps there will be...someday? :P
		</p>
	</Layout>
);

export default NotFoundPage;
