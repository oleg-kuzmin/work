//# element.type (ТИП ПОЛЯ ВВОДА)
// За тип в JavaScript отвечает свойство type. Чтобы изменить тип поля ввода, нужно записать в свойство type новое значение:

//# Возвращает
//* Строка с типом input.

//# Пример
<input class="password" type="password" required />;

let input = document.querySelector('input');
input.type = 'text'; // Сделаем input текстовым полем ввода
