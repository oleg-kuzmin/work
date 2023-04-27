//# JSON.parse()
/* Преобразование строки JSON в объект: принимает JSON-строку в качестве аргумента.

Строка должна быть JSON-совместимой, то есть:
- на верхнем уровне должен быть объект или массив;
- ключи и значения-строки должны быть в двойных кавычках;
- кроме строк JSON может содержать числовые, булевы значения или null. */

//# пример
const json =
  '{"name":"Luke Skywalker", "height":"172", "mass":"77", "hair_color":"blond", "skin_color":"fair", "eye_color":"blue", "birth_year":"19BBY", "gender":"male"}';
const jedi = JSON.parse(json);

console.log(jedi.name); // Luke Skywalker
console.log(jedi.gender); // male
console.log(jedi.birth_year); // 19BBY

//# общая информация
// В случае, если строка не является валидным JSON-кодом, метод JSON.parse() выбросит ошибку SyntaxError.
