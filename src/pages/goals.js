import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const GoalsPage = () => {
	return (
		<Layout>
			<SEO title="goals" />
            <div style={{ height: '30px' }} />
			this one's a bit unrelated, but the houseplant is aspirational anyway.
			<h3>personal goals</h3>
            <p>
				<b>2021</b><br/>
				<b>meet new people!</b> &#8211; hoping end of lockdown will make this easier.<br/>
				<b>get better at saying what i think</b>, even if it could come off as abrasive.<br/>
				<b>focus on doing things well in the present</b> instead of thinking about how i could or should be doing more.<br/>
				<b>be unfazed</b>.<br/>
				<b>read more</b>.<br/>
				<b>write a blog post fully in chinese</b> &#8211; my chinese writing is awkward and stilted, even when i'm <Link to="/fragments">not telling my own stories</Link>.{' '}
				i want to reach a level where i'm comfortable with writing something more substantial.<br/>
				<b>play piano again!</b> i was lucky to be able to learn piano for nearly a decade. i got too busy and quit, but i loved it nonetheless.
			</p>
		</Layout>
	);
};

export default GoalsPage;
