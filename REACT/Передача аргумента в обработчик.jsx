//# Передача аргумента в обработчик
//* Короткий вариант (рекомендуется)
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
