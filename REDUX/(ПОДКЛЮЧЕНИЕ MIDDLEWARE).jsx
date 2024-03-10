//# (ПОДКЛЮЧЕНИЕ MIDDLEWARE)
// MIDDLEWARE - представляет собой массив функций.
import logger from 'redux-logger'; // просто как пример

// ключ middleware, значение - функция, которая принимает getDefaultMiddleWare (по умолчанию) и возвращает все Default MiddleWare + нашу (ту, которую хотим)

export const store = configureStore({
  reducer: todoSlice.reducer,
  middleware: getDefaultMiddleWare => getDefaultMiddleWare().concat(logger),
});
