//# props.children
/*
React помещает текст или другие компоненты, которые написаны между тегами компонента в props.children.
Обратиться к значению этого пропса можно уже в дочернем компоненте через props.children.
*/

//# пример
const FancyParagraph = props => <p className={'text-beautiful'}>{props.children}</p>;
const CoolShinySwagText = () => (
  <>
    <h1>Вау! Какой красивый текст:</h1>
    <FancyParagraph>Этот параграф выглядит очень красиво.</FancyParagraph>
    <FancyParagraph>А этот параграф ничуть не хуже предыдущего.</FancyParagraph>
  </>
);

//# еще пример
const DropdownMenu = props => (
  <div className="DropdownMenu">
    <div className="DropdownMenu-items">{props.children}</div>
  </div>
);
<DropdownMenu>props.children</DropdownMenu>;
