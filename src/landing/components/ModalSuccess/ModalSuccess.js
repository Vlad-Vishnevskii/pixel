import React from 'react';
import ModalContainer from 'react-modal';
import { Button } from '../Button';
import { modalSuccesImg } from './ModalSuccess.images';

import './ModalSuccess.styles.scss';

ModalContainer.setAppElement('#root');

const handleDisableBodyScroll = () => {
  document.body.style.overflow = 'hidden';
};

const handleEnableBodyScroll = () => {
  document.body.style.overflow = 'unset';
};

export const ModalSuccess = ({ modalIsOpen, closeModal, closeModalOrder }) => {
  const closeHandler = () => {
    if (closeModalOrder) closeModalOrder();
    closeModal();
  };

  return (
    <ModalContainer
      isOpen={modalIsOpen}
      onRequestClose={closeHandler}
      onAfterOpen={handleDisableBodyScroll}
      onAfterClose={handleEnableBodyScroll}
      className="modalSucces"
      overlayClassName="overlaySucces"
    >
      <div className="modalSucces_block">
        <img src={modalSuccesImg} alt="" />
        <h3 className="modalSucces_title">Спасибо за заявку!</h3>
        <p className="modalSucces_description">
          Пожалуйста, начните диалог, чтобы наше сообщение не пометилось как
          спам
        </p>
        <Button className="modalSucces_btn" text="Открыть диалог" />
      </div>
    </ModalContainer>
  );
};
