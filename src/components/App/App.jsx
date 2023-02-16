import { Component } from 'react';
import { getImages } from 'components/service/image-service';

import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Form } from 'components/Searchbar/Searchbar';
import { Btn } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    value: '',
    images: [],
    page: 1,
    total: 0,
    error: null,
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.value !== this.state.value ||
      prevState.page !== this.state.page
    ) {
      this.getImages();
    }
  }

  getImages = async () => {
    try {
      const { value, page, images } = this.state;
      this.setState({ isLoading: true });
      const data = await getImages(value, page);

      const { hits, total } = data;

      this.setState({
        images: page === 1 ? hits : [...images, ...hits],
        total,
      });
    } catch (error) {
      this.setState({
        error: error.message,
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  getValue = value => {
    this.setState({
      value,
      page: 1,
    });
  };

  handleChangePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { total, page, images, error, isLoading } = this.state;
    const limit = total > page * 12;
    return (
      <>
        <Form submit={this.getValue} />
        {error !== null && <p>{error}</p>}
        {isLoading && <Loader />}
        <ImageGallery photos={images} />
        {images.length > 0 && limit && (
          <Btn text="Load more" btnClick={this.handleChangePage} />
        )}

        {/* <Modal /> */}
      </>
    );
  }
}
