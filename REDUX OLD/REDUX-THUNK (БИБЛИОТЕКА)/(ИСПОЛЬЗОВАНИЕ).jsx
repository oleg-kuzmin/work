//# (ИСПОЛЬЗОВАНИЕ)
//* Импорт
import { thunk } from 'redux-thunk';

//* Добавить при создании store
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

//* Пример action-creators
const addUsers = users => ({
  type: 'ADD_USERS',
  payload: users,
});

// thunk
export const loadUsers = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => dispatch(addUsers(data)))
    .catch(err => console.error(err));
};
