import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import Sparrows from '../images/sparrows.gif'

const OfTheDayPage = () => {
	return (
		<Layout>
			<SEO title="__ of the day" />
			<h3>spontaneous and random thoughts, not daily</h3>
			<p>2012??: in chinese, 日落 = sunset, while 晚霞 = the sky of a sunset</p>
			<p>201124: sparrow flight (note the up-and-down movement)</p>
			<img src={Sparrows}></img>
		</Layout>
	);
};

export default OfTheDayPage;
