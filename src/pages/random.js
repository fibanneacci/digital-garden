import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const RandomPage = () => {
	return (
		<Layout>
			<SEO title="random" />
            <div style={{ height: '30px' }} />
			<h3>random</h3>
            <iframe height="400px" width="100%" src="https://repl.it/@anli0/quote?lite=true&outputonly=1" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
			
		</Layout>
	);
};

export default RandomPage;
