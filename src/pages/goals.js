import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const GoalsPage = () => {
	return (
		<Layout>
			<SEO title="goals" />
			<h3>goals, abstract and concrete</h3>
            <p>
				<b>2021</b><br />
				<b>reach out to more people, & share work more often</b>: i sometimes miss opportunities
				to talk to interesting people, so i'd like to do that more. also, i want to find a good
				way to share work & get feedback (social media often feels too impersonal and insufficient
				in general)<br /><br />
				<b>get better at saying what i think</b>: i'm hesitant to bring up my opinions whenever they
				could come off as abrasive. however, i've found (on the receiving end) i often prefer full
				& efficient communication, even if it's blunt. it feels worse to leave things ~unsaid~<br /><br />
				<b>focus on doing things well in the present</b>: instead of always thinking about how i
				could or should be doing more and trying to fill up every single moment of my day, i want to
				get more deeply involved in my current (limited) commitments and do better within those<br /><br />
				<b>read more</b>: yeah<br /><br />
				<b>be less fazed by insignificant, random stuff</b>: there are usually more important things
				to be worried about<br /><br />
				<b>write a blog post fully in chinese</b>: i recently wrote <Link to="/fragments">this</Link>{' '}
				in an attempt to begin improving at chinese. the writing is extremely awkward and stilted, and
				i wasn't even telling my own stories--i was retelling my dad's. hopefully after a few more tries
				i'll reach a level where i'm comfortable with writing something more substantial<br /><br />
			</p>
		</Layout>
	);
};

export default GoalsPage;
