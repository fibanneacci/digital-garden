import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BirdFlightPage = () => {
	return (
		<Layout>
			<SEO title="bird flight" />
			<p>
				i took a video of a group of birds flying a few days ago (todo: link the actual video lmao)<br />
				<br />
				i was fascinated by the birds' flight, both individually and as a group. individually, they alternately flapped
				their wings and glided; as a group, they looked like a continually shape-shifting blob. i'm not sure what type
				of bird they were, but my dad tells me the sparrows in beijing he grew up watching flew like this.
			</p>
		</Layout>
	);
};

export default BirdFlightPage;
