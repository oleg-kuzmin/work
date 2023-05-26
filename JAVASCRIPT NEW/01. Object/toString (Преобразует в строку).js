//# toString() (Преобразует в строку)
/*
- Метод toString() преобразует объект в строковое представление. Метод автоматически вызывается JavaScript, когда объект нужно представить в текстовом виде. Метод вызывается без аргументов.
- Если метод не переопределён, то он возвращает строку формата [object тип], где тип — это строка, которая уточняет тип объекта. В подавляющем большинстве вы будете видеть вывод [object Object].
- Существует соглашение, что метод toString() вызывается JavaScript автоматически, если объект находится в контексте, где он должен быть представлен в виде строки. Чаще всего это случаи, связанные с печатью данных на экран или в консоль браузера.
- Объекты, в отличие от примитивных типов, сложно преобразовывать в строку. Объект может содержать произвольное количество полей и без программиста непонятно, какие из них важные. Поэтому стандартная реализация метода toString() представляет собой заглушку, печатающую '[object Object]'.
- Стандартная реализация метода toString() не даёт достаточно информации об объекте даже для использования в отладке программы. Программисты могут переопределить метод toString(), чтобы выводить необходимые данные.
- На практике метод toString() переопределяют нечасто.
- Метод не подходит для вывода данных в интерфейсе из-за негибкости, для интерфейса используют специальные библиотеки, такие как React и его альтернативы. Метод отлично подходит для отладочной информации, но современные инструменты разработчика в браузере умеют выводить объект в консоль интерактивно, с возможностью просмотра содержимого.
*/

const book = {
  title: 'JavaScript: the good parts',
  author: 'Douglas Crockford',
};

console.log(`Сейчас читаю ${book}`); // Сейчас читаю [object Object]

//# пример
//* описываем функцию объекта toString, которая отвечает за приведение к строке
alert({
  id: 5,
  text: 'Пример',
  toString: function () {
    return `${this.id}: ${this.text}`;
  },
});

//* если мы работаем в ООП стиле, то классу нужно просто добавить метод toString()
class MyBook {
  title = '';
  author = '';
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  toString() {
    return `«${this.title}», автор ${this.author}`;
  }
}

const myBook = new MyBook('Палата №6', 'А. П. Чехов');
console.log(`Читаю ${myBook}`); // Читаю «Палата №6», автор А. П. Чехов

//* если вы предпочитаете работать в функциональном стиле, то придётся создать новый тип объекта и переопределить метод toString() в прототипе
function NewBook(title, author) {
  this.title = title;
  this.author = author;
}

NewBook.prototype.toString = function () {
  return `«${this.title}», автор ${this.author}`;
};

const newBook = new NewBook('Палата №6', 'А. П. Чехов');
console.log(`Читаю ${newBook}`); // Читаю «Палата №6», автор А. П. Чехов
