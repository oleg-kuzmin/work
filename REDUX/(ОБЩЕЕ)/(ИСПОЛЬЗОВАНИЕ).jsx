//# Структура приложения
/*
src
  components
  store
    index.js     - точка входа для configureStore
    nameSlice.js - созданный slice
*/

//# Порядок использования
// Обернуть в Provider из библиотеки react-redux приложение или его часть.
import { Provider } from 'react-redux'; // импорт компонента
import store from './store'; // импорт хранилища

<Provider store={store}>
  <App />
</Provider>;
