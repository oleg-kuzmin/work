//# useContext (КОНТЕКСТ)
// Нужен для того, чтобы не пробрасывать props на 10 уровней вниз.

//# Создание компонента с нужными методами/свойствами - CustomContext.jsx
//* импорт createContext
import { createContext, useState } from 'react';

//* создание переменной CustomContext
export const CustomContext = createContext();

//* создание компонента
export const Context = props => {
  const [books, setBooks] = useState([
    { id: 1, title: 'JS' },
    { id: 2, title: 'React' },
    { id: 3, title: 'NodeJs' },
  ]);

  const addBook = book => {
    setBooks([book, ...books]);
  };

  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  //* отдельно для удобства создание объекта, который будет записываться в CustomContext
  const value = {
    books,
    addBook,
    removeBook,
  };

  //* возврат контекста, который будет оборачивать дочерние элементы
  return <CustomContext.Provider value={value}>{props.children}</CustomContext.Provider>;
};

//# Получение доступа к свойству - Books.jsx
import { useContext } from 'react'; // импорт хука
import { CustomContext } from '../Context'; // также нужно импортировать переменную

export function Books() {
  //* получаем доступ к свойству books
  const { books = [] } = useContext(CustomContext);
  console.log(books); // { id: 1, title: 'JS' }...
  return <div className="books">{books}</div>;
}

//# Получение доступа к методу - Book.jsx
import { useContext } from 'react'; // импорт хука
import { CustomContext } from '../Context'; // также нужно импортировать переменную

export function Book(props) {
  //* получаем доступ к методу removeBook
  const { removeBook } = useContext(CustomContext);
  return (
    <h2
      onClick={() => {
        removeBook(props.id);
      }}
    >
      {props.title}
    </h2>
  );
}
