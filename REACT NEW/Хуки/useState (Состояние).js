//# .useState() (Состояние)
/*
В метод в качестве аргумента передается начальное значение переменной.
Метод возвращает массив из двух элементов, поэтому можно использовать деструктуризацию массива (результата вызова метода useState).
1 возвращаемый элемент - это начальное значение (в примере 'Click me').
2 возвращаемый элемент - это функция
*/

//# пример
const App = () => {
  const [buttonText, setButtonText] = React.useState('Click me');

  const onButtonClick = () => {
    setButtonText('Hello from React');
  };

  return (
    <div>
      <button onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
};
