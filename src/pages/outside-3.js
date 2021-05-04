import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import OldComputer from '../images/old_computer.png'

const Outside3Page = () => {
    return (
        <Layout>
            <SEO title="outside" />
            <div style={{ height: '30px' }} />
            <a href='https://tilde.town/~al' target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }}>
                <img src={OldComputer} alt='old computer: boxy monitor, keyboard, mouse' style={{ position: 'absolute', top: '49vh', right: '28vw', width: '95px', height: 'auto' }} />
            </a>
        </Layout>
    );
};

export default Outside3Page;
