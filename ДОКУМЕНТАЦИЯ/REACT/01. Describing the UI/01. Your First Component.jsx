//# Ваш первый компонент
// Компоненты — одна из основных концепций React. Они являются основой, на которой вы строите пользовательские интерфейсы (UI), что делает их идеальным местом для начала вашего путешествия по React!

/*
Ты выучишь:
- Что такое компонент
- Какую роль компоненты играют в приложении React
- Как написать свой первый компонент React
*/

//# Компоненты: строительные блоки пользовательского интерфейса.
// В Интернете HTML позволяет нам создавать богато структурированные документы с помощью встроенного набора тегов, таких как <h1>и <li>:

<article>
  <h1>My First Component</h1>
  <ol>
    <li>Components: UI Building Blocks</li>
    <li>Defining a Component</li>
    <li>Using a Component</li>
  </ol>
</article>;

// Эта разметка представляет данную статью <article>, ее заголовок <h1>и (сокращенное) оглавление в виде упорядоченного списка <ol>. Подобная разметка в сочетании с CSS для стиля и JavaScript для интерактивности лежит за каждой боковой панелью, аватаром, модальным окном, раскрывающимся списком — за каждой частью пользовательского интерфейса, который вы видите в Интернете.

// React позволяет объединить разметку, CSS и JavaScript в пользовательские «компоненты», повторно используемые элементы пользовательского интерфейса для вашего приложения. Код оглавления, который вы видели выше, можно превратить в <TableOfContents />компонент, который можно отображать на каждой странице. Внутри он по-прежнему использует те же HTML-теги, что и <article>, <h1>и т. д.

// Как и в случае с HTML-тегами, вы можете компоновать, упорядочивать и вкладывать компоненты для создания целых страниц. Например, страница документации, которую вы читаете, состоит из компонентов React:

<PageLayout>
  <NavigationHeader>
    <SearchBar />
    <Link to="/docs">Docs</Link>
  </NavigationHeader>
  <Sidebar />
  <PageContent>
    <TableOfContents />
    <DocumentationText />
  </PageContent>
</PageLayout>;

// По мере роста вашего проекта вы заметите, что многие из ваших проектов могут быть составлены путем повторного использования уже написанных вами компонентов, что ускоряет вашу разработку. Наше оглавление можно добавить на любой экран с помощью <TableOfContents />! Вы даже можете начать свой проект с помощью тысяч компонентов, которыми пользуется сообщество React с открытым исходным кодом, таких как Chakra UI и Material UI.

