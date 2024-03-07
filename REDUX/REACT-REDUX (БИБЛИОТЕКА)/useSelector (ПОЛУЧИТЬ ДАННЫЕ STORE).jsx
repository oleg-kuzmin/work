//# useSelector (ПОЛУЧИТЬ ДАННЫЕ STORE)
//* Импорт
import { useSelector } from 'react-redux';

//# Синтаксис
const count = useSelector(state => state);
//* Функция-selector, которая определяет, что именно из store нам нужно.
/*
- Получает в качестве параметра наше хранилище state и возвращает то, что мы хотим оттуда взять.
- Если данные записаны в виде объекта, то получить их можно через точку: state => state.id
*/

//# Возвращает
//* Значение state из store.
