//# array.join() (ПРЕОБРАЗУЕТ В СТРОКУ, БЕЗ МУТАЦИИ)
// Метод join создаёт строку из элементов массива, разделённых запятой. Можем задать любой нужный разделитель. Их порядок не меняется. При этом с исходным массивом ничего не произойдет.

//# Синтаксис
array.join(separator);
//* separator - разделитель
// Eсли он не задан, элементы массива разделяются запятой. В случае необходимости тип разделителя приводится к типу строка

//# Возвращает
//* Строка, в которой объединены все элементы массива || "".
// Если array.length равно 0, возвращается пустая строка.

//# Пример
const bremenMusicians = ['Кот', 'Пёс', 'Трубадур', 'Осёл', 'Петух'];
console.log(bremenMusicians.join()); // "Кот,Пёс,Трубадур,Осёл,Петух"
console.log(bremenMusicians.join(', ')); // "Кот, Пёс, Трубадур, Осёл, Петух"
console.log(bremenMusicians.join(' | ')); // "Кот | Пёс | Трубадур | Осёл | Петух"
