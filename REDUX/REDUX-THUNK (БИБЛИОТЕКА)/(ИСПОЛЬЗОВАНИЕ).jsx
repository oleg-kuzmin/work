//# (ИСПОЛЬЗОВАНИЕ)
//* Импорт
import { thunk } from 'redux-thunk';

//* Использование при создании store
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
