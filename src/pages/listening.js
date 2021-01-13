import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ListeningPage = () => {
	return (
		<Layout>
			<SEO title="listening / recently listened" />
			<h3>listening / recently listened</h3>
			<iframe style={{ margin: `10px` }} src="https://open.spotify.com/embed/track/3Dp5SHGbRIqjGGI3cPdESA" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe style={{ margin: `10px` }} src="https://open.spotify.com/embed/track/01ZqsXtHhRtO2Z2JrvkG1w" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe style={{ margin: `10px` }} src="https://open.spotify.com/embed/track/5Hvi3XSS00txHgZB6UZhFl" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe style={{ margin: `10px` }} src="https://open.spotify.com/embed/track/2LcqFRq2xBQdSfXBh5IIUk" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe style={{ margin: `10px` }} src="https://open.spotify.com/embed/track/5SEvxpu5ImOFOcXyeM8fbx" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe style={{ margin: `10px` }} src="https://open.spotify.com/embed/track/3uouaAVXpQR3X8RYkJyitQ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
		</Layout>
	);
};

export default ListeningPage;
