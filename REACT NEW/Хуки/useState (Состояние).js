//# .useState() (Состояние)
/*
В метод в качестве аргумента передается начальное значение переменной.
Метод возвращает массив из двух элементов, поэтому можно использовать деструктуризацию массива (результата вызова метода useState).
1 возвращаемый элемент - это начальное значение (в примере 'Click me').
2 возвращаемый элемент - это функция, которая при вызове далее принимает в качестве аргумента изменяемый элемент.
*/

//# пример
const App = () => {
  const [buttonText, setButtonText] = React.useState('Click me');
  const [classesList, setClassesList] = React.useState('');

  const onButtonClick = () => {
    setButtonText('Hello from React');
    setClassesList('newClass');
  };

  return (
    <div>
      <button className={classesList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};
