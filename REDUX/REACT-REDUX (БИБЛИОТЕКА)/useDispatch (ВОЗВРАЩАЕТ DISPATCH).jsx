//# useDispatch (ВОЗВРАЩАЕТ DISPATCH)
//* Импорт
import { useDispatch } from 'react-redux';

//# Синтаксис
const dispatch = useDispatch();

//# Возвращает
//* Функцию dispatch.

//# Пример
import { increment } from './store';

const Counter = () => {
  const count = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{count}</h2>
      <button
        onClick={() => {
          dispatch(increment);
        }}
      ></button>
    </div>
  );
};
