//# Условный рендеринг
// Ваши компоненты часто должны отображать разные вещи в зависимости от различных условий. В React вы можете условно визуализировать JSX, используя синтаксис JavaScript if, а также операторы "&&" и "? :"

/* Вы выучите:
- Как вернуть разные JSX в зависимости от условия
- Как условно включить или исключить часть JSX
- Общие сочетания клавиш условного синтаксиса, с которыми вы столкнетесь в кодовых базах React
*/

//# Условно возвращаемый JSX
// Допустим, у вас есть PackingList компонент, отображающий несколько Items, которые могут быть помечены как упакованные или нет:

function Item({ name, isPacked }) {
  return <li className="item">{name}</li>;
}

function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
