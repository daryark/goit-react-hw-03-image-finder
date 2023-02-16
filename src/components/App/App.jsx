import { Component } from 'react';
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import {
  Form,
  Btn,
  Loader,
  ModalWindow,
  ImageGallery,
  getImages,
  messageSettings,
} from 'components/reexport';
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

      if (page === 1 && !hits.length) {
        toast('🤷‍♀️ Sorry, no images found by your request', messageSettings);
      }
      this.setState({
        images: page === 1 ? hits : [...images, ...hits],
        total,
      });
    } catch (error) {
      this.setState({
        error: error.message,
      });
      toast.error(`🙆‍♂️ Oops... ${error.message}`, messageSettings);
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  getValue = (value, sameValue) => {
    sameValue
      ? toast(
          `🤷‍♀️ Hey, you already have '${value}' shown, find something new!`,
          messageSettings
        )
      : this.setState({
          value,
          page: 1,
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
        <Form submit={this.getValue} prevValue={this.state.value} />
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
