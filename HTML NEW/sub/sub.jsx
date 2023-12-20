//# sub (subscript) (нижний индекс)
/*
- Тег <sub> позволяет выводить подстрочный текст, например, в химических формулах: H2O.
- Чаще всего <sub> используется для записи химических или математических формул.
- Помимо описанного выше примера, можно использовать тег <sub> внутри тега <var> для вывода индекса переменных, например, элементов массива или матрицы.
- Теги <sub> можно вкладывать друг в друга, тогда на каждом шаге текст будет спускаться ниже, а его размер будет уменьшаться.
- Также <sub> можно комбинировать с тегом <sup> для построения сложных формул.
*/

//# Пример
<p>
  Вода — бинарное неорганическое соединение с химической формулой H<sub>2</sub>O.
</p>;

//# Доступность
// У <sub> есть встроенная роль subscript. Скринридеры пока не сообщают об этой роли и не выделяют содержимое тега интонацией, но это добавляет семантический вес и приносит потенциальную пользу для доступности.
