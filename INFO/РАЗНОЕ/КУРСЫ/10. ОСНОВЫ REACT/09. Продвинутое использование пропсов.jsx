// В предыдущем уроке мы рассказали о компонентах в React и компонентном подходе к созданию пользовательских интерфейсов.
// В этом уроке изучим пропсы (props) и их особенности.

// Пропсы — по сути аргументы функции, которые позволяют влиять на рендеринг элементов внутри компонентов и логику их работы.
// Как и аргумент, пропс может быть чем угодно: функцией, объектом, массивом, строкой, числом.

// Вы уже знаете, что React при работе с компонентами объединяет JSX-атрибуты в один объект — props.
// В классовом компоненте доступ к этому объекту можно получить через this.props, а в функциональном props доступен в качестве первого аргумента функции:

function Heading(props) {
  return <h1>{props.text}</h1>
}

ReactDOM.render(
  <Heading text="Заголовок интересной статьи" />,
  document.querySelector('#root')
)

// В качестве имени аргумента принято использовать “props”.
// Рекомендуем называть аргумент именно так: это упростит восприятие вашего кода другими разработчиками, ведь многие из них тоже следуют этому принципу.

// В уроке про композицию и извлечение компонентов вы уже видели, что пропсов может быть несколько и их структура допускает вложенность:
const Product = (props) => (
  <div>
    <p>{props.productData.name}</p> {/* Гидрокостюм для дайвинга */}
    <span>{props.productData.price}</span> {/* 14299 */}
  </div>
);

const ShoppingCart = (props) => (
  <>
    <h1>Корзина товаров</h1>
    <Product productData={{ name: "Гидрокостюм для дайвинга", price: 14299 }} />
  </>
);

// В этом примере компонент ShoppingCart «рендерит» другой компонент — Product.
// В качестве аргументов (пропсов) ему передаётся объект с двумя значениями: name и price.

// Чтобы сделать код более читаемым, стоит упростить структуру передаваемых в компонент пропсов и использовать в качестве аргументов примитивы.
// Едва ли это отразится на производительности, ведь React очень быстрый, но работать с примитивами проще.

// Взгляните на пример, в котором props — сложный объект:
// Компонент
const Product2 = (props) => (
  <div>
      <p>{props.productData.name}</p> {/* Гидрокостюм для дайвинга */}
      <span>{props.productData.price}</span> {/* 14299 */}
  </div>
);

// Использование компонента
<Product productData={{ name: "Гидрокостюм для дайвинга", price: 14299 }} />

// Код, использующий этот компонент, выглядит сложно, а внутренняя реализация требует большей внимательности от разработчика.
// Давайте упростим этот компонент:
// Компонент
const Product3 = (props) => (
  <div>
      <p>{props.name}</p> {/* Гидрокостюм для дайвинга */}
      <span>{props.price}</span> {/* 14299 */}
  </div>
);

// Использование компонента
<Product name="Гидрокостюм для дайвинга" price={14299} />

// Из примера видно, что реализация стала проще, а использование компонента — более декларативным.


// * Пропсы можно только читать
// React-компоненты обязаны вести себя как «чистые» функции по отношению к своим пропсам вне зависимости от того, функциональные они или классовые. Это означает, что компоненты не должны что-то записывать в свои пропсы.
// Разберём это на примере «чистой» и «нечистой» функций.

// Функция formatPrice — «чистая», потому что не изменяет свои входные данные и предсказуемо возвращает одинаковый результат для одних и тех же аргументов:
function formatPrice(price) {
  return price + '₽';
}

// А вот функция notificationSettings — «нечистая», так как записывает данные в свой же аргумент — объект user:
function notificationSettings(user, notificationValue) {
  user.notifications = notificationValue;
}

// Чтобы разработка на React оставалась предсказуемой и удобной, пропсы должны быть доступны только для чтения.
// В следующих уроках мы расскажем, как повлиять на props компонента изнутри этого компонента.

// * JavaScript-выражения как пропсы
// В качестве пропсов можно передавать любые JavaScript-выражения.
// Для этого нужно обернуть их в {}. К примеру, в этом JSX:
<MusicGenreItem genre={'rock' + '&' + 'roll'} />

// В компоненте MusicGenreItem значение props.genre равно rock&roll, потому что выражение 'rock' + '&' + 'roll' будет вычислено.
// То же самое справедливо для функций:
function sayHi(name) {
  return `Привет, ${name}!`
}

<WelcomeComponent textToRender={sayHi('Варвара')} />
// В этом примере в пропс textToRender попадёт результат выполнения функции sayHi('Варвара'), то есть строка "Привет, Варвара!".



// Операторы if, switch и цикл for  не являются выражениями в JavaScript.
// Из-за этого их невозможно напрямую применять в JSX.
// Чтобы их использовать, необходимо сначала получить результат работы этих операторов, а затем этот результат поместить в JSX-код:
function TrafficLightComponent(props) {
  let action;
  switch (props.color) {
    case "red":
      action = <b>Стоять</b>
    case "yellow":
      action = <i>Завершайте манёвр</i>
    case "green":
      action = <strong>Проезжайте</strong>;
    default:
      action = <span>Будьте внимательны, светофор не работает</span>
    }
  return <div>Светофор рекомендует: {action}</div>;
}

// * Строковые литералы как пропсы
// Строковые литералы также могут быть использованы в качестве пропсов. К примеру, эти компоненты эквивалентны:

<WelcomeComponent name="Екатерина" />;
<WelcomeComponent name={'Екатерина'} />;
<WelcomeComponent name={`Екатерина`} />;
<WelcomeComponent name='Екатерина' />;

// Если передавать в компонент строковый литерал, то все его возможные символы будут преобразованы в соответствующие HTML-сущности.
// Оба этих компонента эквивалентны:

<FavoritePet pet="&#128008;" />;
<FavoritePet pet={'🐈'} />;

// * Значение пропсов по умолчанию равно true
// Если не передать значение в пропс, по умолчанию будет true. Эти два JSX выражения эквивалентны:
<TextInput disabled />;
<TextInput disabled={true} />;

// Такое поведение пропсов в React-компонентах существует, чтобы соответствовать поведению обычного HTML.
// Лучше не полагаться на такую особенность и указывать значения props в явном виде, ведь иначе такая запись может быть интерпретирована React как короткая нотация свойств объекта:
const title = "Автостопом по галактике"
{ title }

// Такая запись эквивалентна объекту { title: "Автостопом по галактике" }, но точно не объекту { title: true }.

// * Атрибуты расширения
// Вложенная структура пропсов — частое явление, особенно при работе с сервером, который возвращает многоуровневый JSON.
// Чтобы сделать код более компактным и читаемым, можно использовать оператор расширения. В этом примере оба компонента идентичны:
function CustomerPage(props) {
  return (
   <ProfileInfo
    firstName={props.profileData.firstName}
    lastName={props.profileData.lastName}
   />
  );
}

function CustomerPage(props) {
  return <ProfileInfo {...props.profileData} />;
}

// Оператор расширения помогает отсеивать нужные пропсы и передавать в целевой компонент только необходимые данные:
const Input = props => {
  const { size, userId, ...otherProps } = props;
  const className = size === "default" ? "DefaultInput" : "SmallInput";
  return <input className={className} {...otherProps} />;
};

const LandingPage = () => {
  return (
    <>
      <b>Введите промокод:</b>
      <Input size="default" type="text" disabled={false} userId={1112983} />
    </>
  );
};

// В этом примере в компонент Input передаются такие пропсы:
{
  size: "default";
  type:"text";
  disabled: false;
  userId: 1112983;
}

// При этом пропсы size и userId используются безопасно и не передаются в DOM-элемент <input/>.
// Пропс size используется внутри для вычисления класса, а userId не задействован вовсе.
// Поэтому в объекте otherProps остаются только нужные DOM-элементу пропсы — type и disabled.

// Атрибуты расширения могут быть полезны и сокращают код, но есть риск передать лишние пропсы в компоненты или невалидные HTML-атрибуты в DOM.
// Используйте этот инструмент с осторожностью.

// * Пропсы: коротко о главном
// 1. Пропсы можно только читать.
// 2. Пропсами могут быть JavaScript выражения.
// 3. По умолчанию значения пропсов выставляется в true.
// 4. Пропсы можно передать пачкой с помощью оператора расширения.















