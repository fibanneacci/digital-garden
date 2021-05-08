import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

class MoonPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 'theme-dark'
        }
    }
    
    componentDidMount() {
		if (!document.documentElement.className) {
			document.documentElement.className = this.state.mode
		}
		this.setState({mode: document.documentElement.className})
    }

    render() {
        return (
            <Layout>
                <SEO title="astronomical object" />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ margin: 'auto', height: '87.5vh', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        {this.state.mode == 'theme-light' &&
                            <iframe title='eight' src="https://open.spotify.com/embed/track/0pYacDCZuRhcrwGUA5nTBe" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        }
                        {this.state.mode == 'theme-dark' &&
                            <iframe title='dear moon' src="https://open.spotify.com/embed/track/25jQhp7TC3nIJ3Jm3QoFI6" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        }
                    </div>
                </div>
            </Layout>
        );
    }
};

export default MoonPage;
