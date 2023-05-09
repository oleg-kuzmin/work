//# импорт картинок
/*
- Webpack изменяет имена файлов при сборке, поэтому пути к картинкам будут неправильными.
- Вместо названия файла Webpack подставляет хеш — строку, которая рассчитана на основе содержимого файла.
- Если содержимое файла меняется, меняется и хеш.
*/

//# 1 способ: Импортируем каждое изображение в JS-файл (вебпак добавит в переменные правильные пути)
import jordanImage from './images/jordan.jpg';
import jamesImage from './images/james.jpg';
import bryantImage from './images/bryant.jpg';

const whoIsTheGoat = [
  // меняем исходные пути на переменные
  { name: 'Michael Jordan', image: jordanImage },
  { name: 'Lebron James', link: jamesImage },
  { name: 'Kobe Bryant', link: bryantImage },
];

//# 2 способ: Этот способ отличается от первого только тем, что работает и без запуска Webpack.
// Свойство import.meta.url — служебный параметр, который указывает на адрес файла.
const jordanImage2 = new URL('./images/jordan.jpg', import.meta.url);
const jamesImage2 = new URL('./images/james.jpg', import.meta.url);
const bryantImage2 = new URL('./images/bryant.jpg', import.meta.url);

const whoIsTheGoat2 = [
  // меняем исходные пути на переменные
  { name: 'Michael Jordan', image: jordanImage },
  { name: 'Lebron James', link: jamesImage },
  { name: 'Kobe Bryant', link: bryantImage },
];
