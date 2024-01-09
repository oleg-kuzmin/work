//# element.classList (= ПСЕВДОМАССИВ КЛАССОВ)
/*
- Управлять классами элемента — одна из распространённых задач, потому браузеры предоставляют встроенные средства для решения такой задачи. В свойстве classList элемента содержится специальный объект, который хранит информацию о текущих классах элемента и содержит методы для работы с ними.
- Свойство classList является псевдомассивом, поэтому разработчик может обращаться к классам по индексам, как в массиве. При этом новые классы добавляются в конец, а при удалении все классы (и соответственно их индексы) смещаются. При этом classList легко превращается в обычный массив, по которому можно итерироваться любым привычным способом.
*/

//# Пример
//* Псевдомассив строк
const button = document.querySelector('button');
button.classList.add('active');
console.log(button.classList[0]); // 'active'

//* Превращение псевдомассива в обычный массив через Array.from()
// 1. Находим элемент
const element = document.querySelector('div');

// 2. Превращаем в массив через Array.from() или через спред-оператор
const classes1 = Array.from(element.classList);
const classes2 = [...element.classList];

// 3. Теперь нам доступны любые операции обычного массива
classes1.map(() => {});
