//# .classList
// Для управления атрибутом class удобнее пользоваться свойством classList. Оно содержит список всех классов элемента и обладает собственными методами, чтобы управлять этими классами.

//# пример
// В именах классов записаны марки машин Её Величества
<div class="bentley rolls-royce">Королевский гараж</div>;

// получаем список машин королевы в переменной, обратившись к соответствующему элементу с селектором .bentley
let garage = document.querySelector('.bentley');
console.log(`Гараж Её Величества: ${garage.classList}`); // Гараж Её Величества: bentley rolls-royce

//# .classList.contains()
// Проверка наличия класса. Метод contains проверяет, есть ли у элемента класс, переданный как аргумент:
let garage2 = document.querySelector('.bentley');
garage.classList.contains('bentley'); // true — bentley есть
garage.classList.contains('jaguar'); // false — а jaguar нет

//# .classList.add()
// Присвоение класса элементу. Метод add добавляет элементу класс:
garage.classList.add('jaguar');
garage.classList.add('jaguar', 'porshe');
console.log(`Гараж Её Величества: ${garage.classList}`); // bentley rolls-royce jaguar

//# .classList.remove()
// Удаление класса. Метод remove удаляет у элемента класс, переданный как аргумент:
garage.classList.remove('jaguar'); // Ягуар надоел
console.log(`Гараж Её Величества: ${garage.classList}`); // bentley rolls-royce

//# .classList.toggle()
// Переключение класса. Метод toggle работает как add, если у элемента класс отсутствует, и как remove — если присутствует.
garage.classList.toggle('jaguar');
console.log(`Гараж Её Величества: ${garage.classList}`); // bentley rolls-royce

// Метод toggle() принимает только один класс для переключения. Опционально вторым аргументом можно передать boolean-значение: метод будет работать как add(), если передать true, и как remove(), если передать false.

const button = document.querySelector('button.submit'); // На кнопке есть класс submit
button.classList.toggle('submit', false); // Передаём вторым аргументом false и будет работать как remove()
console.log(button.classList[0]); // undefined, потому что класса больше нет
button.classList.toggle('submit', true); // Передаём true и теперь класс добавится

//# .classList.replace()
/* Замена класса. Метод позволяет заменить одно значение класса другим. Метод принимает 2 параметра:
1) название класса, который нужно заменить
2) название класса, на что нужно заменить

После выполнения replace() возвращает boolean-значение, которые сообщает нам об успешности операции:
- true если класс был заменён;
- false если ничего не изменилось. */

const button2 = document.querySelector('button.hidden'); // На кнопке есть класс hidden
const result = button.classList.replace('hidden', 'visible'); // Заменяем класс hidden на visible
console.log(result); // true, класс успешно заменился на visible
const resultAgain = button.classList.replace('hidden', 'visible'); // Попробуем заменить еще раз
console.log(result); // false, потому что ничего не изменилось

//# общая информация
/* - Если передать в add() несколько строк-аргументов, тогда добавится несколько классов.
- Можно не бояться, что один и тот же класс добавится два раза. Если вызвать метод add() и передать уже существующий класс, то он не добавится второй раз.
- В remove() можно передать несколько аргументов и удалится несколько классов.
- Классом не может быть строка содержащая пробелы. При попытке передать в аргументах такую строку, будет выброшена ошибка. Это правило касается любого метода в classList.
- Свойство classList является псевдомассивом, поэтому разработчик может обращаться к классам по индексам, как в массиве. При этом новые классы добавляются в конец, а при удалении все классы (и соответственно их индексы) смещаются. При этом classList легко превращается в обычный массив, по которому можно итерироваться любым привычным способом.*/
