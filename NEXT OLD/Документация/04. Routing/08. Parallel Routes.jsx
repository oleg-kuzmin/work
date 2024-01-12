//# Параллельные маршруты
// Параллельная маршрутизация позволяет одновременно или условно отображать одну или несколько страниц в одном макете. Для высокодинамичных разделов приложения, таких как информационные панели и каналы социальных сайтов, параллельная маршрутизация может использоваться для реализации сложных шаблонов маршрутизации.

// Например, вы можете одновременно отображать страницы team и analytics.

/*
app
  @team
    page.js
  @analytics
    page.js
  layout.js
  page.js
*/

//* layout.js
function layout(props) {
  return (
    <>
      {props.children}
      {props.team}
      {props.analytics}
    </>
  );
}

// Параллельная маршрутизация позволяет определять независимые состояния ошибок и загрузки для каждого маршрута, поскольку они передаются независимо.

/*
app
  @team
    page.js
    error.js
    loading.js
  @analytics
    page.js
    error.js
    loading.js
  layout.js
*/

// Параллельная маршрутизация также позволяет условно отображать слот на основе определенных условий, например состояния аутентификации. Это позволяет полностью отделить код для одного и того же URL-адреса.

//* layout.js
import { getUser } from '@/lib/auth';

function layout({ dashboard, login }) {
  const isLoggedIn = getUser();
  return isLoggedIn ? dashboard : login;
}

//# Соглашение
// Параллельные маршруты создаются с использованием именованных слотов. Слоты определяются с помощью соглашения @folder и передаются в макет того же уровня, что и реквизиты.

// Слоты не являются сегментами маршрута и не влияют на структуру URL. Путь к файлу /@team/members будет доступен по адресу /members.

// Например, следующая файловая структура определяет два явных слота: @analytics и @team.

/*
app
  @analytics
    page.js
  @team
    page.js
  layout.js
  page.js
*/

// Приведенная выше структура папок означает, что компонент в app/layout.js теперь принимает props слотов @analytics и @team и может отображать их параллельно вместе с реквизитом children:

//* app/layout.js
function Layout(props) {
  return (
    <>
      {props.children}
      {props.team}
      {props.analytics}
    </>
  );
}

// Полезно знать: свойство children — это неявный слот, который не нужно сопоставлять с папкой. Это означает, что app/page.js эквивалентен app/@children/page.js.

//# Unmatched Routes
// По умолчанию контент, отображаемый в слоте, будет соответствовать текущему URL-адресу.

// В случае несовпадающего слота содержимое, отображаемое Next.js, отличается в зависимости от метода маршрутизации и структуры папок.

//# default.js
// Вы можете определить файл default.js для отображения в качестве резервного варианта, когда Next.js не может восстановить активное состояние слота на основе текущего URL-адреса.

// Рассмотрим следующую структуру папок. В слоте @team есть каталог settings, а в @analytics — нет.

/*
app
  @team
    settings
      page.js
  @analytics
    default.js
    page.js
  default.js
  layout.js
  page.js
*/

//* Навигация
// При навигации Next.js отображает ранее активное состояние слота, даже если оно не соответствует текущему URL-адресу.

//* Перезагрузка
// При перезагрузке Next.js сначала попытается отобразить файл default.js несовпадающего слота. Если это недоступно, отображается ошибка 404.

// Ошибка 404 для несовпадающих маршрутов помогает гарантировать, что вы случайно не отрисуете маршрут, который не должен отображаться параллельно.

//# useSelectedLayoutSegment(s)
// И useSelectedLayoutSegment, и useSelectedLayoutSegments принимают parallelRoutesKey, который позволяет вам читать активный сегмент маршрута в этом слоте.

//* app/layout.js
('use client');

import { useSelectedLayoutSegment } from 'next/navigation';

async function Layout(props) {
  const loginSegments = useSelectedLayoutSegment('auth');
  // ...
}

// Когда пользователь переходит к @auth/login или /login в строке URL-адреса, loginSegments будет равен строке «login».

//# Модальные окна
// Параллельная маршрутизация может использоваться для рендеринга модальных окон.

/*
app
  @auth
    login
    signup
  ...
  layout.js
  page.js
*/

// Слот @auth отображает компонент <Modal>, который можно отобразить, перейдя к соответствующему маршруту, например /login.

//* app/layout.js
async function Layout(props) {
  return (
    <>
      {/* ... */}
      {props.auth}
    </>
  );
}

//* app/@auth/login/page.js
import { Modal } from 'components/modal';

function Login() {
  return (
    <Modal>
      <h1>Login</h1>
      {/* ... */}
    </Modal>
  );
}

// Чтобы гарантировать, что содержимое модального окна не будет отображаться, когда оно неактивно, вы можете создать файл default.js, который возвращает значение null.

//* app/@auth/default.js
function Default() {
  return null;
}

//# Закрытие модального окна
// Если модальное окно было инициировано через клиентскую навигацию, например. используя <Link href="/login">, вы можете закрыть модальное окно, вызвав router.back() или используя компонент Link.

//* app/@auth/login/page.js
('use client');
import { useRouter } from 'next/navigation';
import { Modal } from 'components/modal';

async function Login() {
  const router = useRouter();
  return (
    <Modal>
      <span onClick={() => router.back()}>Close modal</span>
      <h1>Login</h1>
      ...
    </Modal>
  );
}

// Если вы хотите перейти в другое место и закрыть модальное окно, вы также можете использовать catch-all маршрут.

/*
app
  @authModal
  [...catchAll]
    page.js
  login
    page.js
  page.js
*/

//* app/@auth/[...catchAll]/page.js
function CatchAll() {
  return null;
}

// catch-all маршруты имеют приоритет над default.js.

//# Условные маршруты
// Параллельные маршруты можно использовать для реализации условной маршрутизации. Например, вы можете визуализировать маршрут @dashboard или @login в зависимости от состояния аутентификации.

//* app/layout.js
import { getUser } from '@/lib/auth';

function Layout({ dashboard, login }) {
  const isLoggedIn = getUser();
  return isLoggedIn ? dashboard : login;
}
