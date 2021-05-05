import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';
import '../styles/index.scss';
import image from './home.png'

import Room from '../images/room.png'
import Moon from '../images/moon.png'
import Book from '../images/book.png'
import Chair from '../images/chair.png'
import Clock from '../images/clock.png'
import ClosedDoor from '../images/closed_door.png'
import DoorHole from '../images/door_hole.png'
import Desk from '../images/desk.png'
import Houseplant from '../images/houseplant.png'
import Laptop from '../images/laptop.png'
import Moonlight from '../images/moonlight.png'
import OpenDoor from '../images/open_door.png'
import Photos from '../images/photos.png'
import Piano from '../images/piano.png'
import Scroll from '../images/scroll.png'

function open_door() {
	document.getElementById('open_door').style.visibility = 'visible'
	document.getElementById('closed_door').style.visibility = 'hidden'
}

function close_door() {
	document.getElementById('open_door').style.visibility = 'hidden'
	document.getElementById('closed_door').style.visibility = 'visible'
}

const IndexPage = () => (
	<Layout>
		<SEO title="home" />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content="home | anne's digital garden" />
		<meta name="twitter:image" content="https://garden.anli.io/static/home-d997ebe7b4da8edc342c62e5b01e6298.png" />
		{/* <meta name="twitter:image" content={image} /> */}
		<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
			<div style={{ position: 'relative' }}>
				<img src={Room} alt='lilac room with brown floor' style={{ position: 'absolute', top: '0', left: '0', width: '900px', height: 'auto' }} />
				<Link to='/moon' style={{ textDecoration: 'none' }}>
					<img src={Moon} alt='crescent moon' style={{ position: 'absolute', top: '40px', left: '585px', width: '70px', height: 'auto' }} />
				</Link>
				<img src={Desk} alt='four-legged desk' style={{ position: 'absolute', top: '300px', left: '360px', width: '180px', height: 'auto' }} />
				<img src={Chair} alt='desk chair with wheels' style={{ position: 'absolute', top: '320px', left: '405px', width: '100px', height: 'auto' }} />
				<Link to='/words' style={{ textDecoration: 'none' }}>
					<img src={Book} alt='open book with red cover' style={{ position: 'absolute', top: '297px', left: '450px', width: '55px', height: 'auto' }} />
				</Link>
				<Link to='/random' style={{ textDecoration: 'none' }}>
					<img src={Laptop} alt='laptop' style={{ position: 'absolute', top: '280px', left: '390px', width: '60px', height: 'auto' }} />
				</Link>
				<Link to='/time' style={{ textDecoration: 'none' }}>
					<img src={Clock} alt='analog clock' style={{ position: 'absolute', top: '200px', left: '340px', width: '35px', height: 'auto' }} />
				</Link>
				<Link to='/goals' style={{ textDecoration: 'none' }}>
					<img src={Houseplant} alt='tall leafy houseplant' style={{ position: 'absolute', top: '210px', left: '530px', width: '120px', height: 'auto' }} />
				</Link>
				<Link to='/album' style={{ textDecoration: 'none' }}>
					<img src={Photos} alt='three photos on wall' style={{ position: 'absolute', top: '200px', left: '230px', width: '50px', height: 'auto' }} />
				</Link>
				<Link to='/fragments' style={{ textDecoration: 'none' }}>
					<img src={Scroll} alt='scroll with flowers and Chinese' style={{ position: 'absolute', top: '250px', left: '650px', width: '40px', height: 'auto' }} />
				</Link>
				<Link to='/outside' onFocus={open_door} onMouseOver={open_door} onMouseMove={open_door} onMouseOut={close_door} onBlur={close_door} style={{ textDecoration: 'none' }}>
					<img src={DoorHole} alt='door hole' style={{ position: 'absolute', top: '333px', left: '691px', width: '55px', height: 'auto' }} />
					<img id='closed_door' src={ClosedDoor} alt='brown door, closed' style={{ position: 'absolute', top: '333px', left: '691px', width: '55px', height: 'auto' }} />
					<img id='open_door' src={OpenDoor} alt='brown door, open' style={{ visibility: 'hidden', position: 'absolute', top: '333px', left: '635px', width: '66px', height: 'auto' }} />
				</Link>
				<img src={Moonlight} alt='rays of moonlight' style={{ position: 'absolute', top: '175px', left: '245px', width: '250px', height: 'auto', pointerEvents: 'none' }} />
				<Link to='/listen' style={{ textDecoration: 'none' }}>
					<img src={Piano} alt='piano keyboard and bench' style={{ position: 'absolute', top: '350px', left: '130px', width: '175px', height: 'auto' }} />
				</Link>
			</div>
		</div>
	</Layout>
);

export default IndexPage;
