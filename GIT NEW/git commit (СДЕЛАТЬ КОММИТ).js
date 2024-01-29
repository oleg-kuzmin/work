//# git commit (СДЕЛАТЬ КОММИТ)
/*
- Создать коммит проиндексированного состояния кода.
- Откроет текстовый редактор с предложением ввести комментарий к коммиту.
- Фиксирует текущее состояние, очищая staged.
*/

//* git commit
// Синтаксис.

//* git commit -m "text"
// Быстрое создание коммита с указанным комментарием. При передаче ключа -m (message) текстовый редактор не открывается.

//* git commit --amend
//* i (vim)
//* поменять текст (vim)
//* shift + ZZ (vim)
/*
- Изменить последний коммит, проиндексированные изменения будут добавлены в предыдущий коммит.
- Откроет текстовый редактор с предложением изменить указанный ранее комментарий к коммиту.
- Предыдущий коммит не останется в текущей ветке.
*/

//# Vim
// Редактор откроется при команде git commit

//* Нажать "I"
// Войти в режим редактирования (внизу будет надпись ВСТАВКА)
//* Нажать "ESC"
// Выход из режима редактирования в командный режим

//* Нажать Shift + ZZ или ввести в терминале :wq
// Выйти из файла сохранив изменения (командный режим)
//* Нажать Shift + ZQ или ввести в терминале :q!
// Выйти из файла без сохранения изменений (командный режим)
