//# Импорт и экспорт компонентов
// Магия компонентов заключается в возможности их повторного использования: вы можете создавать компоненты, состоящие из других компонентов. Но по мере того, как вы вкладываете все больше и больше компонентов, часто имеет смысл начать разбивать их на разные файлы. Это позволяет легко сканировать файлы и повторно использовать компоненты в большем количестве мест.

/* Вы выучите:
- Что такое файл корневого компонента
- Как импортировать и экспортировать компонент
- Когда использовать стандартный и именованный импорт и экспорт
- Как импортировать и экспортировать несколько компонентов из одного файла
- Как разделить компоненты на несколько файлов
*/

//# Файл корневого компонента
// В главе "Ваш первый компонент" вы создали компонент Profile и компонент Gallery, который его отображает:

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

// В настоящее время они находятся в корневом файле компонента, который в этом примере называется App.js. В Create React App ваше приложение живет в src/App.js. Однако в зависимости от вашей настройки ваш корневой компонент может находиться в другом файле. Если вы используете фреймворк с файловой маршрутизацией, например Next.js, ваш корневой компонент будет разным для каждой страницы.

//# Экспорт и импорт компонента
// Что, если в будущем вы захотите изменить landing screen и разместить там список научных книг? Или разместить все профили в другом месте? Имеет смысл переместить Gallery и Profile из корневого файла компонента. Это сделает их более модульными и позволит повторно использовать их в других файлах. Вы можете переместить компонент в три шага:

//* 1. Создайте новый файл JS, чтобы поместить в него компоненты.
//* 2. Экспортируйте компонент функции из этого файла (используя экспорт по умолчанию или именованный экспорт).
//* 3. Импортируйте его в файл, в котором вы будете использовать компонент (используя соответствующую технику для импорта по умолчанию или именованного экспорта).

// Ниже и Profile, и Gallery были перемещены из App.js в новый файл с именем Gallery.js. Теперь вы можете изменить App.js, чтобы импортировать галерею из Gallery.js:

/* Gallery.js */
function Profile() {
  return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />;
}
// export default function Gallery()
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

/* App.js */
import Gallery from './Gallery.js';

// export default function App()
function App() {
  return <Gallery />;
}

// Обратите внимание, как этот пример теперь разбит на два файла компонентов:

//* 1. Gallery.js
// - Определяет компонент Profile, который используется только в том же файле и не экспортируется.
// - Экспортирует компонент Gallery в качестве экспорта по умолчанию.

//* 2. App.js
// - Импортирует Gallery как импорт по умолчанию из Gallery.js.
// - Экспортирует корневой компонент App в качестве экспорта по умолчанию.

//# Примечание
// Вы можете столкнуться с файлами, в которых отсутствует расширение .js, например:
import Gallery from './Gallery';
// './Gallery.js' и './Gallery' будут работать с React, хотя первое ближе к тому, как работают нативные модули ES.

//# Экспорт по умолчанию и именованный экспорт
// Существует два основных способа экспорта значений с помощью JavaScript: экспорт по умолчанию и именованный экспорт. До сих пор в наших примерах использовался только экспорт по умолчанию. Но вы можете использовать один или оба из них в одном файле. Файл может иметь не более одного экспорта по умолчанию, но он может иметь сколько угодно именованных экспортов.

//* 1. один именованный экспорт
// export default function Button() {}

//* 2. несколько именованных экспортов
// export function Button() {}
// export function Checkbox() {}

//* 3. именованные экспорты + один экспорт по умолчанию
// export function Button() {}
// export function Checkbox() {}
// export default function Form() {}

// То, как вы экспортируете свой компонент, определяет, как вы должны его импортировать. Вы получите сообщение об ошибке, если попытаетесь импортировать экспорт по умолчанию так же, как и именованный экспорт! Эта таблица поможет вам это отслеживать:

//* Default
// export default function Button() {}
// import Button from './Button.js';

//* Named
// export function Button() {}
// import { Button } from './Button.js';

// Когда вы пишете импорт по умолчанию, вы можете указать любое имя после импорта. Например, вы можете написать import Banana from './Button.js' вместо Button, и он все равно предоставит вам тот же экспорт по умолчанию. Напротив, при именованном импорте имя должно совпадать с обеих сторон. Вот почему они называются именованным импортом!

// Люди часто используют экспорт по умолчанию, если файл экспортирует только один компонент, и используют именованный экспорт, если он экспортирует несколько компонентов и значений. Независимо от того, какой стиль кодирования вы предпочитаете, всегда давайте осмысленные имена функциям компонентов и файлам, которые их содержат. Компоненты без имен, такие как export default() => {}, не рекомендуются, поскольку они усложняют отладку.

//# Экспорт и импорт нескольких компонентов из одного файла
// Что, если вы хотите показать только один Profile вместо Gallery? Вы также можете экспортировать компонент Profile. Но в Gallery уже есть экспорт по умолчанию, и у вас не может быть двух экспортов по умолчанию. Вы можете создать новый файл с экспортом по умолчанию или добавить именованный экспорт для профиля. Файл может иметь только один экспорт по умолчанию, но он может иметь множество именованных экспортов!

//# Примечание
// Чтобы уменьшить возможную путаницу между экспортом по умолчанию и именованным экспортом, некоторые команды предпочитают придерживаться только одного стиля (по умолчанию или именованного) или избегать их смешивания в одном файле. Делайте то, что лучше всего работает для вас!

/*
Сначала экспортируйте профиль из Gallery.js, используя именованный экспорт (без ключевого слова default):
export function Profile() {
  ...
}
*/

/*
Затем импортируйте Profile из Gallery.js в App.js, используя именованный импорт (с фигурными скобками):
import { Profile } from './Gallery.js';
*/

/* Наконец, отрендерите <Profile /> из компонента App:
export default function App() {
  return <Profile />;
}
*/

// Теперь Gallery.js содержит два экспорта: экспорт Gallery по умолчанию и экспорт именованного Profile. App.js импортирует их оба.

/* Попробуйте отредактировать <Profile/> в <Gallery/> и обратно в этом примере:
import Gallery from './Gallery.js';
import { Profile } from './Gallery.js';

export default function App() {
  return (
    <Profile />
  );
}
*/

// Теперь вы используете сочетание стандартного и именованного экспорта:

//* 1. Gallery.js
// - Экспортирует компонент Profile как именованный экспорт с именем Profile.
// - Экспортирует компонент Gallery в качестве экспорта по умолчанию.

//* 2. App.js
// - Импортирует Profile как именованный импорт с именем Profile из Gallery.js.
// - Импортирует Gallery как импорт по умолчанию из Gallery.js.
// - Экспортирует корневой компонент приложения в качестве экспорта по умолчанию.

//# Резюме
/*
На этой странице вы узнали:



*/