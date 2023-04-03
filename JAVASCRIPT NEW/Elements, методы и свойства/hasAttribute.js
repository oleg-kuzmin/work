//# .hasAttribute()
// Убедиться в наличии атрибута удобно методом hasAttribute, который возвращает true, если атрибут задан, и false, если нет.
bigAndRed.hasAttribute('onclick'); // true
bigAndRed.hasAttribute('несуществующий атрибут'); // false
bigAndRed.hasAttribute('disabled'); // true