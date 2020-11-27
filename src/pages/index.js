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
			<a href="https://fibanneacci.netlify.app/portfolio" target="_blank" rel="noreferrer">
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
      <Link to="/digital-plants">digital plants</Link><br />
      <Link to="/bird-flight">bird flight (201124)</Link><br />
      <Link to="/media-consumption">reading, listening to, watching</Link><br />
      <Link to="/adventures">a comprehensive look at what i've been up to</Link><br />
      <Link to="/cupertino">cupertino ('19)</Link><br />
    </p>
    <p>
      did anything capture your interest? email me at anne24 at stanford dot edu if you want to chat about it! i love talking to
      people about random things.
    </p>
	</Layout>
);

export default IndexPage;
