import React from 'react';
import { Button } from '../Button/Button';
import { CustomInput } from '../CustomInput/CustomInput';

import './Form.style.scss';

export const Form = () => {
  return (
    <div className="form">
      <h2 className="form_title">Записаться на&nbsp;курс</h2>
      <p className="form_subtitle">Или&nbsp;задать вопрос</p>
      <form action="#" method="post">
        <CustomInput
          type="text"
          name="name"
          placeholder="Имя"
        />
        <CustomInput
          type="text"
          name="login"
          placeholder="Логин или номер телефона"
          className="customInput--login"
        />
      </form>
      <p className="form_text">Мы&nbsp;свяжемся с&nbsp;вами в&nbsp;Telegram в&nbsp;течение рабочего дня.</p>
      <Button
        text="Оставить заявку"
        type="button"
      />
    </div>
  );
};
