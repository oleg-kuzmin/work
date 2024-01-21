//# Высота документа
// Чтобы надёжно получить полную высоту документа, нам следует взять максимальное из этих свойств.

const scrollHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
);
