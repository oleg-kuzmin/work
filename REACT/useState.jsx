//# useState
/* Хук useState обеспечивает:
1. Переменная state для сохранения данных между рендерами.
2. Функция state setter для обновления переменной и запуска React для повторного рендеринга компонента.
*/

//# Добавление состояния в компонент
import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>{sculpture.name}</h2>
    </>
  );
}
