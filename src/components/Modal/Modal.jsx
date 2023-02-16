import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Modal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class ModalWindow extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeOnEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeOnEscape);
  }

  closeOnEscape = e => {
    if (e.code === 'Escape') this.props.closeModal();
  };

  closeOnBackdrop = e => {
    if (e.target === e.currentTarget) this.props.closeModal();
  };

  render() {
    const { largeImg, tag } = this.props.modalData;

    return createPortal(
      <Backdrop onClick={this.closeOnBackdrop}>
        <Modal onKeyDown={this.closeOnEscape}>
          <img src={largeImg} alt={tag} />
        </Modal>
      </Backdrop>,
      modalRoot
    );
  }
}
