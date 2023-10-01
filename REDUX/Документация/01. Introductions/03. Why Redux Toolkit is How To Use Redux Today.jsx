//# Почему Redux Toolkit — это как использовать Redux сегодня
// Redux Toolkit (также известный как «RTK» для краткости) — это наш официальный рекомендуемый подход для написания логики Redux. Пакет @reduxjs/toolkit окружает основной redux пакет и содержит методы API и общие зависимости, которые, по нашему мнению, необходимы для создания приложения Redux. Redux Toolkit использует предложенные нами лучшие практики, упрощает большинство задач Redux, предотвращает распространенные ошибки и упрощает написание приложений Redux.

// RTK включает в себя утилиты, которые помогают упростить многие распространенные случаи использования, включая настройку хранилища, создание редьюсеров и написание неизменяемой логики обновления и даже одновременное создание целых «срезов» состояния.

// Независимо от того, являетесь ли вы новым пользователем Redux, настраивающим свой первый проект, или опытным пользователем, желающим упростить существующее приложение, Redux Toolkit поможет вам улучшить ваш код Redux.

//* Заметка
/* См. эти страницы, чтобы узнать, как использовать «современный Redux» с Redux Toolkit:
- Учебник «Redux Essentials», в котором рассказывается, «как правильно использовать Redux» с Redux Toolkit для реальных приложений, https://redux.js.org/tutorials/essentials/part-1-overview-concepts
- Основы Redux, часть 8: Современный Redux с Redux Toolkit, в котором показано, как преобразовать низкоуровневые примеры из предыдущих разделов руководства в современные эквиваленты Redux Toolkit.
https://redux.js.org/tutorials/fundamentals/part-8-modern-redux
- Использование Redux: переход на Modern Redux, в котором рассказывается, как перенести различные виды устаревшей логики Redux в современные эквиваленты Redux.
https://redux.js.org/usage/migrating-to-modern-redux
*/
//* Заметка

//# Чем Redux Toolkit отличается от ядра Redux

//# Что такое Redux?
// Первое, что нужно спросить: «Что такое Redux?»

/* Redux на самом деле:
- Единственное хранилище, содержащее «глобальное» состояние.
- Отправка действий с простым объектом в хранилище, когда что-то происходит в приложении.
- Чистые функции редуктора, просматривающие эти действия и возвращающие неизменно обновленное состояние.
*/

