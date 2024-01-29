//# git revert (ОТМЕНА КОММИТА, ОТМЕНА СЛИЯНИЯ)

//* git revert 3f0d8da
/*
- Команда git revert не только отменяет коммиты слияния — она может откатить изменения, внесённые любым коммитом.
- Для этого нужно вызвать git revert без опции -m.
- Опция -m не нужна, потому что у обычных коммитов один родитель: не нужно указывать, какая из веток основная.
*/

//* git revert -m 1 3f0d8da
/*
- Опция -m со значением больше 0 говорит о том, какой из родителей — «основная ветка» и будет сохранён.
- Указав для опции -m значение 1, вы сохраните всё содержимое в main и отмените изменения, внесённые коммитом слияния ошибочной ветки в main.
*/
