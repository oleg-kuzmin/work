//# Использование CSSTransition
//* Установка npm-пакета
// npm install react-transition-group --save

//* Импорт в компонент
import { CSSTransition } from 'react-transition-group';
import styles from './MyComponent.module.scss';

function MyComponent() {
  return (
    <CSSTransition nodeRef={nodeRef} in={isActive} classNames={{ ...styles }} timeout={500} unmountOnExit>
      <div ref={nodeRef} className={styles.MyComponent}></div>
    </CSSTransition>
  );
}

//# Стилизация
// Можно передать классы через спред-оператор classNames={{ ...styles }} или как ключи объекта.
//* MyComponent.module.scss
/*
.enter {
  transform: translate3d(-100%, 0, 0);
}
.enterActive {
  transform: translate3d(0, 0, 0);
  transition: transform 0.3s;
}
.exit {
  transform: translate3d(0, 0, 0);
}
.exitActive {
  transform: translate3d(-100%, 0, 0);
  transition: transform 0.3s;
}
*/

//* classNames
/*
classNames={{
  enter: styles.MenuMobilePanel_enter,
  enterActive: styles.MenuMobilePanel_enterActive,
  exit: styles.MenuMobilePanel_exit,
  exitActive: styles.MenuMobilePanel_exitActive,
}}
*/
