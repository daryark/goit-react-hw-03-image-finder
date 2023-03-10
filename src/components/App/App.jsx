import { Component } from 'react';
import React from 'react';

import { getImages as fetchImg } from 'service/image-service';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import {
  Form,
  Btn,
  Loader,
  ModalWindow,
  ImageGallery,
  messageSettings,
} from 'components';
import { ToastMessage } from 'components/ToastMessage/ToastMessage.styled';

export class App extends Component {
  state = {
    value: '',
    images: [],
    page: 1,
    total: 0,
    // error: null,
    isLoading: false,
    modalData: null,
  };

  componentDidUpdate(_, prevState) {
    const { value, page } = this.state;
    if (prevState.value !== value || prevState.page !== page) {
      this.getImages();
    }
  }

  getImages = async () => {
    try {
      const { value, page, images } = this.state;
      this.setState({ isLoading: true });

      const data = await fetchImg(value, page);

      const { hits, total } = data;

      if (page === 1 && !hits.length) {
        toast('🤷‍♀️ Sorry, no images found by your request', messageSettings);
      }
      this.setState({
        images: [...images, ...hits],
        total,
        // error: null,
      });
    } catch (error) {
      // this.setState({
      //   error: error.message,
      // });
      toast.error(`🙆‍♂️ Oops... ${error.message}`, messageSettings);
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  getValue = value => {
    if (value === this.state.value) {
      toast(
        `🤷‍♀️ Hey, you already have '${value}' shown, find something new!`,
        messageSettings
      );
      return;
    }
    this.setState({
      value,
      page: 1,
      total: 0,
      images: [],
    });
  };

  handleChangePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = (modalData = null) => {
    this.setState({ modalData });
  };

  render() {
    const { total, page, images, isLoading, modalData } = this.state;
    const limit = total > page * 12;
    return (
      <>
        <Form submit={this.getValue} />
        <ImageGallery photos={images} openModal={this.toggleModal} />
        {images.length > 0 && limit && (
          <Btn
            text="Load more"
            btnClick={this.handleChangePage}
            disabled={!isLoading}
          />
        )}

        {/* {error !== null && <b>{error}</b>} */}
        {isLoading && <Loader />}
        {modalData !== null && (
          <ModalWindow closeModal={this.toggleModal} modalData={modalData} />
        )}
        <ToastMessage />
      </>
    );
  }
}
