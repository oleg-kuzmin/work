//# addEventListener (ДОБАВЛЕНИЕ ОБРАБОТЧИКА)
// Добавляет обработчик события, на которое нужно отреагировать.

//# Синтаксис
//* 1. Строка - cобытие, на которое нужно отреагировать
//* 2. Функция - будет вызвана, когда событие сработает
//* 3. { options } - объект дополнительных опций.
element.addEventListener('event', handler, { options });

//# Пример
//* Анонимная функция
element.addEventListener('click', evt => {
  console.log('Произошло событие', evt.type);
});

//* Именованная функция
element.addEventListener('click', showClick);

//# Однократная реакция на событие (removeEventListener)
function handleClick() {
  console.log('Клик!');
  window.removeEventListener('click', handleClick);
}
window.addEventListener('click', handleClick);

//# Однократная реакция на событие { once: true }
element.addEventListener('click', showClick, { once: true });

//# Передача аргументов
//* Вариант 1. Привязываем контекст и первые по порядку параметры
function someFunk(a, b, event) {
  console.log(a, b, event);
}
element.addEventListener('click', someFunk.bind(null, 1, 2));

//* Вариант 2. Используем интерфейс EventListener
function someFunk(event) {
  console.log(this.a, this.b, event);
}
element.addEventListener('click', { handleEvent: someFunk, a: 1, b: 2 });

//* Вариант 3.
element.addEventListener('click', () => someFunk(param));
