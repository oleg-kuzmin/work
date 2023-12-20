//# Input - перенос курсора в конец строки
const input = evt.target;
input.selectionStart = input.selectionEnd = input.value.length;
input.scrollLeft = input.scrollWidth;
input.focus();
