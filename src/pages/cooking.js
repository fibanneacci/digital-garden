import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import Jidanxihongshi from '../images/jidanxihongshi.jpg'
import Ramen from '../images/ramen.jpg'

const FoodPage = () => {
	return (
		<Layout>
			<SEO title="cooking / recently cooked" />
			<h3>cooking / recently cooked</h3>
			<p>鸡蛋炒西红柿, egg & tomato stir-fry</p>
			<img src={Jidanxihongshi} style={{ display: `block`, width: `500px` }}></img>
			<p>yes this is just ramen</p>
			<img src={Ramen} style={{ display: `block`, width: `500px` }}></img>
		</Layout>
	);
};

export default FoodPage;
