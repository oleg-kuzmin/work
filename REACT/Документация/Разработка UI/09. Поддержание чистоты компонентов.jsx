//# Поддержание чистоты компонентов
// Некоторые функции JavaScript являются чистыми. Чистые функции выполняют только вычисления и ничего более. Если вы будете писать свои компоненты только как чистые функции, вы сможете избежать целого класса непонятных ошибок и непредсказуемого поведения по мере роста вашей кодовой базы. Однако, чтобы получить эти преимущества, необходимо следовать нескольким правилам.

/* Вы узнаете
- Что такое чистота и как она помогает избежать ошибок
- Как сохранить чистоту компонентов, не допуская изменений на этапе рендеринга
- Как использовать режим Strict Mode для поиска ошибок в ваших компонентах
*/

//# Чистота: Компоненты как формулы
/* В компьютерной науке (и особенно в мире функционального программирования) чистая функция — это функция со следующими характеристиками:
- Она занимается своими делами. Она не изменяет никаких объектов или переменных, существовавших до ее вызова.
- Одинаковые входы, одинаковый выход. При одинаковых входах чистая функция всегда должна возвращать один и тот же результат.
*/

// Возможно, вы уже знакомы с одним примером чистых функций: формулами в математике.

// Рассмотрим эту математическую формулу: y = 2x

// Если x = 2, то y = 4. Всегда

// Если x = 3, то y = 6. Всегда. Не будет иногда 9 или -1 или 2.5 в зависимости от времени суток или состояния фондового рынка.

// Если бы мы сделали это в виде функции JavaScript, то это выглядело бы следующим образом:

function double(number) {
  return 2 * number;
}

// В приведенном выше примере double — это чистая функция. Если вы передадите ей 3, она вернет 6. Всегда.

// React разработан на основе этой концепции. React предполагает, что каждый написанный вами компонент является чистой функцией. Это означает, что написанные вами компоненты React должны всегда возвращать один и тот же JSX при одинаковых входных данных:

//* App.js
function Recipe({ drinkers }) {
  return (
    <ol>
      <li>Boil {drinkers} cups of water.</li>
      <li>
        Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
      </li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

function App() {
  return (
    <section>
      <h1>Spiced Chai Recipe</h1>
      <h2>For two</h2>
      <Recipe drinkers={2} />
      <h2>For a gathering</h2>
      <Recipe drinkers={4} />
    </section>
  );
}

// Когда вы передаете drinkers={2} в Recipe, он вернет JSX, содержащий 2 чашки воды. Всегда.

// Если вы передадите drinkers={4}, он вернет JSX, содержащий 4 чашки воды. Всегда.

// Прямо как математическая формула.

// Вы можете думать о своих компонентах как о рецептах: если вы будете следовать им и не будете вводить новые ингредиенты в процессе приготовления, то каждый раз будете получать одно и то же блюдо. Это "блюдо" — JSX, который компонент передает React для рендеринга.

//# Побочные эффекты: (не)запланированные последствия
