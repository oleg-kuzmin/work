// Вы уже знаете, что JSX очень похож на HTML: большинство элементов могут иметь открывающий и закрывающий теги.
// В случае с JSX всё, что написано между открывающим и закрывающими тегами, попадает в пропсы элемента.
// React использует специальный ключ в объекте props — children.

// Разберём на примере:
const FancyParagraph = (props) => (
  <p className={"text-beautiful"}>
    {props.children}
  </p>
);


const CoolShinySwagText = (props) => (
  <>
    <h1>Вау! Какой красивый текст:</h1>
    <FancyParagraph>Этот параграф выглядит очень красиво.</FancyParagraph>
    <FancyParagraph>А этот параграф ничуть не хуже предыдущего.</FancyParagraph>
  </>
);

// React помещает текст, который написан между <FancyParagraph> и </FancyParagraph>, в children.
// А обратиться к значению этого пропса можно уже в дочернем компоненте через props.children.

// Пытливый ум задаётся вопросом: что будет, если children указать как props у компонента, а не описывать внутри тега?
// Если так сделать, ничего страшного не произойдёт, но children, описанный между тегами элемента, будет приоритетнее чем children, который задан как props:

// Будет выведено: Пицца с ананасами прекрасна!
<FancyParagraph children={"Пицца с ананасами ужасна!"}>
    Пицца с ананасами прекрасна!
</FancyParagraph>;

// Будет выведено: Пицца с ананасами ужасна!
<FancyParagraph children={"Пицца с ананасами ужасна!"} />;


// В некоторых случаях props.children помогает упростить код и сделать его более читаемым.
// Посмотрим на пример, в котором используется notificationText в пропсах для отображения предупреждающего сообщения в компоненте Notification:

// Компонент
const Notification = (props) => (
  <div className="Notification">
    <p>{props.notificationText}</p> {/* Внимание! Обнаружено повышение радиации в 4-м блоке */}
  </div>
);

// Использование компонента
<Notification
  notificationText="Внимание! Обнаружено повышение радиации в 4-м блоке"
/>

// В этом примере нет ничего плохого (кроме радиации), но нужно помнить, что компонент ожидает на вход notificationText.
// Это создаёт дополнительную когнитивную нагрузку и отнимает время.

// Вместо этого мы можем воспользоваться props.children и сделать код более читаемым:

// Компонент
const Notification2 = (props) => (
  <div className="Notification">
    <p>{props.children}</p> {/* Внимание! Обнаружено повышение радиации в 4-м блоке */}
  </div>
);

// Использование компонента
<Notification>
  Внимание! Обнаружено повышение радиации в 4-м блоке
</Notification>

// Этот вариант выглядит естественнее, так как больше походит на HTML.
// В каких случаях использовать такой подход — решать вам.

// * Ещё немного о props.children
// Обратите внимание, что в children попадает всё, что расположено между открывающим и закрывающим тегами элемента.
// Это предоставляет дополнительные возможности для создания UI:

const DropdownMenu = (props) => (
  <div className="DropdownMenu">
    <span className="DropdownMenu-heading">{props.heading}</span>
    <div className="DropdownMenu-items">
      {props.children}
    </div>
  </div>
);


const NavBar = () => (
  <nav>
    <Logo />
    <DropdownMenu heading={"Меню"}>
      <ul>
        <li className="DropdownMenu-item">О магазине</li>
        <li className="DropdownMenu-item">Доставка</li>
        <li className="DropdownMenu-item">Оплата</li>
      </ul>
      <hr />
      <ul>
        <li className="DropdownMenu-item">Оставить отзыв</li>
        <li className="DropdownMenu-item">Политика конфиденциальности</li>
      </ul>
    </DropdownMenu>
  </nav>
)

// В этом примере меню на сайте формируется в компоненте NavBar.
// Затем с соблюдением HTML-разметки рендерится в компоненте DropdownMenu с помощью props.children.
// Такое меню можно использовать в разных местах сайта с разным содержимым и быть уверенным, что оно будет вести себя одинаково.
// Умение пользоваться props.children позволяет создавать более податливый к кастомизации пользовательский интерфейс.