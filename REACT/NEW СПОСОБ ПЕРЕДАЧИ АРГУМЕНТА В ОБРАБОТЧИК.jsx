//# Способ передачи аргумента
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
