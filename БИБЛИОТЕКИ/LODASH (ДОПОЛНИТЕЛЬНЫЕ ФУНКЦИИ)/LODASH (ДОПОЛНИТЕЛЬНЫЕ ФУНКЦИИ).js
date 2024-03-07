//# LODASH (ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ)
//* npm i lodash

//# Синтаксис throttle
import throttle from 'lodash/throttle';
const myFunction = () => {};

//* myFunction - функция
//* 1000 - ограничение по времени в мс
throttle(myFunction, 1000);
