import React from 'react';

export const useResultTextContent = () => {
  const resultTextContent = [
    {
      id: 0,
      text: (
        <>
          Вы&nbsp;получаете в&nbsp;портфолио иллюстрации конкурентного уровня
          по&nbsp;вашим идеям.
        </>
      ),
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
        <>
          Расскажем всё о&nbsp;размещении своих работ на&nbsp;медиа-платформах.
        </>
      ),
    },
    {
      id: 3,
      text: <>Поможем подготовиться к&nbsp;первому контакту с&nbsp;HR.</>,
    },
  ];

  return resultTextContent;
};
