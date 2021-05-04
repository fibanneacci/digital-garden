import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const RandomPage = () => {
	return (
		<Layout>
			<SEO title="random" />
            <div style={{ height: '30px' }} />
			<h3>might put small & spontaneous coding projects here!</h3>
            please check back later :)
		</Layout>
	);
};

export default RandomPage;
