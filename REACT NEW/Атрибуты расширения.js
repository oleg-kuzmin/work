//# Атрибуты расширения
// Вложенная структура пропсов — частое явление, особенно при работе с сервером, который возвращает многоуровневый JSON. Чтобы сделать код более компактным и читаемым, можно использовать оператор расширения. В этом примере оба компонента идентичны:

function CustomerPage(props) {
  return <ProfileInfo firstName={props.profileData.firstName} lastName={props.profileData.lastName} />;
}

function CustomerPage(props) {
  return <ProfileInfo {...props.profileData} />;
}

// Оператор расширения помогает отсеивать нужные пропсы и передавать в целевой компонент только необходимые данные:

const Input = props => {
  const { size, userId, ...otherProps } = props;
  const className = size === 'default' ? 'DefaultInput' : 'SmallInput';
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

// {
//   size: "default",
//   type:"text",
//   disabled: false,
//   userId: 1112983
// }

// При этом пропсы size и userId используются безопасно и не передаются в DOM-элемент <input/>. Пропс size используется внутри для вычисления класса, а userId не задействован вовсе. Поэтому в объекте otherProps остаются только нужные DOM-элементу пропсы — type и disabled.

// Атрибуты расширения могут быть полезны и сокращают код, но есть риск передать лишние пропсы в компоненты или невалидные HTML-атрибуты в DOM. Используйте этот инструмент с осторожностью.
