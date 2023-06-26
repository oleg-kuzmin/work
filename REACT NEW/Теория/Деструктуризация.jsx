//# Деструктуризация
const App = props => {
  const { initialButtonText } = props; // Деструктуризация объекта
  const [buttonText, setButtonText] = React.useState(initialButtonText); // Деструктуризация массива

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

//# или ({initialButtonText})
const App2 = ({ initialButtonText }) => {
  // const { initialButtonText } = props; // ({initialButtonText})
  const [buttonText, setButtonText] = React.useState(initialButtonText); // Деструктуризация массива

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
