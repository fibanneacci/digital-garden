import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ListeningPage = () => {
	return (
		<Layout>
			<SEO title="listen" />
            <div style={{ height: '30px' }} />
			<h3>listen</h3>
			<iframe title='bourbon' style={{ margin: `10px` }} src="https://open.spotify.com/embed/track/3Dp5SHGbRIqjGGI3cPdESA" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe title='lights on' style={{ margin: `10px` }} src="https://open.spotify.com/embed/track/01ZqsXtHhRtO2Z2JrvkG1w" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
			<iframe title='so good' style={{ margin: `10px` }} src="https://open.spotify.com/embed/track/0W9HGC75wwxU4YweY045ln" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe title='dream of you' style={{ margin: `10px` }} src="https://open.spotify.com/embed/track/5SEvxpu5ImOFOcXyeM8fbx" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe title='hard place' style={{ margin: `10px` }} src="https://open.spotify.com/embed/track/56Rmib5mhCfiaSJqhLgEdW" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe title='cyanide' style={{ margin: `10px` }} src="https://open.spotify.com/embed/track/3uouaAVXpQR3X8RYkJyitQ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
			<iframe title='戀曲1980' style={{ margin: `10px` }} src="https://open.spotify.com/embed/track/6hFQzyg9zkhueFWAaMXZnE" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
			<iframe title='comeback.' style={{ margin: `10px` }} src="https://open.spotify.com/embed/track/4i1sWZe3erL8QVRCdwMoxT" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
			<iframe title='sayonara' style={{ margin: `10px` }} src="https://open.spotify.com/embed/track/3D0qt4fQGE3Pq52MxFjXak" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
		</Layout>
	);
};

export default ListeningPage;
