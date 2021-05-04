import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import '../styles/index.scss';

import Room from '../images/room.png'
import Book from '../images/book.png'
import Chair from '../images/chair.png'
import Clock from '../images/clock.png'
import ClosedDoor from '../images/closed_door.png'
import Desk from '../images/desk.png'
import Houseplant from '../images/houseplant.png'
import Laptop from '../images/laptop.png'
import Moonlight from '../images/moonlight.png'
import OpenDoor from '../images/open_door.png'
import Photos from '../images/photos.png'
import Piano from '../images/piano.png'
import Scroll from '../images/scroll.png'

const IndexPage = () => (
	<Layout>
		<SEO title="home" />
		<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
			<div style={{ margin: 'auto', width: '5px' }} />
			<div style={{ margin: 'auto' }}>
				<img src={Room} alt='lilac room with brown floor' style={{ position: 'absolute', top: '0', left: '0', width: '900px', height: 'auto' }} />
				<img src={Desk} alt='four-legged desk' style={{ position: 'absolute', top: '300px', left: '360px', width: '180px', height: 'auto' }} />
				<img src={Chair} alt='desk chair with wheels' style={{ position: 'absolute', top: '320px', left: '405px', width: '100px', height: 'auto' }} />
				<img src={Book} alt='open book with red cover' style={{ position: 'absolute', top: '297px', left: '450px', width: '55px', height: 'auto' }} />
				<img src={Laptop} alt='laptop' style={{ position: 'absolute', top: '280px', left: '390px', width: '60px', height: 'auto' }} />
				<img src={Clock} alt='analog clock' style={{ position: 'absolute', top: '200px', left: '530px', width: '35px', height: 'auto' }} />
				<img src={Houseplant} alt='tall leafy houseplant' style={{ position: 'absolute', top: '210px', left: '530px', width: '120px', height: 'auto' }} />
				<img src={Photos} alt='three photos on wall' style={{ position: 'absolute', top: '200px', left: '230px', width: '50px', height: 'auto' }} />
				<img src={Scroll} alt='scroll with flowers and Chinese' style={{ position: 'absolute', top: '250px', left: '650px', width: '40px', height: 'auto' }} />
				<img src={ClosedDoor} alt='brown door, closed' style={{ width: 'auto', height: 'auto' }} />
				{/* <img src={OpenDoor} alt='brown door, open' style={{ width: 'auto', height: 'auto' }} /> */}
				<img src={Moonlight} alt='rays of moonlight' style={{ position: 'absolute', top: '175px', left: '245px', width: '250px', height: 'auto' }} />
				<img src={Piano} alt='piano keyboard and bench' style={{ position: 'absolute', top: '350px', left: '130px', width: '175px', height: 'auto' }} />
			</div>
			<div style={{ margin: 'auto', width: '5px' }} />
		</div>
	</Layout>
);

export default IndexPage;
