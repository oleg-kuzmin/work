//! Warning findDOMNode is deprecated in StrictMode (CSSTransition)
//* 1. Нужно добавить хук useRef
import { useRef } from 'react';

//* 2. Родителю CSSTransition nodeRef={nodeRef}
//* 3. Дочернему элементу ref={nodeRef}
function Card() {
  const nodeRef = useRef(null);

  return (
    <CSSTransition nodeRef={nodeRef} in={cardOrder.counter > 0} classNames="card__counter" timeout={200} unmountOnExit>
      <div ref={nodeRef} className="card__counter">
        {cardOrder.counter}
      </div>
    </CSSTransition>
  );
}
