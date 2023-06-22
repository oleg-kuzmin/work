//ГЛОБАЛЬНЫЕ ОБЪЕКТЫ
window
navigator








//РАБОТА С ЧИСЛАМИ
Math.floor() // округляет переданное число «вниз»
Math.ceil() // округляет переданное число «вверх»
Math.round() // округляет до ближайшего целого
Math.max() // возвращает наибольшее из переданных чисел
Math.min() // возвращает наименьшее из переданных чисел
Math.random() // возвращает случайное число от 0 включительно до 1 не включительно

Number.isInteger() // Это целое число? принимает число как аргумент, возвращает true или false

parseInt() // приводит переданный аргумент к целому числу, читает аргумент слева направо,
// если встречает не цифру, останавливается и возвращает всё, что было до этого
parseInt(***, 10)
//Второй аргумент — система счисления, в которой число передаётся функции

parseFloat() // приводит переданный аргумент к дробному числу, читает аргумент слева направо,
// если встречает не цифру, останавливается и возвращает всё, что было до этого
parseFloat(***, 10)
//Второй аргумент — система счисления, в которой число передаётся функции

//*ОБЪЕКТЫ
const object {  // создаем объект, содержит свойства(ключ: значение) и методы(функции), отделяются запятыми,
  nameUser: 'Alex',
  age: '35',
  sayHello: () => { // стрелочная функция (функция, которая записана в теле объекта называется методом объекта)
    console.log('Привет');
  }
}
console.log(object.nameUser); // обращаемся к элементу(ключу) объекта
console.log(object['nameUser']); // обращаемся к элементу(ключу) объекта, которого нет в объекте
console.log(object['name User']); // обращаемся к элементу(ключу) объекта, если он состоит из двух слов

const object = {
  keyA: 'ValueA',
  keyA: 'ValueA',
};

function addWelcomeMessage(keyA, ValueA) {
  object[keyA] = ValueA;
}

const object = {
  'name': {
    keyA: 'ValueA',
    keyB: 'ValueB',
    keyC: 'ValueC'
  },
  'name': {
    keyA: 'ValueA'
  }
};

function addPhoneNumber(name, keyA, ValueA) {
  if (!phonebook[name]) {
    phonebook[name] = {};
  }
  phonebook[name][keyA] = ValueA;
}



  // Удаление ключа из объекта. *DELETE
const obj = { one: 1 };
console.log(obj.one); // 1
delete obj.one;
console.log(obj.one); // undefined

  // Проверка наличия ключа в объекте. *IN
const whoIsAtHome = { // англ. who is at home, «кто есть дома?»
  father: 'папа',
  mother: 'мама'
};
console.log('father' in whoIsAtHome); // true


//ФУНКЦИИ
function sayHello() { // function declaration создаем функцию, в () указывается параметр(переменная) при необходимости, который нужно передать
  console.log('Привет');
  return hello // по умолчанию return не пишется и возвращает undefined
}
function sayHello(userObject) {
  console.log('Привет' + userObject.name),
}
const sayHello = () => { // function expression объявление функции внутри функционального выражения
  console.log('Привет');
}
sayHello() // вызываем функцию, в () указывается аргумент (реальные данные, которые попадают в параметр и далее используются)

//ОПЕРАТОР ЕСЛИ
if (условие) { // если условие выполняется, например if (element), т.е element = true
  // тело if
}


if (условие) { // если условие выполняется
  // тело if
} else { //иначе
  // тело else
}


if (условие) { // если первое условие выполняется
  // тело if
} else if (условие) { // если условия выше не выполняются, а это - да
  // тело else if
} else if (условие) { // если условия выше не выполняются, а это - да
  // тело else if
} else { // иначе
  // тело else
}

//ОПЕРАТОР SWITCH (применяют, когда в условии только один ответ правильный)
switch () { // () - Имя переменной для проверки
  case // Первое возможное значение:
    // Выполняемый код
    break; // стоп
  case // Второе возможное значение:
    // Выполняемый код
    break;
  case // Третье возможное значение:
    // Выполняемый код
 default:
    // Выполняемый код
}

//ТЕРНАРНЫЙ ОПЕРАТОР
const result = love ? 'к сердцу прижмёт' : 'нафиг пошлёт';
//result = love (условие)
//'к сердцу прижмёт' (значение, если true)
//'нафиг пошлёт' (значение, если false)


//ЦИКЛЫ
while (условие) { //при определенном условии
  // тело цикла, выполняется до отмены условия
}


for (***; ***; ***) {
  // тело цикла
}
// 1-переменная-счетчик цикла и её исходное значение
// 2-условие выполнения цикла
// 3-изменение переменной после каждой итерации


do { //выполнить цикл один раз и продолжить выполнять
  // тело цикла
} while (условие); //до определенного условия


// директива break останавливает цикл
for (***; ***; ***) {
  // тело цикла
break;
}


//директива continue пропустит итерацию
for (***; ***; ***) {
  // тело цикла continue
}

//ОБРАБОТЧИК СОБЫТИЙ
button.addEventListener(eventName, handler)
button.removeEventListener(eventName, handler)
// button - элемент, которому добавляем слушатель
// eventName - событие, на которое нужно отреагировать. Например 'click'
    // click	- клик по элементу
    // mouseover	- пользователь навёл указатель мыши на элемент
    // mouseout	- пользователь убрал указатель мыши с элемента
    // scroll - пользователь прокручивает элемент
// handler - функция-обработчик события. Она будет вызвана, когда событие сработает

//ОБЪЕКТ EVENT
button.addEventListener('click', function (evt) {
  evt.target.classList.toggle('song__like_active')
});

button.addEventListener('click', function (evt) {
  evt.target.closest.classList.toggle('song__like_active') // возвращает первого родителя
});


//КАК СДЕЛАТЬ ЗАПРОС ГЕО-ЛОКАЦИИ
const button = document.querySelector('.button');
const result = document.querySelector('.result');
function getPosition(position) {
    debugger
    const link = document.createElement('a');
    link.href = `https://www.openstreetmap.org/#map=12/${position.coords.latitude}/${position.coords.longitude}`;
    link.target = '_blank';
    link.textContent = 'Моя позиция на карте';
    result.append(link);
}
function handleClick() {
    navigator.geolocation.getCurrentPosition(getPosition)
}
button.addEventListener('click', handleClick)

//ОПЕРАТОР typeof
console.log(typeof nameUser); // string

//МЕТОДЫ
Number.isFinite(Infinity) // проверяет число на бесконечность, возвращает true или false
Number.isFinite(-Infinity) // проверяет число не -бесконечность, возвращает true или false
Number.isNaN(NaN) // проверяет число на NaN, возвращает true или false

//РОДСТВО (только для чтения, перезаписать не получится)
  //parentElement - родитель
const element = document.querySelector('p');
console.log(element.parentElement); // body, так как это родитель p
  //children - ребенок
const body = document.querySelector('body');
console.log(body.children); // псевдомассив HTMLCollection(3) [p, p, p]
  //firstElementChild и lastElementChild - первый ребенок и последний ребенок
const body = document.querySelector('body');
console.log(body.firstElementChild); // <p>Ребёнок раз</p>
console.log(body.lastElementChild); // <p>Ребёнок три</p>
  //previousElementSibling и nextElementSibling - предыдуший сосед и следующий сосед
const element = document.querySelectorAll('p')[1];
console.log(element.previousElementSibling); // <p>Ребёнок раз</p>
console.log(element.nextElementSibling); // <p>Ребёнок три</p>





/*
ОПЕРАТОРЫ СРАВНЕНИЯ:
>больше<меньше
>=больше или равно<=меньше или равно
===равно!==неравно

ОПЕРАТОРЫ ПРИСВАИВАНИЯ:
=равно
+=присваивание со сложением
-=присваивание с вычитанием

ЛОГИЧЕСКИЕ ОПЕРАТОРЫ НЕ, И, ИЛИ:
Логическое НЕ ! (отрицание, делает из истины ложь, а из лжи — истину)
Логическое И &&  (вернёт истину только когда две булевы переменные истинны)
Логическое ИЛИ || (вернёт истину, когда хотя бы одно из булевых переменных истинно)*/