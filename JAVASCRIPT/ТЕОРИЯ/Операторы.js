//# приоритет операторов
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

//*19  ()     (скобки)
//*16  var++  (постфиксный инкремент) (увеличивает переменную на 1, аналогично value = value + 1, => старое значение)
//*16  var--  (постфиксный декремент) (уменьшает переменную на 1, аналогично value = value - 1, => старое значение)
//*15  ++var  (префиксный инкремент)  (увеличивает переменную на 1, аналогично value + 1 = value, => новое значение)
//*15  --var  (префиксный декремент)  (уменьшает переменную на 1, аналогично value - 1 = value, => новое значение)
//*15	 +var   (унарный плюс) (преобразует нечисловые значения в число)
//*15	 -var   (унарный минус)	(меняет знак числа на противоположный)
//*15  !      (логическое НЕ)
//*14	 **     (возведение в степень)
//*13	 *      (умножение)
//*13	 /      (деление)
//*13  %      (остаток от деления)
//*12	 +      (сложение)
//*12	 -      (вычитание)
//*5   &&     (логическое И)
//*4   ||     (логическое ИЛИ)
//*4   ??     (оператор нулевого слияния) (используется для присвоения переменным значений по умолчанию)
//*2	 +=     (присваивание с сложением)
//*2	 -=     (присваивание с вычитанием)
//*2	 *=     (присваивание с умножением)
//*2	 /=     (присваивание с делением)
//*2	 =      (присваивание)
//*1   ,      (запятая) (предоставляет возможность вычислять несколько выражений, => результат только последнего)

//# Aрифметические операторы
//*  +    (сложение)
//*  -    (вычитание)
//*  *    (умножение)
//*  **   (возведение в степень)
//*  /    (деление)
//*  %    (остаток от деления)

//# Логические операторы
//*  !  (оператор НЕ)
/*
- Логическое НЕ делает из условия обратное: превращает true в false и наоборот.
- Если поставить ! перед небулевым значением, движок JS сначала приведёт тип к булю, а затем изменит значение на противоположное.
- Двойное отрицание !! сработает как перевод значения в логический тип.

1. Сначала приводит аргумент к логическому типу true/false.
2. Затем возвращает противоположное значение.
*/

//*  && (оператор И)
/*
- Вернёт истину, когда все булевы переменные истинны.
- Возвращает первое ложное значение. Или последнее, если ложных не найдено.

1. Оператор И идёт по простым условиям слева направо и проверяет каждое.
2. Приводит каждый аргумент к логическому типу true/false. Когда он встречает ложное значение, то останавливается и возвращает его как результат всего условия.
3. Если все операнды являются истинными (true), возвращает последний из них.
*/

//*  || (оператор ИЛИ)
/*
- Вернёт истину, когда хотя бы одно из булевых переменных истинно.
- Возвращает первое истинное значение. Или последнее, если ничего не найдено.
- Часто оператором ИЛИ присваивают переменной значение по умолчанию.

1. Оператор ИЛИ идёт по простым условиям слева направо и проверяет каждое.
2. Приводит каждый аргумент к логическому типу true/false. Когда он встречает правдивое значение, то останавливается и возвращает его как результат всего условия.
3. Если все операнды являются ложными (false), возвращает последний из них.
*/

//# Оператор нулевого слияния
//*  ?? (оператор нулевого слияния)
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

//* null == undefined // true (равны друг другу и не равны никаким другим значениям)
//* NaN === NaN       // false

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

//# Ternary Operator (Тернарный оператор)
/*
- Тернарный оператор работает с тремя операндами: одним условием и двумя выражениями.
- Унарные: один операнд, бинарные: два операнда, тернарные: три операнда.
- Возвращает первое выражение, если условие истинно и второе, если условие ложно.
- Используется как компактная замена условного оператора if...else.
- Первое выражение вернётся, если результат проверки true, второе — если false.
- Главное отличие — тернарный оператор возвращает значение, а условная конструкция — нет.
- Так как результат работы тернарного оператора можно записать в переменную, то смело делаем вывод, тернарный оператор — выражение.
- При выборе между if...else и тернарным оператором в приоритет нужно ставить читабельность. Код читается чаще, чем пишется, поэтому чем лучше код читается, тем легче его понимать и изменять.
*/

//* Cинтаксис
условие ? значениеЕслиTrue : значениеEслиFalse;

//* Пример
// 2 значения
const love = true;
const result = love ? 'к сердцу прижмёт' : 'к чёрту пошлёт';
console.log(result); // "к сердцу прижмёт"

// несколько значений и стрелочная функция
const getStatus = age => (age < 14 ? 'Children' : age < 20 ? 'Teen' : age < 50 ? 'Adult' : 'Old');
