// В предыдущем уроке мы рассказали про основную идею React — компоненты.
// Благодаря им на React разрабатывают большие и сложные приложения, которые легко поддерживать.
// В этом уроке разберём, как использовать компоненты друг с другом и выделять элементы интерфейса в компоненты.

// * Композиция компонентов
// Сила React — в возможности вкладывать одни компоненты в другие, которые, в свою очередь, могут состоять из ещё более мелких компонентов, и так до самых примитивных HTML-тегов. Структура React-приложения напоминает луковицу или планету

// Эта особенность React позволяет использовать одну и ту же абстракцию на любом уровне приложения.
// Следите за руками: компонентом может быть изображение товара, карточка товара, список товаров или даже страница категории товаров целиком.
// Всё это — компоненты, которые содержат другие компоненты.

// Например, страницу интернет-магазина можно упрощённо представить так:
function Cart(props) {
  return <div>Корзина товаров пуста</div>;
}
function Header(props) {
  return (
    <header>
      <h1>Магазин глазиrawанных сырков</h1>
      <Cart />
    </header>
  );
}
function Products(props) {
  // в этом компоненте будет описан рендеринг списка товаров
}
function Filters(props) {
  // в этом компоненте будет описан рендеринг фильтров для товаров
}
function Footer(props) {
  return <div>Компания существует с 1999 года</div>;
}
function Shop() {
  return (
    <>
      <Header/>
      <div style={{
        display: "flex",
        alignItems: "flex-start"
        }}>
        <Filters />
        <Products />
      </div>
      <Footer/>
    </>
  );
}
ReactDOM.render(
  <Shop />,
  document.getElementById('root')
);

// Эта возможность библиотеки React делает разработку пользовательских интерфейсов быстрой и увлекательной.
// Компоненты можно использовать многократно:
function UserGreeting(props) {
  return <h1>Здравствуйте, {props.fullName}</h1>;
}
function ProducerParty(props) {
  return (
    <div>
      <UserGreeting fullName="Паоло Соррентино" />
      <UserGreeting fullName="Дэвид Линч" />
      <UserGreeting fullName="Ридли Скотт" />
      <UserGreeting fullName="Лана Вачовски" />
      <UserGreeting fullName="Гай Ричи" />
      <UserGreeting fullName="Гаспар Ноэ" />
    </div>
  );
}

ReactDOM.render(
  <ProducerParty />,
  document.getElementById('root')
);

// * Извлечение компонентов
// Старайтесь разбивать приложение на части. Так его проще поддерживать и развивать.
// Представим, что мы работаем над неким компонентом Order:
function Order(props) {
  return (
    <div className="Order">
      <div className="Customer">
        <img
          className="Avatar"
          src={props.customer.picture}
          alt={props.customer.fullName}
        />
        <div className="Customer-fullName">{props.customer.fullName}</div>
      </div>
      <div className="Order-total">{formatPrice(props.total)}</div>
      <div className="Order-date">{props.date}</div>
    </div>
  );
}

// Этот компонент используется для отображения карточки заказа в панели управления интернет-магазином.
// В качестве пропсов он принимает объект такого вида:
{
  customer: {
    fullName: "Elon Musk";
    picture: "https://static01.nyt.com/images/2019/11/01/multimedia/01xp-elonmusk/merlin_162496989_edfc836d-1bcf-45b1-8c42-68eaaac5d1de-superJumbo.jpg"
  }
  total: 23190;
  date: "11.10.2021 15:44"
}

// Из-за вложенности объектов в пропсах с этим компонентом может быть не очень удобно работать.
// Такой компонент можно разбить на более мелкие. Попробуем выделить аватар пользователя в отдельный компонент:
function CustomerPicture(props) {
  return (
    <img
      className="Avatar" src={props.customer.picture}
      alt={props.customer.fullName}
    />
  )
}

// После этой доработки код компонента Order выглядит так:
function Order(props) {
  return (
    <div className="Order">
      <div className="Customer">
        <CustomerPicture customer={props.customer} />
        <div className="Customer-fullName">
          {props.customer.fullName}
        </div>
      </div>
      <div className="Order-total">
        {formatPrice(props.total)}
      </div>
      <div className="Order-date">
        {props.date}
      </div>
    </div>
  );
}

// Работа с компонентом Order стала удобнее, но имя пользователя всё равно берётся из вложенного объекта props.
// Попробуем ещё упростить Order. Для этого объединим информацию о покупателе в одном компоненте:
function CustomerInfo(props) {
  return (
    <div className="Customer">
      {/* Используем компонент для отображения аватара */}
      <CustomerPicture customer={props.customer} />
      <div className="Customer-username">
        {props.customer.fullName}
      </div>
    </div>
  );
}

// Получилось отлично! Теперь компонент Order выглядит так:
function Order(props) {
  return (
    <div className="Order">
      <CustomerInfo customer={props.customer} />
      <div className="Order-total">
        {formatPrice(props.total)}
      </div>
      <div className="Order-date">
        {props.date}
      </div>
    </div>
  );
}

// В этом примере мы выделили самостоятельную единицу данных из пропсов и сделали для неё самодостаточный компонент CustomerInfo.
// Разделять компоненты на более мелкие стоит, если:

// одна и та же функциональность используется многократно: например, Modal, Button, Avatar;
// функциональность компонента сама по себе сложная: корзина и фильтры в интернет-магазине, лента новостей в социальных сетях.

// В больших приложениях нужно иметь набор компонентов, которые используются многократно.
// Это позволяет сократить время на разработку, поддержку и обновление приложения.
// Кроме того, при обновлении компонента, который используется многократно, например Button, вы можете быть уверенными, что Button поменяется во всех местах использования.