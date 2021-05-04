import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const WordsPage = () => {
	return (
		<Layout>
			<SEO title="words" />
            <div style={{ height: '30px' }} />
			<h3>thoughts and words i have nowhere else to put</h3>
			<p>
				please check back later :)
			</p>
		</Layout>
	);
};

export default WordsPage;
