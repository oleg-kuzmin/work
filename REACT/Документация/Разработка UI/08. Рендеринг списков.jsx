//# Рендеринг списков
// Часто требуется отобразить несколько одинаковых компонентов из набора данных. Для работы с массивом данных можно использовать методы JavaScript array methods. На этой странице вы будете использовать filter() и map() в React для фильтрации и преобразования массива данных в массив компонентов.

/* Вы узнаете
- Как выводить компоненты из массива с помощью JavaScript map().
- Как отобразить только определенные компоненты с помощью JavaScript filter().
- Когда и зачем использовать ключи React
*/

//# Рендеринг данных из массивов
// Допустим, у вас есть список содержимого.
<ul>
  <li>Creola Katherine Johnson: mathematician</li>
  <li>Mario José Molina-Pasquel Henríquez: chemist</li>
  <li>Mohammad Abdus Salam: physicist</li>
  <li>Percy Lavon Julian: chemist</li>
  <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
</ul>;

// Единственное различие между этими элементами списка — это их содержимое, их данные. При построении интерфейсов часто требуется отображать несколько экземпляров одного и того же компонента, используя разные данные: от списков комментариев до галерей изображений профиля. В таких ситуациях вы можете хранить эти данные в объектах и массивах JavaScript и использовать такие методы, как map() и filter() для вывода списков компонентов на их основе.

// Вот краткий пример того, как сформировать список элементов из массива:

//* 1. Переместите данные в массив:
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist',
];

//* 2. Используйте map для создания нового массива узлов jsx из членов people:
const listItems = people.map(person => <li>{person}</li>);

//* 3. Верните listItems из вашего компонента, обернутого в <ul>:
function List() {
  const listItems = people.map(person => <li>{person}</li>);
  return <ul>{listItems}</ul>;
}

// Вот результат:

//* App.js
function List() {
  const listItems = people.map(person => <li>{person}</li>);
  return <ul>{listItems}</ul>;
}

// Обратите внимание, что отображается консольная ошибка: Warning: Each child in a list should have a unique “key” prop.

// Как исправить эту ошибку, вы узнаете позже на этой странице. Прежде чем мы приступим к этому, давайте добавим немного структуры в ваши данные.

//# Фильтрация массивов элементов
