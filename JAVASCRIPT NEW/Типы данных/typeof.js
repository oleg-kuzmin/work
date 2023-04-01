//# typeof - определяет тип данных и возвращает строку с именем типа
// работает без скобок, но их ставят, когда нужно определить тип целого выражения
console.log(typeof (10 + 5)); // "number"

// оператор typeof некорректно определяет тип у null и возвращает значение 'object'. Это официально признанная ошибка.
console.log(typeof null); // object

// с undefined всё куда лучше и typeof(undefined) выдаст нам 'undefined'.
console.log(typeof undefined); // undefined

// функции относятся к объектному типу. Но typeof обрабатывает их особым образом, возвращая "function".
console.log(typeof alert); // "function" (3)

// Math — это встроенный объект, который предоставляет математические операции и константы.
console.log(typeof Math); // "object" (1)

// "Not a Number" имеет тип данных "number".
console.log(typeof NaN); // "number"

// хоть такого типа и нет
console.log(typeof function () {}); // "function"

// infinite (бесконечность тоже является числом)
console.log(typeof Infinity); // number
