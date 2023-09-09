//# Статическая генерация с данными и без них
// Статическая генерация может выполняться с данными и без них.

// На данный момент все созданные нами страницы не требуют получения внешних данных. Эти страницы будут автоматически генерироваться статически при создании приложения для рабочей среды.

// Однако для некоторых страниц вы не сможете отобразить HTML без предварительного получения некоторых внешних данных. Возможно, вам нужно получить доступ к файловой системе, получить внешний API или запросить базу данных во время сборки. Next.js поддерживает этот вариант — статическую генерацию с данными — «из коробки».

//# Статическая генерация с использованием данных getStaticProps
/* Как это работает? Что ж, в Next.js при экспорте компонента страницы вы также можете экспортировать async функцию с именем getStaticProps. Если вы это сделаете, то:
- getStaticProps запускается во время сборки в рабочей среде и…
- Внутри функции вы можете получить внешние данные и отправить их на страницу в качестве реквизита.
*/

export default function Home(props) {}

export async function getStaticProps() {
  //* Get external data from the file system, API, DB, etc.
  // const data = ...
  //* The value of the `props` key will be passed to the `Home` component
  // return {
  //   props: ...
  // }
}

// По сути, getStaticProps позволяет вам сказать Next.js: «Эй, у этой страницы есть некоторые зависимости данных — поэтому, когда вы выполняете предварительную визуализацию этой страницы во время сборки, обязательно сначала разрешите их!»

// Примечание. В режиме разработки getStaticProps запускается при каждом запросе.

//# Давайте использовать getStaticProps
// Этому легче учиться на практике, поэтому, начиная со следующей страницы, мы будем использовать getStaticProps для реализации нашего блога.
