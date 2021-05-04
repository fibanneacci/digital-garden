import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import Sparrows from '../images/sparrows.gif'

const TimePage = () => {
	return (
		<Layout>
			<SEO title="time" />
            <div style={{ height: '30px' }} />
			<p>201124: sparrow flight</p>
			<img alt='sparrows flying up and down in a blob' src={Sparrows}></img>
		</Layout>
	);
};

export default TimePage;
