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
    <p>
      <Link to="/of-the-day">of the day</Link><br />
      <Link to="/reading">reading</Link><br />
      <Link to="/listening">listening</Link><br />
      <Link to="/watching">watching</Link><br />
      <Link to="/food">food</Link><br />
    </p>
    <p>
      did anything capture your interest? email me at anne24 at stanford dot edu if you want to chat about it! i love talking to
      people about random things.
    </p>
	</Layout>
);

export default IndexPage;
