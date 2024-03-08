//# (УСТАНОВКА)
//* npm i redux-persist

//* Импорт
import { persistStore, persistReducer } from 'redux-persist';
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
const persistedReducer = persistReducer(persistConfig, rootReducer);

//* Создание store
export const store = createStore(persistedReducer);

//* Создание persister
export const persister = persistStore(store);
