//# onMouseMove (Каждое движение мыши над элементом)
const handleMouseMoveOption = evt => {
  setIndexActiveOption(evt.target.value);
};

<li onMouseMove={handleMouseMoveOption}>{children}</li>;
