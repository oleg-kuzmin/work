//# Создание списков
// Часто вам потребуется отобразить несколько похожих компонентов из набора данных. Вы можете использовать методы массива JavaScript для управления массивом данных. На этой странице вы будете использовать filter() и map() с React для фильтрации и преобразования вашего массива данных в массив компонентов.

/* Вы выучите:
- Как отрендерить компоненты из массива с помощью JavaScript map()
- Как отрендерить только определенные компоненты с помощью JavaScript filter()
- Когда и зачем использовать ключи React
*/

//# Рендеринг данных из массивов
// Допустим у вас есть список контента.

<ul>
  <li>Creola Katherine Johnson: mathematician</li>
  <li>Mario José Molina-Pasquel Henríquez: chemist</li>
  <li>Mohammad Abdus Salam: physicist</li>
  <li>Percy Lavon Julian: chemist</li>
  <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
</ul>;

// Единственная разница между этими элементами списка заключается в их содержании, их данных. При построении интерфейсов вам часто потребуется показать несколько экземпляров одного и того же компонента с разными данными: от списков комментариев до галерей изображений профилей. В этих ситуациях вы можете хранить эти данные в объектах и ​​массивах JavaScript и использовать такие методы, как map() и filter() для отображения списков компонентов из них.

// Вот краткий пример того, как создать список элементов из массива:

// 1. Переместите данные в массив:
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist',
];

function List() {
  // 2. Сопоставьте элементы people с новым массивом узлов JSX listItems:
  const listItems = people.map(person => <li>{person}</li>);

  // 3. Возвратите listItems из вашего компонента, завернутого в <ul>:
  return <ul>{listItems}</ul>;
}

//* Обратите внимание, что на ошибку в консоли:
// Warning: Each child in a list should have a unique “key” prop.

// Позже на этой странице вы узнаете, как исправить эту ошибку. Прежде чем мы перейдем к этому, давайте добавим некоторую структуру к вашим данным.
