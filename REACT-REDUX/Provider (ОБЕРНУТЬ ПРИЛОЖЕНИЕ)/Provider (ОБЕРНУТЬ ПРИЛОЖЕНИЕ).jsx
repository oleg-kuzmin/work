//# Provider (ОБЕРНУТЬ ПРИЛОЖЕНИЕ)
import { Provider } from 'react-redux'; // импорт компонента
import store from './store'; // импорт хранилища

<Provider store={store}>
  <App />
</Provider>;
