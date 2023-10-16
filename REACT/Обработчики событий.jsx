//# Создание обработчика
/*
- Обычно определяются внутри ваших компонентов.
- Имеют имена, начинающиеся с handle, за которым следует имя события.
- Функции, передаваемые в обработчики событий, должны передаваться, а не вызываться.
*/

//* передача функции как параметра
function Button() {
  function handleClick() {
    alert('You clicked me!');
  }
  return <button onClick={handleClick}>Click me</button>;
}

//* инлайн-обработчик удобен для коротких функций
<button
  onClick={() => {
    alert('You clicked me!');
  }}
/>;

//# Как передать аргумент
//* Короткий вариант
function Component() {
  const handleClick = argument => {
    return () => {
      console.log(argument);
    };
  };

  return (
    <div>
      <button onClick={handleClick('argument')}></button>
    </div>
  );
}

//* Длинный вариант
function Component() {
  const handleClick = argument => {
    console.log(argument);
  };

  return (
    <div>
      <button
        onClick={() => {
          handleClick('argument');
        }}
      ></button>
    </div>
  );
}
