import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { Button } from '../Button/Button';
import { CustomInput } from '../CustomInput/CustomInput';
import { ModalSuccess } from '../ModalSuccess/ModalSuccess';
import { useBoolean } from '../../hooks';

import './Form.style.scss';

export const Form = ({ closeModalOrder }) => {
  const [modalSuccessIsOpen, setSuccessIsOpen] = useBoolean(false);
  const [stateForm, setStateForm] = useState({
    name: '',
    login: '',
  });

  const [isFormValid, setIsFormValid] = useBoolean(false);

  const submitHadler = () => {
    if (isFormValid) {
      setSuccessIsOpen.on();
    }
  };
  const isNameFiledValid = stateForm.name.length > 1;
  const isLoginFiledValid = stateForm.login.length > 1;

  useEffect(() => {
    if (isNameFiledValid && isLoginFiledValid) {
      setIsFormValid.on();
    } else {
      setIsFormValid.off();
    }
  }, [stateForm]);

  return (
    <div className="form">
      <h2 className="form_title">Записаться на&nbsp;курс</h2>
      <p className="form_subtitle">Или&nbsp;задать вопрос</p>
      <form action="#" method="post">
        <CustomInput
          type="text"
          name="name"
          placeholder="Имя"
          className={cn('customInput--name', {
            [`customInput--isValid`]: isNameFiledValid,
          })}
          value={stateForm.name}
          change={setStateForm}
          required
        />
        <CustomInput
          type="text"
          name="login"
          placeholder="Логин или номер телефона"
          className={cn('customInput--login', {
            [`customInput--isValid`]: isLoginFiledValid,
          })}
          isRequired
          value={stateForm.login}
          change={setStateForm}
        />
      </form>
      <p className="form_text">
        Мы&nbsp;свяжемся с&nbsp;вами в&nbsp;Telegram в&nbsp;течение рабочего
        дня.
      </p>
      <Button
        onClick={submitHadler}
        text="Оставить заявку"
        type="button"
        isDisabled={!isFormValid}
      />
      <ModalSuccess
        modalIsOpen={modalSuccessIsOpen}
        closeModal={setSuccessIsOpen.off}
        closeModalOrder={closeModalOrder}
      />
    </div>
  );
};
