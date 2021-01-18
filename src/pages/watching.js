import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const WatchingPage = () => {
	return (
		<Layout>
			<SEO title="watching / recently watched" />
			<h3>watching / recently watched</h3>
			<p>
				<a href="https://movies.disney.com/soul" target="_blank" rel="noreferrer">soul</a><br />
				<a href="https://www.codedbias.com" target="_blank" rel="noreferrer">coded bias</a>
			</p>
		</Layout>
	);
};

export default WatchingPage;
