//# Приоритет операторов
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// Все операторы возвращают значение.

//*18  ()     (скобки)
//*16  ++     (постфиксный инкремент) (увеличивает переменную на 1, возвращает старое значение)
//*16  --     (постфиксный декремент) (уменьшает переменную на 1, возвращает старое значение)
//*15  ++     (префиксный инкремент)  (увеличивает переменную на 1, возвращает новое значение)
//*15  --     (префиксный декремент)  (уменьшает переменную на 1, возвращает новое значение)
//*15	 +      (унарный плюс) (преобразует нечисловые значения в число)
//*15	 -      (унарный минус)	(меняет знак числа на противоположный)
//*15  !      (логическое НЕ)
//*14	 **     (возведение в степень)
//*13	 *      (умножение)
//*13	 /      (деление)
//*13  %      (остаток от деления)
//*12	 +      (бинарный плюс - сложение, при наличии строки прозводит сложение и преобразование строк)
//*12	 -      (бинарный минус - вычитание)
//*9   <      (меньше)
//*9   <=     (меньше или равно)
//*9   >      (больше)
//*9   >=     (больше или равно)
//*8   ==     (равенство)
//*8   !=     (неравенство)
//*8   ===    (строгое равенство)
//*8   !==    (строгое неравенство)
//*5   &&     (логическое И)
//*4   ||     (логическое ИЛИ)
//*4   ??     (оператор нулевого слияния - присваивает значение переменной только если оно null или undefined)
//*2	 +=     (присваивание с сложением)
//*2	 -=     (присваивание с вычитанием)
//*2	 *=     (присваивание с умножением)
//*2	 /=     (присваивание с делением)
//*2	 **=    (присваивание с возведением в степень)
//*2   &&=    (присваивание с логическим И - присваивает значение переменной только если оно true)
//*2   ||=    (присваивание с логическим ИЛИ - присваивает значение переменной только если оно false)
//*2   ??=    (присваивание c нулевым слиянием - присваивает значение переменной только если оно null или undefined)
//*2	 =      (присваивание)
//*1   ,      (запятая - предоставляет возможность вычислять несколько выражений, возвращает результат последнего)

//# Aрифметические операторы
//*  +    (сложение)
//*  -    (вычитание)
//*  *    (умножение)
//*  **   (возведение в степень)
//*  /    (деление)
//*  %    (остаток от деления)

//# Логические операторы
//* variable!  (оператор НЕ)
/*
- Логическое НЕ делает из условия обратное: превращает true в false и наоборот.
- Если поставить ! перед небулевым значением, движок JS сначала приведёт тип к булю, а затем изменит значение на противоположное.
- Двойное отрицание !! сработает как перевод значения в логический тип.

1. Сначала приводит аргумент к логическому типу true/false.
2. Затем возвращает противоположное значение.
*/

//* variable && variable (оператор И) находит первое ложное значение
/*
- Вернёт истину, когда все булевы переменные истинны.
- Возвращает первое ложное значение. Или последнее, если ложных не найдено.

1. Оператор И идёт по простым условиям слева направо и проверяет каждое.
2. Приводит каждый аргумент к логическому типу true/false. Когда он встречает ложное значение, то останавливается и возвращает его как результат всего условия.
3. Если все операнды являются истинными (true), возвращает последний из них.
*/

//* variable || variable (оператор ИЛИ) находит первое истинное значение
/*
- Вернёт истину, когда хотя бы одно из булевых переменных истинно.
- Возвращает первое истинное значение. Или последнее, если ничего не найдено.
- Часто оператором ИЛИ присваивают переменной значение по умолчанию.

1. Оператор ИЛИ идёт по простым условиям слева направо и проверяет каждое.
2. Приводит каждый аргумент к логическому типу true/false. Когда он встречает правдивое значение, то останавливается и возвращает его как результат всего условия.
3. Если все операнды являются ложными (false), возвращает последний из них.
*/

//# Оператор нулевого слияния
//* variable ?? variable (оператор нулевого слияния)
/*
- В выражении между двумя операндами, он будет возвращать первый операнд, если он не равен null/undefined.
- Можно сказать, что ?? приравнивает смысл undefined/null к «ничего не содержит» и в этом случае, кладёт в переменную значение второго операнда.
- Возвращает первый операнд, если он не равен null/undefined.
- Если все операнды были null/undefined, возвращается последний.
*/

//# Операторы присваивания
//*  =	  (оператор присваивания)
//*  +=	  (оператор присваивания с сложением)
//*  -=	  (оператор присваивания с вычитанием)
//*  *=   (оператор присваивания с умножением)
//*  /=   (оператор присваивания с делением)
//*  &&=  (оператор присваивания с логическим И (присваивает значение переменной только если оно true)
//*  ||=  (оператор присваивания с логическим ИЛИ (присваивает значение переменной только если оно false)
//*  ??=  (оператор присваивания c нулевым слиянием (присваивает значение переменной только если оно null или undefined)

//# Операторы сравнения
//*  >    (больше)
//*  <    (меньше)
//*  >=   (больше или равно)
//*  <=   (меньше или равно)
//*  ==   (нестрогое равенство)
//*  !=   (нестрогое неравенство)
//*  ===  (строгое равенство)
//*  !==  (строгое неравенство)
/*
- При сравнении значений разных типов JavaScript приводит каждое из них к числу.
- Строгое равенство - проверяет равенство без приведения типов (т.е. разные типы не равны).
*/

//* null == undefined // true
// (Специальный случай. Значения null и undefined равны только друг другу при нестрогом сравнении)

//* NaN === NaN       // false
// Not a Number не является числом и не равен ничему.

//# Тернарный оператор
/*
- Он состоит из условия и двух значений: первое вернётся, если результат проверки true, второе — если false.
- Такая конструкция возвращает первое значение, если условие — true, и второе, если false.
- Главное отличие — тернарный оператор возвращает значение, а условная конструкция — нет.
*/

//* Cинтаксис
условие ? значение_если_true : значение_если_false;

//* Пример
const love = true;
console.log(love ? 'к сердцу прижмёт' : 'к чёрту пошлёт'); // "к сердцу прижмёт"

const value = 'любит';
console.log(value === 'любит' ? 'к сердцу прижмёт' : 'к чёрту пошлёт'); // "к сердцу прижмёт"

//# Rest Spread операторы
/*
- В ES6 появился новый оператор: ... (три точки). В зависимости от контекста применения и ожидаемой функциональности эти три точки ... называют либо spread, либо rest. В разных ситуациях он ведёт себя по-разному.
*/

//* При вызове функции — разбивает массив.
// Оператором spread можно «разложить» массив в отдельные аргументы функции.
const nums = [4, 8, 15, 16, 23, 42];
Math.max(...nums);
Math.max(4, 8, 15, 16, 23, 42);

//* При объявлении функции — собирает аргументы в массив.
// Rest-параметры выполняют действие, обратное оператору spread: собирают отдельные параметры функции в массив. Rest-параметр всегда стоит в конце.

function consoleDogs(firstDog, ...otherDogs) {
  console.log(`Первый: ${firstDog}`);
  console.log(`Остальные: ${otherDogs}`);
}

function consoleDogs(firstDog, otherDog1, otherDog2, otherDog3) {
  console.log(`Первый: ${firstDog}`);
  console.log(`Остальные: ${[otherDog1, otherDog2, otherDog3]}`);
}

consoleDogs('Спаниель', 'Овчарка', 'Борзая', 'Метис');
// Первый: Спаниель
// Остальные: ['Овчарка', 'Борзая', 'Метис']

//# Операторы Spread (Разделение) и Rest (Соединение)
/*
- Оператор разделения объекта на свойства (spread) или оператор соединения свойств в объект (rest).
- Не мутирует изначальный объект.
- Упрощают создание объектов и массивов на основе других объектов и массивов.
- Спред-синтаксис (spread) ... позволяет передавать итерируемые коллекции (например, массивы или строки) как список аргументов функции или добавлять содержащиеся в них элементы в новый массив.

- Спред-синтаксис легче всего изучать на примерах. Есть три контекста, в которых он применяется.
1) При вызове функции

2) При создании массивов с помощью литерала []
При использовании спред-синтаксиса элементы массива копируются только на один уровень вложенности. Если массив содержит объекты, то это будут те же самые объекты, что и в исходном массиве. Для глубокого копирования пользуйтесь библиотеками, например, lodash

3) При создании объекта с помощью литерала {}
Если свойства в новом и старом объекте совпадают, то будет использоваться значение свойства, которое шло последним:
*/

//* При вызове функции использовать значения из массива как аргументы:
function multiplyThreeNumbers(a, b, c) {
  return a * b * c;
}
const numbers = [1, 2, 3]; // Если в массиве будет больше элементов, чем параметров функции, то будут использованы только те элементы, которые идут первыми по порядку:

console.log(multiplyThreeNumbers(...numbers)); // 6

//* В массиве скопировать элементы из другого массива в новый:
const donor = ['это', 'старые', 'значения'];
const newArray = [...donor, 1, true, 'мама'];

console.log(newArray); // ['это', 'старые', 'значения', 1, true, 'мама']

//* У объекта скопировать свойства из другого объекта в новый:
const persona = { name: 'Иван', lastName: 'Объектов' };
const userData = { ...persona, username: 'killer3000' };

console.log(userData); // {name: 'Иван', lastName: 'Объектов', username: 'killer3000'}

//* запрещённые свойства
// Спред на объектах используют в библиотеке React. Программист может передать в функцию объект с произвольными свойствами, но мы хотим запретить устанавливать некоторые из них. В этом случае создаётся новый объект, в который сначала копируются присланные значения, а потом значения «запрещённых» свойств. В этом случае даже если запрещённое свойство было передано, оно будет перезаписано:

function Headline(props) {
  const filteredProps = { ...props, ariaHidden: false };
  return createElement('h1', filteredProps, 'Текст заголовка');
}

//* Второе назначение оператора ... - rest-параметры. Cобирают отдельные параметры функции в массив.
// Внимание: rest-параметр всегда стоит в конце.
function consoleDogs(firstDog, ...otherDogs) {
  console.log(`Первый: ${firstDog}`); // Первый: Спаниель,
  console.log(`Остальные: ${otherDogs}`); // Остальные: ['Овчарка', 'Борзая', 'Метис']
}
consoleDogs('Спаниель', 'Овчарка', 'Борзая', 'Метис');
