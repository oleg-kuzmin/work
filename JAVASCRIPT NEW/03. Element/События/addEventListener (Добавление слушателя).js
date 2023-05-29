//# .addEventListener() (Добавление слушателя)
/*
- Обратите внимание на третий способ записи.
- Вторым параметром обработчика указывают только имя функции без скобок.
- Скобки не ставят, потому что мы не вызываем функцию, а просто передаём её как аргумент.
- Тем самым мы говорим браузеру: «вот функция showClick, вызови её, когда сработает событие click».
- Функция showClick в данном случае называется.
- Её передают другой функции в качестве аргумента, чтобы быть вызванной позже.

* "eventName"
Событие, на которое нужно отреагировать. Передаётся строкой: 'click', 'scroll', 'mouseover'.

* handler
Функция-обработчик события. Она будет вызвана, когда событие сработает (например, произойдёт клик).

* { options }
Объект дополнительных опций.
*/

//# синтаксис
element.addEventListener('eventName', handler, { options });

//# пример
//* первый способ записи (анонимная функция)
const element = document.querySelector('button');
element.addEventListener('click', function (evt) {
  console.log('Произошло событие', evt.type);
});

//* второй способ записи (анонимная функция)
element.addEventListener('click', evt => {
  console.log('Произошло событие', evt.type);
});

//* третий способ записи (именованная функция)
element.addEventListener('click', showClick);

//# однократное событие
//* с опциями
element.addEventListener(
  'click',
  evt => {
    console.log(evt);
  },
  { once: true }
);

//* без опций
function handleClick() {
  console.log('Клик!');
  window.removeEventListener('click', handleClick);
}
window.addEventListener('click', handleClick);

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
