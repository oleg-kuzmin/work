//# Термины, сокращения, определения
//* <dfn>
/*
- В тег <dfn> оборачиваются сами термины, а их определения должны содержаться в ближайшем родительском теге p, dl или section.
- <dfn> часто комбинируется с тегом abbr для раскрытия смысла аббревиатуры.
*/

//# Аббревиатура или акроним
//* <abbr>
/*
- <abbr> можно использовать вместе с <dfn> для более формального описания определения.
*/

//# Цитата внутри текста
//* <q>
/*
- Тег <q> пригодится в ситуации, когда нужно вставить цитату прямо в текст предложения.
- Если цитата большая и состоит из нескольких абзацев, то понадобится тег <blockquote>.
*/

//# Источник цитаты, книги, статьи, скульптуры, картины
//* <cite>
/*
- Например ссылка на источник цитаты, название книги, статьи, название скульптуры, картины, арт-объекта, сноска на другие материалы. - Автор не должен указываться как источник, нужно приводить ссылку на конкретный материал.
*/

//# Выделение автора материала, контактная информация
//* <address>
/*
- Контактная информация о человеке, людях или организации, автор материала.
*/

//# Cмысловое ударение в предложении, изменение тона
//* <em>
/*
- Тег <em> определяет текст, на который сделан особый акцент, меняющий смысл предложения.
- Используйте для смыслового выделения куска текста и не используйте для просто курсива — для этого нужен тег <i>.
- Также не задуман для придания важности тексту — для этого подойдёт <strong>.
- Можно вкладывать <em> друг в друга — семантическое ударение будет усиливаться с каждым уровнем вложенности.
- Например, будет постепенно нарастать интонация у скринридеров.
- Если нужно показать, что какой-то отрывок текста не важен, то его просто не нужно оборачивать в <em> или <strong>.
*/

//# Высокая важность
//* <strong>
/*
- Добавляет важности обёрнутому в него тексту.
- Может использоваться для выделения предупреждений или части документа, которую пользователь должен увидеть раньше остального.
- При этом обозначение части текста тегом <strong> не должно изменять смысла предложения.
- Если нужно показать, что какой-то отрывок текста не важен, то его просто не нужно оборачивать в <em> или <strong>.
*/

//# Для привлечения внимания или изменения тона, но без излишней важности
//* <b>
/*
- Ключевые слова, названия продуктов в обзорах, вводные части статей.
- Должен использоваться лишь как последнее средство, когда нет других более подходящих тегов.
*/

//# Выделение текста жёлтым маркером
//* <mark>
/*
- Помогает подсветить то, на что автор основного текста хочет обратить внимание.
- В обычном тексте с помощью <mark> можно выделить что-то связанное с текущей активностью пользователя, например, найденные слова во время поиска по тексту.
- В цитатах <mark> помогает подсветить то, на что автор основного текста хочет обратить внимание.
*/

//# названия, термины, иностранные слова
//* <i>
/*
- Тег <i> применяется для обозначения текста, который отличается от окружающего текста, но не является более важным.
- Например, в <i> можно заключать названия, термины, иностранные слова. Также в этот тег можно обернуть мысли героя. В речи такой текст обычно выделяется интонационно.
- Используется только в том случае, если не подходит <em>, <strong>, <mark>, <dfn>.
*/

//# Пояснения или небольшие комментарии, которые дополняют или раскрывают предшествующий текст
//* <small>
/*
- Различные правовые формулировки, текст которых должен обязательно присутствовать на странице.
- Пояснения, комментарии, дисклеймеры, предостережения, копирайт, информация о лицензии, прочая правовая информация.
- Следует использовать для небольших пояснений или комментариев, которые дополняют или раскрывают предшествующий текст.
- Не подойдёт, если нужно убрать интонационное выделение, создаваемое тегами <em> или <strong>. Если нужно показать, что какой-то отрывок текста «не важен», то его просто не нужно оборачивать в <em> или <strong>.
- Не подойдёт, если нужно добавить подзаголовок. Для этого стоит использовать теги заголовков соответствующего уровня.
- Не подойдёт, если нужно Вывести длинный отрывок текста маленьким шрифтом, например, пользовательское соглашение. Для этих целей блок с пользовательским соглашением лучше стилизовать отдельно.
*/

//# Значимые правки в тексте, которые важно зафиксировать
//* <del> и <ins>
/*
- Значимый добавленный/удалённый контент, например новый/выполненный пункт в списке дел или добавленная/удалённая часть кода.
- Стоит использовать в том случае, когда нужно подчеркнуть, что какой-то контент был добавлен/удалён и это важно.
*/

//# Незначительные правки, такие как обновление цены, зачеркнутый, неактуальный текст.
//* <s>
/*
- Например содержимое, которое уже не корректно или потеряло актуальность, цена товара.
- Чаще всего «потеря актуальности» отображается в меню или прейскурантах при смене цены.
- Тег s стоит использовать только для незначительных правок, таких как обновление цены.
- Для обозначения значимых правок в тексте, которые важно зафиксировать, используются теги <del> и <ins>.
*/

//# Слова с ошибками
//* <u>
/*
- Стоит использовать, только если мы хотим показать, что текст внутри него стилистически отличается от остального текста.
- Невнятный, стилистически отличающийся текст, например слова с орфографическими ошибками или имена в китайском языке.
- <u> не используется:
- Если мы хотим подчеркнуть важность или выделить текст. Для этого предназначены <strong>, <em>, <mark> или <cite>.
*/

//# Дата и время
//* <time>
/*
- Разметка для даты и времени.
- Служит для разметки дат, времени или периода времени: в содержимое тега идёт формат для человека, а в атрибут datetime версия для машин.
*/

//# Оформление программного кода
//* <code>
/*
- Используется для вывода фрагментов программного кода.
*/

//# Хранение значений
//* <data>
/*
- Элемент data стоит использовать, когда вы не хотите выделять элементы на вёрстке, например, при помощи div или span, но вам нужно связать текст с внутренним ID или значением, который вы будете использовать при обработке запросов пользователя.
*/

//# Информация на экране, которую пользователь может получить в процессе взаимодействия с программой
//* <samp>
/*
- Вывод информации о ходе выполнения программы.
- Ошибки, предупреждения и подсказки инструментов разработчика или операционной системы.
- Приглашение к вводу данных.
- Пример, образец, результат выполнения программы.
- Используется для оформления вывода данных, которые показываются пользователю в результате выполнения программы.
- Содержимое этого элемента воспринимается устройствами как простой текст.
*/

//# Пользовательский ввод: с клавиатуры, голосом, указателем или другим образом.
//* <kbd>
/*
- Для вывода сложных комбинаций клавиш, каждая отдельная клавиша оборачивается в свой тег <kbd>.
- При желании, всю комбинацию можно обернуть в ещё один <kbd> для группировки.
*/

//# Результат работы программы в реальном времени
//* <output>
/*
- Информация, которую пользователь вводит или изменяет в форме.
- Вывод расчётов по данным, которые указал пользователь (калькулятор, гороскоп и т. п.).
*/

//# Переменная
//* <var>
/*
- Используется для отображения переменных в математических выражениях и программном коде.
*/
