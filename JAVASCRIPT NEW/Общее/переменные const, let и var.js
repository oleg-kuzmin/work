//# переменные const, let и var
/* - Переменные в JavaScript хранят значения, которыми оперирует код. Для создания переменных используются ключевые слова var, let и const.

- Использование var оправданно, если нужно писать код для старых браузеров времён IE 11 или Opera mini. Во всех остальных случаях лучше использовать let и const, так как они не позволят допустить ошибки, приводящие к неправильным значениям в переменных или изменениям глобальных переменных.
- Для создания переменной используется ключевое слово let, const или var. Сразу за ключевым словом идёт название переменной либо перечень переменных через запятую. Создание переменной также называют объявлением переменной.
- Переменные, объявленные через const и let, а также функции, созданные через функциональные выражения, не поднимаются.

Для имени переменной можно использовать следующие правила:
1) буквы латинского алфавита
2) цифры
3) символы $ и _
4) первый символ не должен быть цифрой

- В качестве названий переменных нельзя использовать зарезервированные языком слова. Например: class, super, throw, yield, var, let, const и так далее. Зарезервированные ключевые слова в ECMAScript 2015: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Lexical_grammar#зарезервированные_ключевые_слова_в_ecmascript_2015

- Перед выполнением скрипта JavaScript находит код создания переменных и заранее создаёт их. Получается, что в начале выполнения скрипта все переменные, описанные в коде, уже объявлены. В зависимости от браузера, они могут быть равны undefined (в Chrome и Safari), либо, в случае с let и const в браузере Firefox, не равны ничему и иметь специальное состояние uninitialized. */

//# const
//* Стартовое значение const изменить нельзя, будь то примитивное значение
const a = 5;
a = 10; // TypeError: Assignment to constant variable

//* Объект, хранящийся в const, может мутировать. Объекты хранятся по ссылке, и изменение объекта не приводит к изменению ссылки на него.
const obj = {
  a: 5,
};
obj.a = 10;
console.log(obj); // { a: 10 }

//* Имена констант (переменные, которые не меняют своё значение) принято писать, используя screaming_snake_case. В данной нотации все слова пишутся заглавными буквами, а разделителем является символ _.
const BASE_URL = 'https://doka.guide';
const PORT = 3000;
const UNAUTHORIZED_CODE = 401;
const COLOR_ORANGE = '#FF7F00';

//# let
//* Значение в переменной, созданной через let, можно изменять.
let b = 5;
console.log(5); // 5
b = 10;
console.log(a); // 10

//# var
//* Переменные, объявленные через var, имеют функциональную область видимости. Они доступны только в пределах текущей функции или глобального объекта, если функции нет:
if (true) {
  var c = 5;
}
console.log(c); // 5

function foo() {
  var d = 10;
}
console.log(d); // ReferenceError: b is not defined

// Объявление переменных вне функций делает их глобальными переменными. Они доступны как свойства глобального объекта.
var varVariable = 5;
console.log(window.varVariable); // 5
