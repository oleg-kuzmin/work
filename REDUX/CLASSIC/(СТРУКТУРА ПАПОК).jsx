//# (СТРУКТУРА ПАПОК)
/*
- Не нужно создавать одновременно и файл store и папку store

В папке src:

store/redux (отдельная папка)
  actions (очень часто встречается: отдельная папка под actions)
    tods-actions.js
    filter-actions.js
    index.js (точка входа при необходимости)
  reducers (очень часто встречается: отдельная папка под reducers)
    tods-reducer.js
    filter-reducer.js
    index.js (будет объединять все reducers через combineReducers)
  constants (часто встречается: отдельная папка под константы для action.type)
    tods-const.js
  selectors (иногда встречается: то что передается в useSelector - функция, которая возвращает нужные данные из state)
    allTodos.js
  index.js (точка входа, вся логика с созданием store)
*/
