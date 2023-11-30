//# createPortal
/*
- createPortal позволяет вам выводить некоторые дочерние элементы в другую часть DOM.
- Порталы позволяют вашим компонентам рендерить некоторые из своих дочерних компонентов в другое место в DOM. Это позволяет части вашего компонента "вырваться" из контейнеров, в которых он может находиться. Например, компонент может отображать модальный диалог или всплывающую подсказку, которая появляется над и вне остальной части страницы.
- Портал изменяет только физическое размещение узла DOM. Во всех остальных отношениях JSX, который вы отображаете в портал, действует как дочерний узел компонента React, который его отображает. Например, дочерний узел может получить доступ к контексту, предоставляемому родительским деревом, а события передаются от дочерних узлов к родительским в соответствии с деревом React.
- createPortal возвращает узел React, который может быть включен в JSX или возвращен из компонента React. Если React встретит его в выводе рендера, он поместит предоставленные children внутрь предоставленного domNode.
- События от порталов распространяются в соответствии с деревом React, а не с деревом DOM. Например, если вы щелкните внутри портала, а портал обернут в <div onClick>, то сработает обработчик onClick. Если это вызывает проблемы, либо остановите распространение событий внутри портала, либо переместите сам портал вверх в дереве React.
*/

//* 1. Импорт
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

//* 2. Вызов в компоненте
// Без портала параграф был бы помещен внутрь родительского div, но портал "телепортировал" его в document.body:
function MyComponent() {
  const [documentContainer, setDocumentContainer] = useState(null);
  useEffect(() => {
    setDocumentContainer(document.body);
  }, [documentContainer]);

  return (
    <div>
      <h1>Text</h1>
      {documentContainer !== null && createPortal(<p>Add Portal Text</p>, document.body)}
    </div>
  );
}

//# Синтаксис createPortal(children, domNode, key)
//* children
// Все, что может быть отображено с помощью React, например, фрагмент JSX (т. е. <div /> или <SomeComponent />), Fragment (<>...</>), строка или число, или массив из них.

//* domNode
// Некоторый узел DOM, например, возвращаемый document.getElementById(). Узел должен уже существовать. Передача другого узла DOM во время обновления приведет к тому, что содержимое портала будет создано заново.

//* key (опционально)
// Уникальная строка или число, которое будет использоваться в качестве ключа портала.

//# Модальное окно
import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent.js';

function PortalExample() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>Show modal using a portal</button>
      {showModal && createPortal(<ModalContent onClose={() => setShowModal(false)} />, document.body)}
    </>
  );
}
