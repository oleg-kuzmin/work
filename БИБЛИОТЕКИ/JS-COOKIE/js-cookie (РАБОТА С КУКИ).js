//# js-cookie (РАБОТА С КУКИ)
//* npm i js-cookie
// https://www.npmjs.com/package/js-cookie

// Формат строки document.cookie не очень удобен для работы, поэтому обычно в проекте создают функции, которые упрощают чтение и запись кук. Чтобы не писать эти функции самостоятельно, можно взять библиотеку js-cookie — это совсем небольшая обёртка над стандартным браузерным API, которая здорово упрощает жизнь.

//* С этой библиотекой установка значения для куки выполняется так:
import Cookies from 'js-cookie';
Cookies.set('foo', 'bar');

//* А чтение так:
import Cookies from 'js-cookie';
const nameFromCookie = Cookies.get('name');
console.log(nameFromCookie);
