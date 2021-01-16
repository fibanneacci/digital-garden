import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ReadingPage = () => {
	return (
		<Layout>
			<SEO title="reading / recently read" />
			<h3>reading / recently read (including school-related readings i particularly enjoyed / found interesting)</h3>
			<p>
				<a href="https://weaponsofmathdestructionbook.com" target="_blank" rel="noreferrer">weapons of math destruction</a> &#8211; read a short excerpt for cs182 w21, planning to read the rest soon!<br />
				<a href="https://communemag.com/optimize-what/" target="_blank" rel="noreferrer">optimize what?</a> &#8211; read for cs182 w21<br />
                <a href="https://www.newyorker.com/magazine/2021/01/04/is-substack-the-media-future-we-want" target="_blank" rel="noreferrer">is substack the media future we want?</a><br />
                <a href="https://poets.org/poem/small-needful-fact" target="_blank" rel="noreferrer">a small needful fact</a><br />
				<a href="https://wesdesilvestro.com/the-prestige-trap" target="_blank" rel="noreferrer">the prestige trap</a><br />
                occasionally rereading <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwilstjMh5juAhUQbq0KHRQ1DAcQFjARegQICRAC&url=https%3A%2F%2Fmedium.com%2F%40the_jennitaur%2Fhow-to-do-nothing-57e100f59bbb&usg=AOvVaw0Cau032BHvb6_sscwjMFrk" target="_blank" rel="noreferrer">how to do nothing</a>, because it always makes me feel peaceful lol
			</p>
		</Layout>
	);
};

export default ReadingPage;
