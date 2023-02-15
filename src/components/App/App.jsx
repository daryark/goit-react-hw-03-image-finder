import { Component } from 'react';
import { getImages } from 'components/service/image-service';

import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Form } from 'components/Searchbar/Searchbar';

export class App extends Component {
  state = {
    value: '',
    images: [],
    page: 1,
    total: 0,
    // id: '',
    // webformatURL: '',
    // largeImageURL: '',
  };

  getImages = async () => {
    const { value, page } = this.state;
    const data = await getImages(value, page);
    const hits = data.hits;
    const total = data.total;
    this.setState({
      images: hits,
      total,
    });
  };

  getValue = value => {
    this.setState({
      value,
    });
  };
  componentDidMount() {}

  componentDidUpdate() {
    this.getImages();
  }

  render() {
    return (
      <>
        <p> hello</p>
        <Form submit={this.getValue} />
        <ImageGallery photos={this.state.images} />
        {/* <Modal /> */}
      </>
    );
  }
}
