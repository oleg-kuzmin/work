//# Состояние: память компонента
// Компонентам часто необходимо изменить то, что отображается на экране в результате взаимодействия. Ввод в форму должен обновить поле ввода, нажатие «Далее» на карусели изображений должно изменить отображаемое изображение, нажатие «купить» должно поместить продукт в корзину. Компоненты должны «запоминать» вещи: текущее входное значение, текущее изображение, корзину. В React такой тип памяти для конкретного компонента называется состоянием.

/* Вы выучите:
- Как добавить переменную состояния с помощью хука useState
- Какую пару значений возвращает хук useState
- Как добавить более одной переменной состояния
- Почему состояние называется локальным
*/

//# Когда обычной переменной недостаточно
// Вот компонент, который рендерит изображение скульптуры. Нажатие кнопки «Далее» должно отобразить следующую скульптуру, изменив индекс на 1, затем на 2 и так далее. Однако это не сработает (вы можете попробовать!):

const sculptureList = [
  {
    name: 'Homenaje a la Neurocirugía',
    artist: 'Marta Colvin Andrade',
    description:
      'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
    url: 'https://i.imgur.com/Mx7dA2Y.jpg',
    alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.',
  },
  {
    name: 'Floralis Genérica',
    artist: 'Eduardo Catalano',
    description:
      'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
    url: 'https://i.imgur.com/ZF6s192m.jpg',
    alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.',
  },
];

function Gallery() {
  let index = 0;

  function handleClick() {
    index = index + 1;
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}

/*
Обработчик события handleClick обновляет локальную переменную index.
Но две вещи препятствуют тому, чтобы это изменение было видимым:
1. Локальные переменные не сохраняются между рендерами. Когда React рендерит этот компонент во второй раз, он рендерит его с нуля — он не учитывает никаких изменений в локальных переменных.
2. Изменения локальных переменных не вызовут рендеринга. React не понимает, что ему нужно снова отрендерить компонент с новыми данными.
*/

/* Чтобы обновить компонент новыми данными, должны произойти две вещи:
1. Сохранение данные между рендерами.
2. Запуск React для рендеринга компонента с новыми данными (повторный рендеринг).
*/

/* Хук useState предоставляет две вещи:
1. Переменная состояния для сохранения данных между рендерами.
2. Функция установки состояния для обновления переменной и запуска React для повторного рендеринга компонента.
*/

//# Добавление переменной состояния




