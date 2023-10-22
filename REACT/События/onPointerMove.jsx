//# onPointerMove (Перемещение курсора)

<div
  onPointerMove={e => {
    position.x = e.clientX;
    position.y = e.clientY;
  }}
></div>;
