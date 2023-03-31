//# boolean
// Логический или булев тип boolean может принимать лишь истинное (true) и ложное (false) значения.

//# пример
//* Первый способ создания — явно указать значение, используя ключевые слова true и false
const truthyValue1 = true; // Истина
const falsyValue1 = false; // Ложь

//* Второй способ создания — использовать метод Boolean
const truthyValue2 = Boolean(1); // «Истина»
const falsyValue2 = Boolean(""); // «Ложь»

//* Третий способ — использовать выражения, значениями которых будут «истина» или «ложь»
const truthyValue3 = Boolean(4 < 5); // true
const anotherTruthy3 = 4 < 5; // true
const falsyValue3 = Boolean(2 * 2 === 5); // false
const anotherFalsy3 = 2 * 2 === 5; // false

//# общая информация
// Обычно логическим переменным дают названия, начинающиеся с английских глаголов is, should, does, can и подобных.