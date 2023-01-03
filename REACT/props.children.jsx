// TODO props.children

const FancyParagraph = (props) => (
  <p className={"text-beautiful"}>
    {/* обратиться к значению этого пропса можно уже в дочернем компоненте через props.children. */}
    {props.children}
  </p>
);
const CoolShinySwagText = (props) => (
  <>
    <h1>Вау! Какой красивый текст:</h1>
    {/* React помещает текст, который написан между <FancyParagraph> и </FancyParagraph>, в children. */}
    <FancyParagraph>Этот параграф выглядит очень красиво.</FancyParagraph>
    <FancyParagraph>А этот параграф ничуть не хуже предыдущего.</FancyParagraph>
  </>
);


// Еще пример
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
      {/* React помещает текст, который написан между <DropdownMenu> и </DropdownMenu>, в children. */}
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
      {/* React помещает текст, который написан между <DropdownMenu> и </DropdownMenu>, в children. */}
    </DropdownMenu>
  </nav>
)

