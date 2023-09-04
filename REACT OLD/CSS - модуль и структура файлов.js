//# components/Info.jsx
import styles from './Info.module.css';

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello</h1>
    </div>
  );
}

//# components/Info.module.css
// .info {
//   color: red;
// }

//# структура (можно разбить на компоненты или логические блоки)
/*
/src
  index.js
  index.css
  /components
    /App
      App.jsx
      App.module.css
    /Info
      Info.jsx
      Info.module.css
    /Ui
*/
