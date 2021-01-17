import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const DiscardPage = () => {
    return (
        <Layout>
            <SEO title="discard pile" />
            <h3>discard pile: words that didn't make the final cut for my blog posts</h3>
            <p>
                Ideally, I'd like to have more control over my online existence, & not be constrained to some arbitrary
                formatting decided by a social media company.
            </p>
            <p>
                Recent favorites:<br />
                Feeling: walking on a park trail with mask up and earphones in and head down, feeling very isolated from the rest of the world<br />
                Sound: squirrels running across leaves<br />
                Small dream: to work in an indie bookstore for a winter<br />
            </p>
        </Layout>
    );
};

export default DiscardPage;
