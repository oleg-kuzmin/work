//# (СВЯЗЬ С REACT)
//* npm i react-redux
// Установить пакет react-redux

//* Импорт provider на уровне app и импорт store
import { Provider } from 'react-redux';
import { store } from './store'; // export const store = createStore(counter);

//* Обернуть приложение или нужную часть в provider и передать store
function Home() {
  return (
    <Provider store={store}>
      <main className={styles.main}>
        <h1>Hello Redux</h1>
        <Counter />
      </main>
    </Provider>
  );
}

