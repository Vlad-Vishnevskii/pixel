import React from 'react';

export const usePriceTextContent = () => {
  const priceTextContent = [
    {
      id: 0,
      text: <>Доступ к&nbsp;видео урокам навсегда.</>,
    },
    {
      id: 1,
      text: (
        <>
          Помогаем оформить работу для Behance и&nbsp;подсветить заказчику
          важные шаги и&nbsp;ваши сильные стороны.
        </>
      ),
    },
    {
      id: 2,
      text: (
        <>Консультация с&nbsp;преподавателем включена на&nbsp;4&nbsp;месяца.</>
      ),
    },
    {
      id: 3,
      text: <>Консультации можно продлевать.</>,
    },
  ];

  return priceTextContent;
};
