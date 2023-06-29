//# События
/*
onClick
onDoubleClick
onSubmit
onChange
onMouseOver
*/

//# пример
function App() {
  const handleClick = () => {
    console.log('Меня кликнули!');
  };
  const handleImgHover = () => {
    console.log('На меня смотрят?');
  };

  return (
    <div>
      <img src="#" onMouseOver={handleImgHover} />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
