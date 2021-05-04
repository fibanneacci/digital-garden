import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import Firefly from '../images/firefly.png'

const Outside2Page = () => {
    return (
        <Layout>
            <SEO title="outside" />
            <div style={{ height: '30px' }} />
            <Link to='/outside-3' style={{ textDecoration: 'none' }}>
                <img src={Firefly} alt='small orb of yellow light' style={{ position: 'absolute', top: '28vh', left: '42vw', width: '50px', height: 'auto' }} />
            </Link>
        </Layout>
    );
};

export default Outside2Page;
