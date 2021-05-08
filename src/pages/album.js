import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import Sparrows from '../images/sparrows.gif'
import WatercolorSky from '../images/album/watercolor_sky.png'
import SpeedingLights from '../images/album/speeding_lights.png'
import Flower from '../images/album/flower.png'
import EggYolkSun from '../images/album/egg_yolk_sun.png'
import Clouds from '../images/album/clouds.png'
import Grazing from '../images/album/grazing_park.png'

const AlbumPage = () => {
	return (
		<Layout>
			<SEO title="album" />
			<div style={{ height: '30px' }} />
			<h3 style={{ marginLeft: '10px' }}>collection of moments</h3>
			<p style={{ marginLeft: '10px' }}>
				<b>autumn 2020, little rock</b><br />
				sinusoidal sparrow flight
			</p>
			<img src={Sparrows} alt='sparrows flying up-and-down in a blob' style={{ padding: '10px' }}></img>
			<p style={{ marginLeft: '10px' }}>
				<b>summer 2020, little rock</b><br />
				watercolor sky / speeding lights / sky-facing flower / egg-yolk sun (thanks taylor) / pink clouds / grazing
			</p>
			<img src={WatercolorSky} alt='blue and purple dark sky with mountain silouhette' style={{ width: '400px', height: 'auto', padding: '10px' }} />
			<img src={SpeedingLights} alt='car lights stretched out over bridge' style={{ width: '400px', height: 'auto', padding: '10px' }} />
			<img src={Flower} alt='pink flower facing sky' style={{ width: '400px', height: 'auto', padding: '10px' }} />
			<img src={EggYolkSun} alt='red sun setting over mountains and river' style={{ width: '400px', height: 'auto', padding: '10px' }} />
			<img src={Clouds} alt='puffy pink & gray clouds in blue sky' style={{ width: '400px', height: 'auto', padding: '10px' }} />
			<img src={Grazing} alt='two canada geese grazing on grass' style={{ width: '400px', height: 'auto', padding: '10px' }} />
		</Layout>
	);
};

export default AlbumPage;
