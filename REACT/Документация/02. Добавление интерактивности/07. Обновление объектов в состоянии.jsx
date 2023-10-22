//# Обновление объектов в состоянии
// Состояние может хранить любые значения JavaScript, включая объекты. Но вы не должны изменять объекты, которые хранятся в состоянии React, напрямую. Вместо этого, когда вы хотите обновить объект, вам нужно создать новый (или сделать копию существующего), а затем настроить состояние на использование этой копии.

/* Вы узнаете
- Как правильно обновить объект в React state
- Как обновить вложенный объект без его мутирования
- Что такое неизменяемость и как ее не нарушить
- Как сделать копирование объектов менее повторяющимся с помощью Immer
*/

