//# onPointerMove (Перемещение курсора)

<div
  onPointerMove={e => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  }}
></div>;
