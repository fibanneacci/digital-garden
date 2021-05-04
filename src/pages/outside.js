import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import Moon from '../images/moon.png'
import OldComputer from '../images/old_computer.png'

const OutsidePage = () => {
    return (
        <Layout>
            <SEO title="outside" />
            <div style={{ height: '30px' }} />
            <p style={{ textAlign: 'center' }}>
                hmm, there's nothing out here.
            </p>
            <br /><br /><br />
            <p style={{ textAlign: 'center', marginRight: '350px' }}>
                wait...
            </p>
            <br /><br /><br /><br /><br /><br />
            <p style={{ textAlign: 'center', marginLeft: '240px' }}>
                what's this?
            </p>
            <a href='https://tilde.town/~al' target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }}>
                <img src={OldComputer} alt='old computer setup -- monitor, keyboard, mouse' style={{ position: 'absolute', bottom: '200px', left: '50vw', width: '70px', height: 'auto' }} />
            </a>
        </Layout>
    );
};

export default OutsidePage;
