//# object (ОБЪЕКТ)
/*
- Объекты в TS можно описывать с помощью ключевого слова object. Про это ключевое слово нужно знать, но не стоит использовать. Этот тип не говорит почти ни о чем ни комплирятору, ни человеку.
- Намного лучше описывать объекты так, как они есть - со всеми полями и типами данных в них.
*/

const colors: object = {
  red: '#f00',
  green: '#0f0',
  blue: '#00f',
};
