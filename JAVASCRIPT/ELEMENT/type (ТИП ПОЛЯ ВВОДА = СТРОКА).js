//# type (ТИП ПОЛЯ ВВОДА = СТРОКА)
// За тип в JavaScript отвечает свойство type. Чтобы изменить тип поля ввода, нужно записать в свойство type новое значение:

//# Пример
<input class="password" type="password" required />;

let input = document.querySelector('input');
input.type = 'text'; // Сделаем input текстовым полем ввода
