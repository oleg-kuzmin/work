//# Приоритет операторов
/*
- https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
- Все операторы возвращают значение.
- Арифметические операторы (кроме бинарного плюса) работают только с числами и всегда преобразуют операнды в числа.
*/

//# Скобки
//*18  ()     (скобки)

//# Инкремент/декремент
//*16  ++     (постфиксный инкремент) (увеличивает переменную на 1, возвращает старое значение)
//*16  --     (постфиксный декремент) (уменьшает переменную на 1, возвращает старое значение)
//*15  ++     (префиксный инкремент)  (увеличивает переменную на 1, возвращает новое значение)
//*15  --     (префиксный декремент)  (уменьшает переменную на 1, возвращает новое значение)

//# Унарные
//*15	 +      (унарный плюс) (преобразует нечисловые значения в число)
//*15	 -      (унарный минус)	(меняет знак числа на противоположный)

//# Логические
//*15  !      (логическое НЕ)
/*
- Логическое НЕ делает из условия обратное: превращает true в false и наоборот.
- Если поставить ! перед небулевым значением, движок JS сначала приведёт тип к булю, а затем изменит значение на противоположное.
- Двойное отрицание !! сработает как перевод значения в логический тип.

1. Сначала приводит аргумент к логическому типу true/false.
2. Затем возвращает противоположное значение.
*/

//# Математические
//*14	 **     (возведение в степень)
//*13	 *      (умножение)
//*13	 /      (деление)
//*13  %      (остаток от целочисленного деления)
//*12	 +      (бинарный плюс - сложение, при наличии строки прозводит конкатенацию строк)
//*12	 -      (бинарный минус - вычитание)

//# Сравнения
//*9   <      (меньше)
//*9   <=     (меньше или равно)
//*9   >      (больше)
//*9   >=     (больше или равно)
//*8   ==     (равенство)
//*8   !=     (неравенство)
//*8   ===    (строгое равенство)
//*8   !==    (строгое неравенство)

/*
- При сравнении значений разных типов JavaScript приводит каждое из них к числу.
- Строгое равенство - проверяет равенство без приведения типов (т.е. разные типы не равны).
*/
//* null == undefined // true
// (Значения null и undefined равны друг другу при нестрогом сравнении и не равны ничему другому)
//* NaN === NaN // false
// (Not a Number не является числом, поэтому не равен ничему)

//# Логические
//*5   &&     (логическое И - находит первое ложное значение)
/*
- Вернёт истину, когда все булевы переменные истинны.
- Возвращает первое ложное значение. Или последнее, если ложных не найдено.

1. Оператор && идёт по простым условиям слева направо и проверяет каждое.
2. Приводит каждый аргумент к логическому типу true/false. Когда он встречает ложное значение, то останавливается и возвращает его как результат всего условия.
3. Если все операнды являются true - возвращает последний из них.
*/

//*4   ||     (логическое ИЛИ - находит первое истинное значение)
/*
- Вернёт истину, когда хотя бы одно из булевых переменных истинно.
- Возвращает первое истинное значение. Или последнее, если ничего не найдено.

1. Оператор || идёт по простым условиям слева направо и проверяет каждое.
2. Приводит каждый аргумент к логическому типу true/false. Когда он встречает правдивое значение, то останавливается и возвращает его как результат всего условия.
3. Если все операнды являются false - возвращает последний из них.
*/

//*4   ??     (оператор нулевого слияния - присваивает значение переменной только если оно null или undefined)
/*
- В выражении между двумя операндами, он будет возвращать первый операнд, если он не равен null/undefined.
- Если все операнды были null/undefined, возвращается последний.
*/

//# Присваивание
// Присваивание также возвращает значение.
//*2	 =      (присваивание)
//*2	 +=     (присваивание с сложением)
//*2	 -=     (присваивание с вычитанием)
//*2	 *=     (присваивание с умножением)
//*2	 /=     (присваивание с делением)
//*2	 **=    (присваивание с возведением в степень)
//*2   &&=    (присваивание с логическим И - присваивает значение переменной только если оно true)
//*2   ||=    (присваивание с логическим ИЛИ - присваивает значение переменной только если оно false)
//*2   ??=    (присваивание c нулевым слиянием - присваивает значение переменной только если оно null/undefined)

//# Запятая
//*1   ,      (запятая - предоставляет возможность вычислять несколько выражений, возвращает результат последнего)
