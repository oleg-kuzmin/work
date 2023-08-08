//# Рендеринг и коммит
// Прежде чем ваши компоненты отобразятся на экране, они должны быть обработаны React. Понимание шагов этого процесса поможет вам понять, как выполняется ваш код, и объяснить его поведение.

/* Вы выучите:
- Что означает рендеринг в React
- Когда и почему React отображает компонент
- Шаги, связанные с отображением компонента на экране
- Почему рендеринг не всегда приводит к обновлению DOM
*/

// Представьте, что ваши компоненты — повара на кухне, собирающие вкусные блюда из ингредиентов. В этом сценарии React — это официант, который принимает запросы от клиентов и приносит им их заказы. Этот процесс запроса и обслуживания пользовательского интерфейса состоит из трех этапов:

// 1. Запуск рендера (доставка заказа гостя на кухню)
// 2. Рендер компонента (подготовка заказа на кухне)
// 3. Коммит в DOM (размещение ордера на столе)

//# Шаг 1. Запустите рендеринг
/* Есть две причины для рендеринга компонента:
1. Это первоначальный рендер компонента.
2. Состояние компонента (или одного из его предков) было обновлено.
*/

//# Начальный рендер
// Когда ваше приложение запускается, вам нужно запустить первоначальный рендеринг. Фреймворки и песочницы иногда скрывают этот код, но это делается путем вызова createRoot с целевым узлом DOM, а затем вызова его метода рендеринга с вашим компонентом:

import Image from './Image.js';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<Image />);

// Попробуйте закомментировать вызов root.render() и вы увидите, как компонент исчез!

//# Повторый рендеринг при обновлении состояния
// После первоначального рендеринга компонента вы можете запускать дальнейшие рендеры, обновляя его состояние с помощью функции set. Обновление состояния вашего компонента автоматически ставит рендеринг в очередь. (Вы можете представить их как гостя ресторана, который заказывает чай, десерт и все такое после того, как сделал свой первый заказ, в зависимости от состояния жажды или голода.)

//# Шаг 2: React рендерит ваши компоненты
// После запуска рендеринга React вызывает ваши компоненты, чтобы выяснить, что отображать на экране. «Рендеринг» — это React, вызывающий ваши компоненты.

// - При первоначальном рендеринге React вызовет корневой компонент.
// - Для последующих рендеров React будет вызывать функциональный компонент, обновление состояния которого инициировало рендеринг.

// Этот процесс является рекурсивным: если обновленный компонент возвращает какой-то другой компонент, React отрисовывает этот компонент следующим, а если этот компонент также что-то возвращает, он отрисовывает этот компонент следующим и так далее. Процесс будет продолжаться до тех пор, пока не останется вложенных компонентов и React точно не будет знать, что должно отображаться на экране.

// В следующем примере React вызовет Gallery() и Image() несколько раз:

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

// - Во время первоначального рендеринга React создаст узлы DOM для тегов <section>, <h1> и трех тегов <img>.
// - Во время повторного рендеринга React вычислит, какие из их свойств, если таковые имеются, изменились с момента предыдущего рендеринга. Он ничего не будет делать с этой информацией до следующего шага, фазы фиксации.

//* Важно
// Рендеринг всегда должен быть чистым вычислением:

// - Те же входы, тот же выход. При одинаковых входных данных компонент всегда должен возвращать один и тот же JSX. (Когда кто-то заказывает салат с помидорами, он не должен получать салат с луком!)
// - Он думает о своем собственном бизнесе. Он не должен изменять какие-либо объекты или переменные, существовавшие до рендеринга. (Один заказ не должен изменять чей-либо другой заказ.)

// В противном случае вы можете столкнуться с запутанными ошибками и непредсказуемым поведением по мере усложнения вашей кодовой базы. При разработке в «строгом режиме» React дважды вызывает функцию каждого компонента, что может помочь обнаружить ошибки, вызванные нечистыми функциями.

//* Оптимизация производительности
// Поведение по умолчанию рендеринга всех компонентов, вложенных в обновленный компонент, не является оптимальным для производительности, если обновленный компонент находится очень высоко в дереве. Если вы столкнулись с проблемой производительности, существует несколько способов ее решения, описанных в разделе «Производительность». Не оптимизируйте преждевременно!

//# Шаг 3: React фиксирует изменения в DOM
// После рендеринга (вызова) ваших компонентов React изменит DOM.

// - Для начального рендеринга React будет использовать DOM API appendChild() для размещения на экране всех созданных DOM-узлов.
// - Для повторного рендеринга React применит минимально необходимые операции (рассчитанные во время рендеринга!), Чтобы привести DOM в соответствие с последним результатом рендеринга.

// React изменяет узлы DOM только в том случае, если между рендерами есть разница. Например, вот компонент, который каждую секунду перерисовывается с разными реквизитами, переданными от его родителя. Обратите внимание, как вы можете добавить некоторый текст в <input>, обновив его значение, но текст не исчезнет при повторном рендеринге компонента:

function Clock({ time }) {
  return (
    <>
      <h1>{time}</h1>
      <input />
    </>
  );
}

// Это работает, потому что на этом последнем шаге React только обновляет содержимое <h1> новым временем. Он видит, что <input> появляется в JSX в том же месте, что и в прошлый раз, поэтому React не касается <input> или его значения!

//# Эпилог: Отображение в браузере

