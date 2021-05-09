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
                                <p><i>Under the orange sun, we’re dancing without a shadow (<a href='https://colorcodedlyrics.com/2020/05/iu-aiyu-eight-eis-prod-amp-feat-suga-of-bts' target='_blank' rel='noreferrer'>source</a>)</i></p>
                            </div>
                        }
                        {this.state.mode == 'theme-dark' &&
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <iframe title='oh, universe' allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="150" style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', background: 'transparent', margin: 'auto' }} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/oh-universe-interlude/1109106508?i=1109106956"></iframe>
                                <p><i>Wishing I could atomize these lonely lunar views (<a href='https://genius.com/9423322' target='_blank' rel='noreferrer'>source</a>)</i></p>
                            </div>
                        }
                    </div>
                </div>
            </Layout>
        );
    }
};

export default MoonPage;
