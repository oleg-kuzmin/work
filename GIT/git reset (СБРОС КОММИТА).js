//# git reset (СБРОС КОММИТА)

//* git reset HEAD
/*
git add -A      // добавить файлы в stage
git reset HEAD  // убрать файлы из stage

- Менее радикальный способ откатиться: git reset HEAD. Этот подход не затрагивает файлы, с которыми вы работаете. Если файл был изменён или добавлен, но не переведён в staged, сброс изменений этот файл не затронет.
- Но файлы, находящиеся в staged, будут оттуда удалены — они будут помечены как неотслеживаемые. Все эти файлы вернутся в то состояние, в котором они пребывали при последнем коммите.
- Команда git reset HEAD переводит файлы из staged обратно в рабочую зону. Но файлы в рабочей зоне не трогает.
*/

//* git reset --hard bc73f5f
/*
- Более радикальный способ откатиться: git reset --hard. Эта команда удаляет вообще все изменения: и из staged, и из рабочей зоны. После неё вернуть изменения не выйдет.
- Команда git reset --hard позволяет вернуться к любому коммиту. Для этого после команды указывают номер коммита — первые 7 цифр его хеша.
- А старый коммит «отойдет в сторону» — его «Гит» удалит автоматически.
*/
