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

//# Побочные эффекты: незапланированные последствия
// Процесс рендеринга в React всегда должен быть чистым. Компоненты должны только возвращать свой JSX, но не изменять какие-либо объекты или переменные, существовавшие до рендеринга — это сделает их нечистыми!

// Вот компонент, который нарушает это правило:

//* App.js
let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}

// Этот компонент читает и записывает переменную guest, объявленную вне его. Это означает, что вызов этого компонента несколько раз будет выдавать разные JSX! И более того, если другие компоненты будут читать guest, они тоже будут выдавать разные JSX, в зависимости от того, когда они были вызваны! Это не предсказуемо.

// Возвращаясь к нашей формуле y = 2x, теперь, даже если x = 2, мы не можем доверять, что y = 4. Наши тесты могут не сработать, наши пользователи будут озадачены, самолеты будут падать с неба — вы видите, как это может привести к запутанным ошибкам!

// Вы можете исправить этот компонент, передав guest как prop вместо этого:

//* App.js
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}

// Теперь ваш компонент чист, поскольку JSX, который он возвращает, зависит только от пропса guest.

// В целом, вы не должны ожидать, что ваши компоненты будут отображаться в каком-то определенном порядке. Не имеет значения, вызываете ли вы y = 2x до или после y = 5x: обе формулы будут разрешены независимо друг от друга. Точно так же каждый компонент должен "думать только за себя", и не пытаться координировать свою работу с другими или зависеть от них во время рендеринга. Рендеринг — это как школьный экзамен: каждый компонент должен вычислять JSX самостоятельно!

//* Обнаружение нечистых вычислений с помощью StrictMode
// Хотя вы, возможно, еще не использовали их все, в React есть три вида входных данных, которые вы можете читать во время рендеринга: props, state, и context. Вы всегда должны рассматривать эти входы как доступные только для чтения.

// Когда вы хотите изменить что-то в ответ на ввод пользователя, вам следует использовать set state вместо записи в переменную. Вы никогда не должны изменять уже существующие переменные или объекты во время рендеринга вашего компонента.

// React предлагает "Строгий режим", в котором он дважды вызывает функцию каждого компонента во время разработки. Вызывая функции компонента дважды, "Строгий режим" помогает найти компоненты, которые нарушают эти правила.

// Обратите внимание, как в исходном примере вместо "Гость #2", "Гость #4" и "Гость #6" отображаются "Гость #1", "Гость #2" и "Гость #3". Оригинальная функция была нечистой, поэтому вызов ее дважды нарушал ее. Но исправленная чистая версия работает, даже если функция вызывается каждый раз дважды. Чистые функции только вычисляют, поэтому вызов их дважды ничего не изменит — так же, как вызов double(2) дважды не меняет того, что возвращается, и решение y = 2x дважды не меняет того, чем является y. Те же входы, те же выходы. Всегда.

// Строгий режим не имеет эффекта в production, поэтому он не замедлит работу приложения для ваших пользователей. Чтобы перейти в строгий режим, вы можете обернуть ваш корневой компонент в <React.StrictMode>. Некоторые фреймворки делают это по умолчанию.
//* Обнаружение нечистых вычислений с помощью StrictMode

//# Локальная мутация: Маленький секрет вашего компонента
// В приведенном выше примере проблема заключалась в том, что компонент изменял предшествующую переменную во время рендеринга. Это часто называют "мутацией ", чтобы звучало немного страшнее. Чистые функции не мутируют переменные вне области видимости функции или объекты, которые были созданы до вызова — это делает их нечистыми!

// Однако совершенно нормально изменять переменные и объекты, которые вы только что создали во время рендеринга. В этом примере вы создаете массив [], присваиваете его переменной cups, а затем пушите в него дюжину чашек:

//* App.js
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

function TeaGathering() {
  let cups = [];
  for (let i = 1; i <= 10; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}

// Если бы переменная cups или массив [] были созданы вне функции TeaGathering, это было бы огромной проблемой! Вы бы изменяли предшествующий объект, заталкивая элементы в этот массив.

// Однако, все в порядке, потому что вы создали их во время того же рендера, внутри TeaGathering. Никакой код вне TeaGathering никогда не узнает, что это произошло. Это называется "локальная мутация " — это как маленький секрет вашего компонента.

//# Где вы можете вызвать побочные эффекты
// Хотя функциональное программирование в значительной степени полагается на чистоту, в какой-то момент, где-то, что-то должно измениться. В этом и заключается смысл программирования! Эти изменения — обновление экрана, запуск анимации, изменение данных — называются side effects (побочными эффектами). Они происходят "на стороне ", не во время рендеринга.

// В React сторонние эффекты обычно находятся внутри обработчиков событий Обработчики событий — это функции, которые React запускает при выполнении какого-либо действия — например, при нажатии на кнопку. Несмотря на то, что обработчики событий определяются внутри вашего компонента, они не выполняются во время рендеринга! Поэтому обработчики событий не обязательно должны быть чистыми.

// Если вы исчерпали все другие варианты и не можете найти подходящий обработчик событий для вашего побочного эффекта, вы все равно можете прикрепить его к возвращаемому JSX с помощью вызова useEffect в вашем компоненте. Это говорит React выполнить его позже, после рендеринга, когда побочные эффекты разрешены. Однако этот подход должен быть вашим последним средством.

// Когда это возможно, старайтесь выражать свою логику только с помощью рендеринга. Вы будете удивлены, как далеко это может завести вас!

//* Почему React заботится о чистоте?
/* Написание чистых функций требует некоторой привычки и дисциплины. Но это также открывает чудесные возможности:
- Ваши компоненты могут работать в другой среде — например, на сервере! Поскольку они возвращают один и тот же результат при одинаковых входных данных, один компонент может обслуживать множество запросов пользователей.
- Вы можете повысить производительность, пропуская рендеринг компонентов, входные данные которых не изменились. Это безопасно, потому что чистые функции всегда возвращают одинаковые результаты, поэтому их можно кэшировать.
- Если какие-то данные изменяются в середине рендеринга глубокого дерева компонентов, React может перезапустить рендеринг, не тратя время на завершение устаревшего рендеринга. Чистота делает безопасным прекращение вычислений в любое время.
*/

// Каждая новая функция React, которую мы создаем, использует преимущества чистоты. От выборки данных до анимации и производительности, сохранение чистоты компонентов раскрывает всю мощь парадигмы React.
//* Почему React заботится о чистоте?

//# Итоги
