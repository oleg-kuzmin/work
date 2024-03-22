//# useSelector (ПОЛУЧЕНИЕ ДАННЫХ STATE)
import { useSelector } from 'react-redux'; // импорт метода

export default function Component() {
  //* useSelector принимает в качестве аргумента функцию callback - принимающую объект state и возвращающую значение нужного свойства объекта state
  const todos = useSelector(state => state.todos); // сохранение в переменной полученных данных
}
