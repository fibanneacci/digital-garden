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
        this.setState({ mode: document.documentElement.className })
    }

    render() {
        return (
            <Layout>
                <SEO title="astronomical object" />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ margin: 'auto', height: '87.5vh', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        {this.state.mode == 'theme-light' &&
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <iframe title='eight' src="https://open.spotify.com/embed/track/0pYacDCZuRhcrwGUA5nTBe" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" style={{ margin: 'auto' }}></iframe>
                                <p style={{ textAlign: 'center' }}>
                                    <i>Under the orange sun, we’re dancing without a shadow (<a href='https://colorcodedlyrics.com/2020/05/iu-aiyu-eight-eis-prod-amp-feat-suga-of-bts' target='_blank' rel='noreferrer'>source</a>)</i><br /><br />
                                    description: summer pop; upbeat mood, yet melancholy tone
                                </p>
                            </div>
                        }
                        {this.state.mode == 'theme-dark' &&
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <iframe title='oh, universe' src="https://open.spotify.com/embed/track/4288bHzkYGmDpvrp321rWE" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" style={{ margin: 'auto' }}></iframe>
                                <p style={{ textAlign: 'center' }}>
                                    <i>Wishing I could atomize these lonely lunar views (<a href='https://genius.com/9423322' target='_blank' rel='noreferrer'>source</a>)</i><br /><br />
                                    description: r&b/soul, atmospheric, slow tempo piano & strings & vocals (notes) to mid / fast tempo piano & vocals (words)
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </Layout>
        );
    }
};

export default MoonPage;
