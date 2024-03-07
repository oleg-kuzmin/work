//# Provider (ПРОВАЙДЕР)
//* Импорт провайдера на уровне app и импорт store для передачи провайдеру
import { Provider } from 'react-redux';
import { store } from './store'; // export const store = createStore(counter) из файла store.js

//* Обернуть приложение или нужную часть в provider и передать обязательный параметр store
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
