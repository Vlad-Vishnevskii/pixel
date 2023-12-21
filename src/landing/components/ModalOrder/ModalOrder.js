import React from 'react';
import ModalContainer from 'react-modal';
import { Form } from '../Form';
import { Close } from '../Icons';

import './ModalOrder.styles.scss';

ModalContainer.setAppElement('#root');

const handleDisableBodyScroll = () => {
  document.body.style.overflow = 'hidden';
};

const handleEnableBodyScroll = () => {
  document.body.style.overflow = 'unset';
};

export const ModalOrder = ({ modalIsOpen, closeModal }) => {
  return (
    <ModalContainer
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      onAfterOpen={handleDisableBodyScroll}
      onAfterClose={handleEnableBodyScroll}
      className="modal"
      overlayClassName="overlay"
    >
      <button className="closeIcon" onClick={closeModal}>
        <Close />
      </button>
      <Form closeModalOrder={closeModal} />
    </ModalContainer>
  );
};
