import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import axios from 'axios';
import Main from '../layouts/Main';

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      heading: this.props.match.params.id,
      success: true,
    };
  }

  componentDidMount() {
    axios.get(`/api/gallery/${this.props.match.params.id}`).then((result) => {
      console.log(result);
      if (result.data.success) {
        this.setState({
          images: result.data.images,
          success: result.data.success,
        });
      } else {
        this.setState({
          heading: 'Gallery not found',
          success: result.data.success,
        });
      }
    }).catch((error) => {
      console.error('gallery-api-fetch-error', error);
    });
  }

  render() {
    const name = this.props.match.params.id;
    return (
      <Main fullPage>
        <Helmet title="Gallery" />
        <article className="post" id="gallery">
          <header>
            <div className="title">
              <h2><Link to={`/photography/${name}`}>{this.state.heading}</Link></h2>
              <p>subtitle. Add something like a date or some other corny line</p>
            </div>
          </header>
          { this.state.success ?
            <div>
              <section>
                { this.state.images.map(image => (
                  <div>
                    {/* <picture>
                    <source
                      media="(min-width: 650px)"
                      srcset={`${image}, ${image} 1.5x, ${image} 2x`}
                    />
                    <source
                      media="(min-width: 465px)"
                      srcset={`${image}, ${image} 1.5x, ${image} 2x`}
                    />
                    <img
                      src={image}
                      srcset={`${image}, ${image} 1.5x, ${image} 2x`}
                      alt="a cute kitten"
                    />
                  </picture> */}
                    <img
                      src={image}
                      srcSet={`${image}, ${image} 1.5x, ${image} 2x`}
                      alt="a cute kitten"
                    />
                  </div>))
            }
              </section>
            </div> : null }
        </article>
      </Main>
    );
  }
}

export default Music;
