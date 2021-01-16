import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const WatchingPage = () => {
	return (
		<Layout>
			<SEO title="watching / recently watched" />
			<h3>watching / recently watched</h3>
			<p>
				<a href="https://movies.disney.com/soul" target="_blank" rel="noreferrer">soul</a><br />
				<a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjg_4_dhZjuAhVHeawKHR4aBLsQFjAKegQIARAC&url=https%3A%2F%2Fwww.viki.com%2Ftv%2F36358c-when-we-were-young&usg=AOvVaw24vv92lSMZxmzjggZIhETk" target="_blank" rel="noreferrer">when we were young</a> ( & subsequently had a nightmare in which i had to take the gaokao)<br />
                <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi8uPzShpjuAhUQSq0KHcm6CekQwqsBMAB6BAgFEAM&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRE4ce4mexrU&usg=AOvVaw0jysZ6YJcToRfSPMNFYpa7" target="blank" rel="noreferrer">birth of a word</a> ted talk by dr. deb roy (the data collection part scared me a little but the data analysis stuff was pretty cool)<br />
                <a href="https://www.codedbias.com" target="_blank" rel="noreferrer">coded bias</a>!
			</p>
		</Layout>
	);
};

export default WatchingPage;
