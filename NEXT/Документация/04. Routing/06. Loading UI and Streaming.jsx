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

//# Streaming with Suspense
// Помимо loading.js, вы также можете вручную создавать границы приостановки для своих собственных компонентов пользовательского интерфейса. App Router поддерживает потоковую передачу с помощью Suspense для сред выполнения Node.js и Edge.

//# Что такое стриминг?
// Чтобы узнать, как работает потоковая передача в React и Next.js, полезно понять серверный рендеринг (SSR) и его ограничения.

/* При использовании SSR необходимо выполнить ряд шагов, прежде чем пользователь сможет видеть страницу и взаимодействовать с ней:
- Сначала все данные для данной страницы загружаются на сервер.
- Затем сервер отображает HTML-код страницы.
- HTML, CSS и JavaScript страницы отправляются клиенту.
- Неинтерактивный пользовательский интерфейс отображается с использованием сгенерированного HTML и CSS.
- Наконец, React гидрирует пользовательский интерфейс, делая его интерактивным.
*/

// Эти шаги являются последовательными и блокирующими, что означает, что сервер может отображать HTML-код страницы только после получения всех данных. А на клиенте React может гидрировать пользовательский интерфейс только после загрузки кода для всех компонентов на странице.

// SSR с React и Next.js помогает улучшить воспринимаемую производительность загрузки, показывая пользователю неинтерактивную страницу как можно скорее.

// Однако это все равно может быть медленным, поскольку необходимо завершить получение всех данных на сервере, прежде чем страница сможет быть показана пользователю.

// Потоковая передача позволяет разбить HTML-код страницы на более мелкие фрагменты и постепенно отправлять эти фрагменты с сервера клиенту.

// Это позволяет отображать части страницы быстрее, не дожидаясь загрузки всех данных, прежде чем можно будет отобразить какой-либо пользовательский интерфейс.

// Потоковая передача хорошо работает с компонентной моделью React, поскольку каждый компонент можно рассматривать как фрагмент. Компоненты, которые имеют более высокий приоритет (например, информация о продукте) или которые не полагаются на данные, могут быть отправлены первыми (например, макет), и React может начать гидратацию раньше. Компоненты с более низким приоритетом (например, обзоры, сопутствующие товары) могут быть отправлены в том же запросе к серверу после получения их данных.

// Потоковая передача особенно полезна, когда вы хотите предотвратить блокировку отрисовки страницы длинными запросами данных, поскольку она может сократить время до первого байта (TTFB) и первой отрисовки содержимого (FCP). Это также помогает улучшить время взаимодействия (TTI), особенно на медленных устройствах.

//# Пример
// <Suspense> работает, оборачивая компонент, выполняющий асинхронное действие (например, получение данных), показывая резервный пользовательский интерфейс (например skeleton, spinner) во время его выполнения, а затем заменяя компонент после завершения действия.

//* app/dashboard/page.js

import { Suspense } from 'react';
import { PostFeed, Weather } from './Components';

export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </Suspense>
    </section>
  );
}

/* Используя Suspense, вы получаете следующие преимущества:
- Потоковое рендеринг на сервере. Постепенный рендеринг HTML от сервера к клиенту.
- Выборочная гидратация. React определяет приоритетность того, какие компоненты сделать интерактивными в первую очередь, в зависимости от взаимодействия с пользователем.
*/

//# SEO


