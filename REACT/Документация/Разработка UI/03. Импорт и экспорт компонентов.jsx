//# Импорт и экспорт компонентов
// Магия компонентов заключается в возможности их повторного использования: вы можете создавать компоненты, которые состоят из других компонентов. Но по мере того, как вы создаете все больше и больше компонентов, часто имеет смысл начать разделять их на разные файлы. Это позволяет легко сканировать файлы и повторно использовать компоненты в большем количестве мест.

/* Вы узнаете
- Что такое файл корневого компонента
- Как импортировать и экспортировать компонент
- Когда использовать импорт и экспорт по умолчанию и по имени
- Как импортировать и экспортировать несколько компонентов из одного файла
- Как разделить компоненты на несколько файлов
*/

//# Корневой файл компонента
// На странице 02. Ваш первый компонент вы создали компонент Profile и компонент Gallery, который его отображает:

//* App.js
function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

// В настоящее время они находятся в корневом файле компонента, названном в данном примере App.js. В Create React App ваше приложение находится в src/App.js. Однако, в зависимости от вашей конфигурации, ваш корневой компонент может находиться в другом файле. Если вы используете фреймворк с файловой маршрутизацией, например Next.js, ваш корневой компонент будет разным для каждой страницы.

//# Экспорт и импорт компонента

