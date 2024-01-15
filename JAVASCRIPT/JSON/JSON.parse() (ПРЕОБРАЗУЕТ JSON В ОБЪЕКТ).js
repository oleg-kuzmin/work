//# JSON.parse() (ПРЕОБРАЗУЕТ JSON В ОБЪЕКТ)
// Преобразовать строку с JSON в объект JavaScript можно с помощью метода JSON.parse(). Он принимает JSON-строку в качестве аргумента. В случае, если строка не является валидным JSON-кодом, метод JSON.parse() выбросит ошибку SyntaxError.

//# Синтаксис
//* JSON-Строка
JSON.parse('json-string');

//# Пример
const json =
  '{"name":"Luke Skywalker","height":"172","mass":"77","hair_color":"blond","skin_color":"fair","eye_color":"blue","birth_year":"19BBY","gender":"male"}';
const jedi = JSON.parse(json);

console.log(jedi.name); // Luke Skywalker
console.log(jedi.gender); // male
console.log(jedi.birth_year); // 19BBY
