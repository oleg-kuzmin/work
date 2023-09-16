//# Страницы и макеты
// Маршрутизатор приложений в Next.js 13 представил новые соглашения о файлах, упрощающие создание страниц, общих макетов и шаблонов. На этой странице вы узнаете, как использовать эти специальные файлы в приложении Next.js.

//# Pages
// Page — это пользовательский интерфейс, уникальный для маршрута. Вы можете определить страницы, экспортировав компонент из файла page.js. Используйте вложенные папки для определения маршрута и файл page.js, чтобы сделать маршрут общедоступным.

// Создайте свою первую страницу, добавив файл page.js в каталог приложения:

/*
app            ----> /
  page.js
  dashboard    ----> /dashboard
    page.js
*/

//* app/page.js
function Page() {
  return <h1>Hello, Home page!</h1>;
}

//*app/dashboard/page.js
function Page() {
  return <h1>Hello, Dashboard Page!</h1>;
}

/* Хорошо знать:
- Page всегда является листом (leaf) поддерева маршрута (subtree).
- Для Pages можно использовать расширения файлов .js, .jsx или .tsx.
- Файл page.js необходим для того, чтобы сделать сегмент маршрута общедоступным.
- По умолчанию pages являются серверными компонентами, но их можно установить в качестве клиентских компонентов.
- Страницы могут получать данные. Дополнительную информацию см. в разделе Data Fetching.
*/

//# Layouts
// Макет — это пользовательский интерфейс, который используется несколькими страницами. При навигации макеты сохраняют состояние, остаются интерактивными и не перерисовываются. Макеты также могут быть вложенными.

// Вы можете определить макет по умолчанию, экспортировав компонент React из файла Layout.js. Компонент должен принимать реквизит children, который будет заполнен дочерним макетом (если он существует) или дочерней страницей во время рендеринга.

/*
app
  dashboard
    layout.js
    page.js
    settings
      page.js
*/

//* app/dashboard/layout.js
function DashboardLayout({
  children, // это будет страница или вложенный макет
}) {
  return (
    <section>
      {/* Включите сюда общий пользовательский интерфейс, например заголовок или боковая панель */}
      <nav></nav>
      {children}
    </section>
  );
}

/* Хорошо знать:
- Самый верхний макет называется Root Layout. Этот обязательный макет используется всеми страницами приложения. Root Layout должны содержать теги html и body.
- Любой сегмент маршрута может при желании определить свой собственный Layout. Эти макеты будут использоваться на всех страницах этого сегмента.
- По умолчанию макеты в маршруте являются вложенными. Каждый родительский макет оборачивает дочерние макеты под ним с помощью свойства React Children.
- Вы можете использовать Route Groups, чтобы включать или исключать определенные сегменты маршрута из общих макетов.
- По умолчанию макеты являются серверными компонентами, но их можно установить в качестве клиентских компонентов.
- Макеты могут извлекать данные. Дополнительную информацию см. в разделе Data Fetching.
- Передача данных между родительским макетом и его дочерними элементами невозможна. Однако вы можете получать одни и те же данные по маршруту более одного раза, и React автоматически выполнит дедупликацию запросов, не влияя на производительность.
- Макеты не имеют доступа к сегментам маршрута ниже себя. Чтобы получить доступ ко всем сегментам маршрута, вы можете использовать useSelectedLayoutSegment или useSelectedLayoutSegments в клиентском компоненте.
- Для макетов можно использовать расширения файлов .js, .jsx или .tsx.
- Файлы layout.js и page.js можно определить в одной папке. Макет layout обернет страницу page.
*/

//# Root Layout (Обязательно)
// Корневой макет определяется на верхнем уровне каталога приложения и применяется ко всем маршрутам. Этот макет позволяет вам изменять исходный HTML-код, возвращаемый с сервера.

//* app/layout.js
function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

/* Хорошо знать:
- Каталог app должен включать Root Layout.
- Корневой макет должен определять теги <html> и <body>, поскольку Next.js не создает их автоматически.
- Вы можете использовать встроенную поддержку SEO для управления HTML-элементами <head>, например элементом <title>.
- Вы можете использовать route groups для создания нескольких корневых макетов.
- Корневой макет по умолчанию является серверным компонентом и не может быть установлен в качестве клиентского компонента.
*/

//# Вложение макетов
// Макеты, определенные внутри папки (например, app/dashboard/layout.js), применяются к определенным сегментам маршрута (например, acme.com/dashboard) и отображаются, когда эти сегменты активны. По умолчанию макеты в иерархии файлов являются вложенными, что означает, что они оборачивают дочерние макеты через children prop.

//* app/dashboard/layout.js
function DashboardLayout({ children }) {
  return <section>{children}</section>;
}

/* Хорошо знать:
- Только корневой макет может содержать теги <html> и <body>.
- Если бы вы объединили два приведенных выше макета, корневой макет (app/layout.js) обернул бы макет dashboard (app/dashboard/layout.js), который обернул бы сегменты маршрута внутри app/dashboard/*.
*/

// Вы можете использовать Route Groups, чтобы включать или исключать определенные сегменты маршрута из общих макетов.

//# Templates
// Шаблоны похожи на макеты в том, что они оборачивают каждый дочерний макет или страницу. В отличие от макетов, которые сохраняются на всех маршрутах и сохраняют состояние, шаблоны создают новый экземпляр для каждого из своих дочерних элементов при навигации. Это означает, что когда пользователь перемещается между маршрутами, имеющими общий шаблон, монтируется новый экземпляр компонента, элементы DOM воссоздаются, состояние не сохраняется, а эффекты повторно синхронизируются.

/* Могут быть случаи, когда вам нужно такое конкретное поведение, и шаблоны будут более подходящим вариантом, чем макеты. Например:
- Функции, основанные на useEffect (например, регистрация просмотров страниц) и useState (например, постраничная форма обратной связи).
- Чтобы изменить поведение framework по умолчанию. Например, обычно какой-либо компонент создается внутри макетов только при первой загрузке макета, а не при переключении страниц. Для шаблонов этот компонент может создаваться при каждой навигации.
*/

// Шаблон можно определить путем экспорта компонента React по умолчанию из файла template.js. Компонент должен принимать children prop.

/*
app
  layout.js
  template.js
  page.js
*/

//* app/template.js
function Template({ children }) {
  return <div>{children}</div>;
}

// С точки зрения вложенности, template.js отображается между макетом и его дочерними элементами. Вот упрощенный вывод:

<Layout>
  {/* Обратите внимание, что шаблону присвоен уникальный ключ. */}
  <Template key={routeParam}>{children}</Template>
</Layout>;
