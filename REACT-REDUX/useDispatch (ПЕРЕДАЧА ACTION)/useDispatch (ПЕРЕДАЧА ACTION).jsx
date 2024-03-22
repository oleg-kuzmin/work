//# useDispatch (ПЕРЕДАЧА ACTION)
import { useDispatch } from 'react-redux'; // импорт метода
import { addTodo } from './store/todoSlice'; // импорт action

export default function Component() {
  // создаем и сохраняем в переменную результат вызова useDispatch()
  const dispatch = useDispatch();

  //* dispatch принимает в качестве аргумента вызов action
  return (
    <button
      onClick={() => {
        dispatch(addTodo({ text: 'Clear cat' }));
      }}
    ></button>
  );
}
