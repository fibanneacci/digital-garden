import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import Firefly from '../images/firefly.png'

const OutsidePage = () => {
    return (
        <Layout>
            <SEO title="outside" />
            <div style={{ height: '30px' }} />
            <p style={{ textAlign: 'center' }}>
                hmm, there's nothing out here...
            </p>
            <br/><br/><br/>
            <p style={{ textAlign: 'center', marginRight: '350px' }}>
                wait...
            </p>
            <br/><br/><br/><br/><br/><br/>
            <p style={{ textAlign: 'center', marginLeft: '240px' }}>
                what's this?
            </p>
            <Link to='/outside-2' style={{ textDecoration: 'none' }}>
                <img src={Firefly} alt='small orb of yellow light' style={{ position: 'absolute', bottom: '280px', left: '50vw', width: '50px', height: 'auto' }} />
            </Link>
        </Layout>
    );
};

export default OutsidePage;
