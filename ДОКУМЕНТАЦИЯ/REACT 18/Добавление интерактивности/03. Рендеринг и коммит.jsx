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

//# Повторно рендерится при обновлении состояния

