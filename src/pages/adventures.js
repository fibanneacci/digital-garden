import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AdventuresPage = () => {
	return (
		<Layout>
			<SEO title="adventures" />
			<p>
				(todo: interactive map)<br />
				<br />
				<b>[ autumn quarter 2020 ]</b>
				<br />
				<i>location: little rock, ar</i> 🏠<br />
				<br />
				classes:<br />
				<b>cs 106b: programming abstractions (5)</b>
				<br />
				<br />
				<b>symsys 1: minds and machines (4) ❤️</b>
				<br />
				we covered cogsci concepts from lots of cool perspectives (cs / ai, philosophy, developmental psych,
				linguistics, and more). before i came to stanford, i was under the impression that symsys is "built
				around cs". this class made me realize it can be built around anything you want!<br />
				<br />
				<b>poli 150a: data sci for politics (5)</b>
				<br />
				<br />
				<b>poli 52k: tech and the 2020 election (1)</b>
				<br />
				<br />
				<b>humrts 194a: environmental justice colloquium (1)</b>
				<br />
				<br />
				other stuff:<br />
				<b>the daily, rewired</b> &#8211; combination of tech, data, podcasts
			</p>
		</Layout>
	);
};

export default AdventuresPage;
