//# Загрузка пользовательского интерфейса и потоковая передача
// Специальный файл loading.js поможет вам создать осмысленный пользовательский интерфейс загрузки с помощью React Suspense. Благодаря этому соглашению вы можете отображать мгновенное состояние загрузки с сервера во время загрузки содержимого сегмента маршрута. Новый контент автоматически заменяется после завершения рендеринга.

//# Состояния мгновенной загрузки
// Состояние мгновенной загрузки — это резервный пользовательский интерфейс, который отображается сразу после навигации. Вы можете предварительно визуализировать индикаторы загрузки, такие как skeletons и spinners, или небольшую, но значимую часть будущих экранов, например обложку, заголовок и т. д. Это помогает пользователям понять, как приложение реагирует, и обеспечивает лучший пользовательский опыт.

// Создайте состояние загрузки, добавив файл loading.js в папку.

/*
app
  layout.js
  dashboard
    layout.js
    loading.js
    page.js
*/

//* app/dashboard/loading.js
function Loading() {
  // Вы можете добавить любой пользовательский интерфейс в Loading, включая Skeleton.
  return <LoadingSkeleton />;
}

// В той же папке файл loading.js будет вложен в файл layout.js. Он автоматически обернет файл page.js и все дочерние элементы ниже границей <Suspense>.

<Layout>
  <Header></Header>
  <SideNav></SideNav>
  <Suspence fallback={<Loading />}>
    <Page></Page>
  </Suspence>
</Layout>;

/*
Хорошо знать:
- Навигация осуществляется мгновенно, даже при маршрутизации, ориентированной на сервер.
- Навигация является прерываемой, то есть для изменения маршрута не нужно ждать полной загрузки содержимого маршрута, прежде чем перейти к другому маршруту.
- Общие макеты остаются интерактивными, пока загружаются новые сегменты маршрута.
*/

// Рекомендация: используйте соглашение loading.js для сегментов маршрута (макетов и страниц), поскольку Next.js оптимизирует эту функциональность.
