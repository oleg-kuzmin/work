//# Обработка ошибок
/*
Соглашение о файлах error.js позволяет корректно обрабатывать непредвиденные ошибки времени выполнения во вложенных маршрутах.
- Автоматически переносить сегмент маршрута и его вложенные дочерние элементы в React Error Boundary.
- Создайте пользовательский интерфейс ошибок, адаптированный к конкретным сегментам, используя иерархию файловой системы для настройки детализации.
- Изолируйте ошибки в затронутых сегментах, сохраняя при этом функциональность остальной части приложения.
- Добавьте функциональность, позволяющую попытаться восстановиться после ошибки без полной перезагрузки страницы.
*/

// Создайте пользовательский интерфейс ошибок, добавив файл error.js внутри сегмента маршрута и экспортировав компонент React:

/*
app
  layout.js
  dashboard
    layout.js
    error.js
    page.js
*/

//* app/dashboard/error.tsx
'use client'; // Компоненты ошибок должны быть клиентскими компонентами.

import { useEffect } from 'react';

function Error({ error, reset }) {
  useEffect(() => {
    // Зарегистрируйте ошибку в службе отчетов об ошибках.
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Попытайтесь восстановиться, попытавшись повторно отрисовать сегмент.
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}

//# Как работает error.js
<Layout>
  <Header />
  <SideNav />
  <ErrorBoundary>
    <Page />
  </ErrorBoundary>
</Layout>;

/*
- error.js автоматически создает React Error Boundary, которая оборачивает вложенный дочерний сегмент или компонент page.js.
- Компонент React, экспортированный из файла error.js, используется в качестве резервного компонента.
- Если ошибка возникает в границах ошибки, ошибка локализуется и отображается резервный компонент.
- Когда компонент резервной ошибки активен, макеты над границей ошибки сохраняют свое состояние и остаются интерактивными, а компонент ошибки может отображать функциональные возможности для восстановления после ошибки.
*/

//# Восстановление после ошибок
// Причина ошибки иногда может быть временной. В этих случаях простая повторная попытка может решить проблему.

// Компонент ошибки может использовать функцию reset(), чтобы предложить пользователю попытаться восстановиться после ошибки. При выполнении функция попытается повторно отобразить содержимое границы ошибки. В случае успеха компонент резервной ошибки заменяется результатом повторной визуализации.

//* app/dashboard/error.js
('use client');

function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}

//# Вложенные маршруты
// Компоненты React, созданные с помощью специальных файлов, отображаются в определенной вложенной иерархии.

// Например, вложенный маршрут с двумя сегментами, каждый из которых включает файлы layout.js и error.js, отображается в следующей упрощенной иерархии компонентов:

/*
app
  layout.js
  error.js
  dashboard
    layout.js
    error.js
    page.js
*/

<Layout>
  <ErrorBoundary fallback={<Error />}>
    <Layout>
      <ErrorBoundary fallback={<Error />}>
        <Page />
      </ErrorBoundary>
    </Layout>
  </ErrorBoundary>
</Layout>;

// Иерархия вложенных компонентов влияет на поведение файлов error.js на вложенном маршруте:

// Ошибки всплывают до ближайшей границы родительской ошибки. Это означает, что файл error.js будет обрабатывать ошибки для всех вложенных дочерних сегментов. Более или менее детальный пользовательский интерфейс ошибок может быть достигнут путем размещения файлов error.js на разных уровнях во вложенных папках маршрута.

// Граница error.js не будет обрабатывать ошибки, возникающие в компоненте layout.js в том же сегменте, поскольку граница ошибки вложена внутрь этого компонента layouts.

//# Обработка ошибок в макетах
// Границы error.js не улавливают ошибки, возникающие в компонентах layout.js или template.js одного и того же сегмента. Эта намеренная иерархия сохраняет видимым и работоспособным важный пользовательский интерфейс, который используется между одноуровневыми маршрутами (например, навигация) при возникновении ошибки.

// Чтобы обрабатывать ошибки в определенном макете или шаблоне, поместите файл error.js в родительский сегмент макетов.

// Для обработки ошибок в корневом макете или шаблоне используйте вариант error.js, называемый global-error.js.

//# Обработка ошибок в корневых макетах
// Корневая граница app/error.js не улавливает ошибки, возникающие в корневом компоненте app/layout.js или app/template.js.

// Чтобы специально обрабатывать ошибки в этих корневых компонентах, используйте вариант error.js под названием app/global-error.js, расположенный в корневом каталоге приложения.

// В отличие от корневого error.js, граница ошибки global-error.js охватывает все приложение, а его резервный компонент заменяет корневой макет, когда он активен. По этой причине важно отметить, что global-error.js должен определять свои собственные теги <html> и <body>.

// global-error.js — это наименее детальный пользовательский интерфейс ошибок, который можно рассматривать как «универсальную» обработку ошибок для всего приложения. Маловероятно, что он будет срабатывать часто, поскольку корневые компоненты обычно менее динамичны, а другие границы error.js перехватывают большинство ошибок.

// Даже если определен global-error.js, все равно рекомендуется определить корневой error.js, резервный компонент которого будет отображаться в корневом макете, который включает глобально общий пользовательский интерфейс и фирменную символику.

//* app/global-error.js
('use client');

function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}


