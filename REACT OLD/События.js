//# События
/*
onClick
onDoubleClick
onSubmit
onChange
onMouseOver
onPointerMove
onPointerEnter
onPointerLeave
*/

//# пример
// при передаче параметров нужно использовать стрелочную функцию
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
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Click me
      </button>
    </div>
  );
}

function Form() {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        setIsSent(true);
        sendMessage(message);
      }}
    ></form>
  );
}
