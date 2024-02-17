//# React.createElement (СОЗДАЕТ ЭЛЕМЕНТ)
// Создает элемент.

//# Синтаксис
React.createElement('h1', null, 'Привет, React!');
//* 1. Строка: название HTML-тега.
//* 2. Дополнительные свойства, которые прикреплены к этому тегу. Например CSS-идентификатор class или id либо другие.
//* 3. Содержимым, которое попадёт в HTML-тег. Содержимым может быть не только текст, но и другие элементы.
//* 4. После третьего аргумента могут идти и другие. Все они будут добавлены друг за другом внутрь создаваемого элемента, как если бы мы использовали метод appendChild.

//# Возвращает
//* React element object.

//# Пример
ReactDOM.render(
  React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Текущее время:'),
    React.createElement('h2', null, new Date().toLocaleTimeString())
  ),
  document.getElementById('root')
);
