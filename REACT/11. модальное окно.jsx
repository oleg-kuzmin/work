// TODO 1. App.jsx
import Modal from "./Modal";
import { useState } from "react";
export function App() {
  // Мы вызываем его, чтобы наделить наш функциональный компонент внутренним состоянием.
  // React будет хранить это состояние между рендерами
  const [modalActive, setModalActive] = useState(true);
  // * возвращает массив с двумя элементами, который содержит: текущее значение состояния и функцию для его обновления
  // Единственный аргумент useState — это начальное состояние

  return (
    <div>
      <main>
        <button onClick={() => {setModalActive(true)}}>Открыть</button>
        <p>Main content</p>
      </main>
      <Modal active={modalActive} setActive={setModalActive}>
        <p>content</p>
      </Modal>
    </div>
  );
}

// TODO 2. Modal.jsx
import React from "react";
export function Modal({ active, setActive, children }) {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={active ? "modal__content active" : "modal__content"} onClick={(evt) => evt.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

// TODO 3. styles.css
// .modal {
//   height: 100vh;
//   width: 100vw;
//   background-color: rgba(0, 0, 0, .4);
//   position: fixed;
//   top: 0;
//   left: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   opacity: 0;
//   pointer-events: none;
//   transition: .5s;
// }

// .modal.active {
//   opacity: 1;
//   pointer-events: all;
// }

// .modal__content {
//   padding: 20px;
//   border-radius: 12px;
//   background-color: white;
//   width: 50vw;
//   transform: scale(.5);
//   transition: .4s all;
// }

// .modal__content.active {
//   transform: scale(1);
// }



