import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import '../styles/index.scss';

const IndexPage = () => (
	<Layout>
		<SEO title="home" />
		<p>
			welcome to my little corner of the internet! my small &/ half-baked projects, ideas, and ramblings live here. (if by any chance
			they ever get large &/ fully-baked, they might end up{' '}
			<a href="https://anli.io/portfolio" target="_blank" rel="noreferrer">
				here
			</a>.)<br /><br />
			inspired by{' '}
			<a
				href="https://www.technologyreview.com/2020/09/03/1007716/digital-gardens-let-you-cultivate-your-own-little-bit-of-the-internet/"
				target="_blank"
				rel="noreferrer"
			>
				this article
			</a>.
		</p>
		<div style={{ border: `dashed #ffbf00`, padding: `0 17px 0 17px`, marginTop: `20px` }}>
			<p>
				<p>🌻</p>
				<Link to="/fragments">fragments of an oral history, transcribed</Link><br />
				<Link to="/goals">goals, abstract and concrete</Link><br />
				<Link to="/then-and-now">then and now</Link><br />
				<Link to="/discard-pile">discard pile</Link><br />
			</p>
		</div>
		<div style={{ border: `dashed #ff63b3`, padding: `0 17px 0 17px`, marginTop: `20px` }}>
			<p>
				<p>🌸</p>
				<Link to="/reading">[recently] read[ing]</Link><br />
				<Link to="/listening">[recently] listen[ing]</Link><br />
				<Link to="/watching">[recently] watch[ing]</Link><br />
				<Link to="/cooking">[recently] cook[ing]</Link><br />
				<Link to="/of-the-day">of the day</Link><br />
			</p>
		</div>
		<p>
			did anything capture your interest? email me at anne24 at stanford dot edu if you want to chat about it! i love talking to
			people about random things.
    </p>
	</Layout>
);

export default IndexPage;
