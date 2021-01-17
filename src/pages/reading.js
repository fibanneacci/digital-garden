import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ReadingPage = () => {
	return (
		<Layout>
			<SEO title="reading / recently read" />
			<h3>reading / recently read (including school-related readings i particularly enjoyed / found interesting)</h3>
			<p>
				<a href="https://weaponsofmathdestructionbook.com" target="_blank" rel="noreferrer">weapons of math destruction</a> &#8211; read a short excerpt for cs182 w21, planning to read the rest soon!<br /><br />
				<a href="https://communemag.com/optimize-what/" target="_blank" rel="noreferrer">optimize what?</a> &#8211; read for cs182 w21<br />
                "Yet in positioning itself as tech’s moral compass, academic computer science belies the fact that its own intellectual tools are the source of the technology industry’s dangerous power. A significant part of the problem is the kind of ideology it instills in students, researchers, and society at large. It’s not just that engineering education teaches students to think that all problems deserve technical solutions (which it certainly does); rather, the curriculum is built around an entire value system that knows only utility functions, symbolic manipulations, and objective maximization."<br /><br />
				<a href="https://www.newyorker.com/magazine/2021/01/04/is-substack-the-media-future-we-want" target="_blank" rel="noreferrer">is substack the media future we want?</a><br /><br />
				<a href="https://poets.org/poem/small-needful-fact" target="_blank" rel="noreferrer">a small needful fact</a><br /><br />
				<a href="https://wesdesilvestro.com/the-prestige-trap" target="_blank" rel="noreferrer">the prestige trap</a><br /><br />
			</p>
			<p><b>these aren't really recent, but i wanted to migrate them off my personal website:</b></p>
			<ul>
				<li>
					"<a
						href="https://www.theatlantic.com/entertainment/archive/2018/12/lauryn-hill-tara-westover-cameron-post-the-year-in-miseducation/579160/"
						target="_blank"
						rel="noreferrer"
					>
						A Year of Miseducation
							</a>" by Matt Thompson for <i>The Atlantic</i>
					<ul>
						<li>
							"Every person has two choices for how to cope with any aspect of society that is
							uncomfortable: act to change it, or surrender. Miseducation is the art of teaching
							people to surrender... The aftermath of that trauma... can engulf entire lives.
							Given the booster shot of a school or education system, it can swallow whole
							communities. This makes miseducation so enticing as a means of social control that
							it recurs again and again, in an endless variety of contexts."
								</li>
					</ul>
				</li>
				<li>
					"<a
						href="https://www.theatlantic.com/education/archive/2019/10/little-rock-still-fighting-school-integration/600436/"
						target="_blank"
						rel="noreferrer"
					>
						An Attempt to Resegregate Little Rock, of All Places
							</a>" by Adam Harris for <i>The Atlantic</i>
					<ul>
						<li>
							"Less than a lifetime ago, the desegregation of Little Rock's Central High School
							became a nationwide story... And now, in 2019, the state had proposed a plan that
							many residents argued amounted to an attempt to codify separate and unequal schools
							in the city."
								</li>
					</ul>
				</li>
				<li>
					"<a
						href="https://onezero.medium.com/an-unelected-monarch-is-shaping-our-public-life-his-name-is-mark-zuckerberg-d7c571bd42d2"
						target="_blank"
						rel="noreferrer"
					>
						An Unelected Monarch Is Shaping Our Public Life. His Name Is Mark Zuckerberg.
							</a>" by Jumana Abu-Ghazaleh for <i>OneZero</i>
					<ul>
						<li>
							"Mark Zuckerberg... [is] powerful because he's neck-deep in social engineering, the
							art of manipulating people at scale."
								</li>
					</ul>
				</li>
				<li>
					"<a
						href="https://medium.com/@the_jennitaur/how-to-do-nothing-57e100f59bbb"
						target="_blank"
						rel="noreferrer"
					>
						how to do nothing
							</a>" by Jenny Odell
							<ul>
						<li>
							"'...what a relief to have nothing to say, the right to say nothing, because only
							then is there a chance of framing the rare, and ever rarer, thing that might be
							worth saying.'"
								</li>
					</ul>
				</li>
			</ul>
		</Layout>
	);
};

export default ReadingPage;
