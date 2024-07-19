//# (УСТАНОВКА)
//* npm i redux-persist (Входит в RTK)

//# store.js
//* Импорт
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//* Создание конфига
const persistConfig = {
  key: 'root', // создаст в localStorage ключ "persist:root"
  storage,
  // whiteList: [], - белый лист ключей (опционально), нужен чтобы не сохранять все
  // blackList: [], - черный лист ключей (опционально), нужен чтобы не сохранять все
  // обычно используют или whiteList или blackList
};

//* Обертка над rootReducer
const rootReducer = combineReducers({
  filter: filterReducer,
  todos: todosReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

//* Создание и экспорт store
export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: getDefaultMiddleWare =>
    getDefaultMiddleWare({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
// export const store = createStore(persistedReducer); // старый вариант

//* Создание persister
export const persistor = persistStore(store);

//# index.js
// Импорт на уровне приложения (где Provider). PersistGate - тоже некий провайдер.
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

// loading={null} - возможный компонент preloader или null
// persistor={persistor} - создан на уровне store
