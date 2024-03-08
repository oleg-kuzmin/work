//# (ИСПОЛЬЗОВАНИЕ)
//* Импорт на уровне приложения (где Provider)
// PersistGate - тоже некий провайдер.
import { PersistGate } from 'redux-persist/integration/react';

<React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
</React.StrictMode>;

// loading={null} - возможный компонент preloader
// persistor={persistor} - то, что создано на уровне store
