// TODO Оператор typeof возвращает тип аргумента.
// Синтаксис:
typeof x || typeof(x)

// Вызов typeof x возвращает строку с именем типа:
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)
// Math — это встроенный объект, который предоставляет математические операции и константы.

typeof null // "object"  (2)
// Результатом вызова typeof null является "object".
// Это официально признанная ошибка в typeof, ведущая начало с времён создания JavaScript сохранённая для совместимости.
// Конечно, null не является объектом. Это специальное значение с отдельным типом.

typeof alert // "function"  (3)
// Вызов typeof alert возвращает "function", потому что alert является функцией.
// Функции относятся к объектному типу.
// Но typeof обрабатывает их особым образом, возвращая "function".
// Так тоже повелось от создания JavaScript.
// Формально это неверно, но может быть удобным на практике.