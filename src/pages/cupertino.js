import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BirdFlightPage = () => {
    return (
		<Layout>
			<SEO title="bird flight" />
			<p>
				in june 2019, my dad and i travelled to san jose / cupertino (? i really don't know how the south bay area works
				geographically, lol). i was attending an apple conference, and i don't remember why exactly my dad wanted to go,
				but he ended up getting an airbnb in cupertino and exploring local restaurants, libraries, and the apple visitor
				center that week. he spent whole days walking around or riding the bus.<br /><br />
				afterwards, when he was recounting all the places he'd visited and the things he'd done, one remark stood out
				to me: he told me he thought he was the only relaxed person in the entire city. i think this is a pretty
				interesting case study, since it's quite rare (and takes privilege, for sure) to get the opportunity to absorb a
				city like cupertino from a purely observational perspective.<br /><br /><br /><br />
				(these ramblings don't even qualify as half-baked, lmao)
			</p>
		</Layout>
	);
};

export default BirdFlightPage;