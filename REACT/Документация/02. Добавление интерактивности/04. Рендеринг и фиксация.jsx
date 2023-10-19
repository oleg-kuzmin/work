//# Рендеринг (Render) и Commit (Фиксация)
// Прежде чем ваши компоненты будут отображены на экране, они должны быть отрисованы React. Понимание этапов этого процесса поможет вам задуматься о том, как выполняется ваш код, и объяснить его поведение.

/* Вы узнаете
- Что означает рендеринг в React
- Когда и почему React отображает компонент
- Шаги, связанные с отображением компонента на экране
- Почему рендеринг не всегда приводит к обновлению DOM
*/

/* Представьте, что ваши компоненты - это повара на кухне, собирающие вкусные блюда из ингредиентов. В этом сценарии React - это официант, который выполняет запросы клиентов и приносит им их заказы. Этот процесс запроса и подачи пользовательского интерфейса состоит из трех этапов:

1. Тригер рендеринга (доставка заказа гостя на кухню).
2. Рендеринг компонента (подготовка заказа на кухне)
3. Коммит в DOM (размещение заказа на столе)
*/

//# Шаг 1: Запуск рендеринга
/* Есть две причины для рендеринга компонента:
1. Это инициальный рендеринг компонента.
2. Состояние компонента (или одного из его предков) было обновлено.
*/

//# Начальный рендер
// Когда ваше приложение запускается, вам необходимо вызвать начальный рендеринг. Фреймворки и песочницы иногда скрывают этот код, но он выполняется вызовом createRoot с целевым узлом DOM, а затем вызовом его метода render с вашим компонентом:

//* image.js
function Image() {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}

//* index.js
import Image from './Image.js';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<Image />);

// Попробуйте закомментировать вызов root.render() и увидите, как компонент исчезнет!

//# Рендеринг при обновлении состояния
// После того, как компонент был первоначально отрисован, вы можете инициировать дальнейшие рендеры, обновляя его состояние с помощью функции set. Обновление состояния компонента автоматически ставит его в очередь на рендер. (Вы можете представить это как посетитель ресторана, который после первого заказа заказывает чай, десерт и всевозможные вещи, в зависимости от состояния его жажды или голода).

//# Шаг 2: React рендерит ваши компоненты
/* После запуска рендеринга React вызывает ваши компоненты, чтобы определить, что отобразить на экране. "Рендеринг" - это обращение React к вашим компонентам.
- При первом рендере React вызывает корневой компонент.
- При последующих рендерах React будет вызывать функциональный компонент, обновление состояния которого вызвало рендер.
*/

// Этот процесс рекурсивен: если обновленный компонент возвращает какой-то другой компонент, React будет рендерить этот компонент следующим, и если этот компонент тоже что-то возвращает, он будет рендерить этот компонент следующим, и так далее. Этот процесс будет продолжаться до тех пор, пока не останется вложенных компонентов и React не будет точно знать, что должно быть отображено на экране.

// В следующем примере React вызовет Gallery() и Image() несколько раз:

//* App.js
function Gallery() {
  return (
    <section>
      <h1>Inspiring Sculptures</h1>
      <Image />
      <Image />
      <Image />
    </section>
  );
}

function Image() {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}

// Во время первоначального рендеринга React создаст DOM-узлы для тегов <section>, <h1> и трех <img>.

// Во время повторного рендеринга React вычислит, какие из их свойств, если таковые имеются, изменились с момента предыдущего рендеринга. Он ничего не будет делать с этой информацией до следующего шага, фазы фиксации.

//! Внимание
/* Рендеринг всегда должен быть чистым вычислением:
- Одинаковые входы, одинаковый выход. При одинаковых входах компонент всегда должен возвращать одинаковый JSX. (Когда кто-то заказывает салат с помидорами, он не должен получить салат с луком!)
- Он занимается своими делами. Он не должен изменять никакие объекты или переменные, существовавшие до рендеринга. (Один заказ не должен изменять другой заказ).
*/

// В противном случае вы можете столкнуться с непонятными ошибками и непредсказуемым поведением по мере усложнения вашей кодовой базы. При разработке в "строгом режиме" React вызывает функцию каждого компонента дважды, что может помочь выявить ошибки, вызванные нечистыми функциями.
//! Внимание

//* Оптимизация производительности
// Поведение по умолчанию, при котором отображаются все компоненты, вложенные в обновленный компонент, не является оптимальным с точки зрения производительности, если обновленный компонент находится очень высоко в дереве. Если вы столкнулись с проблемой производительности, есть несколько способов ее решения, описанных в разделе Оптимизация производительности. Не оптимизируйте преждевременно!
//* Оптимизация производительности

//# Шаг 3: React фиксирует изменения в DOM
/* После рендеринга (вызова) ваших компонентов React изменит DOM.
- Для первоначального рендеринга, React будет использовать appendChild() DOM API для размещения всех созданных им узлов DOM на экране.
- Для повторного рендеринга, React будет применять минимально необходимые операции (вычисляемые во время рендеринга!), чтобы DOM соответствовал последнему выводу рендеринга.
*/

// React изменяет узлы DOM, только если есть разница между рендерами. Например, вот компонент, который рендерится с различными пропсами, передаваемыми от его родителя каждую секунду. Обратите внимание, как вы можете добавить текст в <input>, обновляя его value, но текст не исчезает при повторном рендеринге компонента:

//* Clock.js
function Clock({ time }) {
  return (
    <>
      <h1>{time}</h1>
      <input />
    </>
  );
}

// Это работает, потому что во время последнего шага React только обновляет содержимое <h1> с новым time. Он видит, что <input> появляется в JSX в том же месте, что и в прошлый раз, поэтому React не трогает <input> или его value!

//# Браузерная отрисовка
// После того как рендеринг завершен и React обновил DOM, браузер перерисовывает экран. Хотя этот процесс известен как "браузерный рендеринг", мы будем называть его "рисованием", чтобы избежать путаницы в документации.

//# Итого
/*
- Любое обновление экрана в приложении React происходит в три этапа:
  - Триггер
  - Рендеринг
  - Коммит
- Вы можете использовать режим Strict Mode для поиска ошибок в ваших компонентах
- React не трогает DOM, если результат рендеринга такой же, как и в прошлый раз
*/
