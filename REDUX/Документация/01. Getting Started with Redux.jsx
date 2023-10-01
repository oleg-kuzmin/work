//# Начало работы с Redux
// Redux — это контейнер с предсказуемым состоянием для приложений JavaScript.

// Это помогает вам писать приложения, которые ведут себя согласованно, работают в различных средах (клиентских, серверных и собственных) и легко тестируются. Кроме того, он предоставляет отличные возможности для разработчиков, такие как редактирование кода в реальном времени в сочетании с отладчиком, путешествующим во времени.

// Вы можете использовать Redux вместе с React или с любой другой библиотекой представлений. Он крошечный (2 КБ, включая зависимости), но имеет большую экосистему доступных дополнений.

//# Установка
// Redux Toolkit — наш официальный стандартный подход к написанию логики Redux. Он охватывает ядро Redux и содержит пакеты и функции, которые, по нашему мнению, необходимы для создания приложения Redux. Redux Toolkit использует предложенные нами лучшие практики, упрощает большинство задач Redux, предотвращает распространенные ошибки и упрощает написание приложений Redux.

// RTK включает в себя утилиты, которые помогают упростить многие распространенные случаи использования, включая настройку хранилища, создание редукторов и написание неизменяемой логики обновления и даже одновременное создание целых «фрагментов» состояния.

// Независимо от того, являетесь ли вы новым пользователем Redux, настраивающим свой первый проект, или опытным пользователем, желающим упростить существующее приложение, Redux Toolkit поможет вам улучшить ваш код Redux.

// Redux Toolkit доступен в виде пакета в NPM для использования с сборщиком модулей или в приложении Node:

//*npm install @reduxjs/toolkit

//# Создайте приложение React Redux
// Рекомендуемый способ запуска новых приложений с помощью React и Redux — использовать наш официальный шаблон Redux+TS для Vite или создать новый проект Next.js с использованием шаблона Next with-redux.

//*npx create-next-app --example with-redux my-app

// Оба из них уже имеют Redux Toolkit и React-Redux, настроенные соответствующим образом для этого инструмента сборки, и поставляются с небольшим примером приложения, которое демонстрирует, как использовать некоторые функции Redux Toolkit.

/*
В настоящее время у нас нет официальных шаблонов React Native, но мы рекомендуем эти шаблоны для стандартного React Native и Expo:
https://github.com/rahsheen/react-native-template-redux-typescript
https://github.com/rahsheen/expo-template-redux-typescript
*/

//# Redux Core
// Основная библиотека Redux доступна в виде пакета в NPM для использования с сборщиком модулей или в приложении Node:

//* npm install redux

// Он также доступен в виде предварительно скомпилированного пакета UMD, который определяет глобальную переменную window.Redux. Пакет UMD можно использовать напрямую как тег <script>.

// Более подробную информацию смотрите на странице Installation.

//# Базовый пример
// Все глобальное состояние вашего приложения хранится в дереве объектов внутри одного хранилища. Единственный способ изменить дерево состояний — создать action, объект, описывающий произошедшее, и отправить его в хранилище. Чтобы указать, как состояние обновляется в ответ на действие, вы пишете чистые функции-reducer, которые вычисляют новое состояние на основе старого состояния и действия.

import { createStore } from 'redux';

/**
 * Это reducer — функция, которая принимает значение текущего состояния и
 * объект действия, описывающий «что произошло» и возвращающий новое значение состояния.*
 * Синтаксис: (state, action) => newState
 *
 * Состояние Redux должно содержать только простые объекты JS, массивы и примитивы.
 * Значением корневого состояния обычно является объект. Важно, чтобы вы
 * не изменяли объект состояния, а возвращали новый объект, если состояние изменяется.
 *
 * В reducer вы можете использовать любую условную логику. В этом примере
 * мы используем оператор переключения, но это не обязательно.
 */
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 };
    case 'counter/decremented':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

// Создайте хранилище Redux, хранящее состояние вашего приложения.
// Его API { subscribe, dispatch, getState }. (подписка, отправка, получение)
let store1 = createStore(counterReducer);

// Вы можете использовать subscribe() для обновления пользовательского интерфейса в ответ на изменения состояния.
// Обычно вы используете библиотеку React Redux, а не напрямую subscribe().
// Могут быть дополнительные случаи использования, в которых также будет полезно subscribe.

store.subscribe(() => console.log(store.getState()));

// Единственный способ изменить внутреннее состояние — отправить действие.
// Действия можно сериализовать, записать в журнал или сохранить, а затем воспроизвести.
store.dispatch({ type: 'counter/incremented' }); // {value: 1}
store.dispatch({ type: 'counter/incremented' }); // {value: 2}
store.dispatch({ type: 'counter/decremented' }); // {value: 1}

// Вместо непосредственного изменения состояния вы указываете, какие мутации должны произойти с простыми объектами, называемыми actions. Затем вы пишете специальную функцию, называемую reducer, чтобы решить, как каждый action преобразует состояние всего приложения.

// В типичном приложении Redux есть только одно хранилище с одной функцией root reducing. По мере роста вашего приложения вы разделяете root reducer на более мелкие reducer, независимо работающие с разными частями дерева состояний. Это точно так же, как в приложении React есть только один корневой компонент, но он состоит из множества мелких компонентов.

// Эта архитектура может показаться слишком сложной для приложения-счетчика, но красота этого шаблона в том, насколько хорошо он масштабируется для больших и сложных приложений. Он также предоставляет очень мощные инструменты разработчика, поскольку можно отследить каждую мутацию до действия, которое ее вызвало. Вы можете записывать сеансы пользователей и воспроизводить их, просто воспроизводя каждое действие.

//# Redux Toolkit Пример
// Redux Toolkit упрощает процесс написания логики Redux и настройки хранилища. С Redux Toolkit та же логика выглядит так:

import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: state => {
      // Redux Toolkit позволяет нам писать «мутирующую» логику в reducers. Это
      // фактически не изменяет состояние, поскольку использует библиотеку Immer,
      // которая обнаруживает изменения в «черновом состоянии» и создает совершенно новое
      // неизменяемое состояние, основанное на этих изменениях
      state.value += 1;
    },
    decremented: state => {
      state.value -= 1;
    },
  },
});

export const { incremented, decremented } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

// Еще можно подписаться на store
store.subscribe(() => console.log(store.getState()));

// Объекты action по-прежнему передаются в dispatch, но они создаются за нас.
store.dispatch(incremented()); // {value: 1}
store.dispatch(incremented()); // {value: 2}
store.dispatch(decremented()); // {value: 1}

// Redux Toolkit позволяет нам писать более короткую логику, которую легче читать, сохраняя при этом то же поведение Redux и поток данных.

//# Изучение Redux
// У нас есть множество ресурсов, которые помогут вам изучить Redux.

//* Redux Essentials Tutorial
// Учебное пособие по Redux Essentials представляет собой руководство «сверху вниз», в котором рассказывается, «как правильно использовать Redux», с использованием наших новейших рекомендуемых API и лучших практик. Мы рекомендуем начать с этого.

//* Redux Fundamentals Tutorial
// Учебное пособие по основам Redux — это руководство «снизу вверх», в котором объясняется, «как работает Redux» с первых принципов и без каких-либо абстракций, а также почему существуют стандартные шаблоны использования Redux.

//* Learn Modern Redux Livestream
// Сопровождающий Redux Марк Эриксон появился на шоу «Learn with Jason», чтобы объяснить, как мы рекомендуем использовать Redux сегодня. Шоу включает в себя пример приложения с живым кодом, в котором показано, как использовать Redux Toolkit и перехватчики React-Redux с TypeScript, а также новые API-интерфейсы извлечения данных RTK Query.

// Cсылки на пример исходного кода приложения см. на странице https://www.learnwithjason.dev/let-s-learn-modern-redux

//* Additional Tutorials
/*
- Репозиторий Redux содержит несколько примеров проектов, демонстрирующих различные аспекты использования Redux. Почти все примеры имеют соответствующую песочницу CodeSandbox. Это интерактивная версия кода, с которой вы можете играть онлайн. Полный список примеров смотрите на странице Examples (https://redux.js.org/introduction/examples).
- Бесплатная серия видеороликов "Getting Started with Redux" от создателя Redux Дэна Абрамова и видеокурсы "Building React Applications with Idiomatic Redux" на Egghead.io
https://app.egghead.io/playlists/fundamentals-of-redux-course-from-dan-abramov-bd5cc867
https://egghead.io/courses/building-react-applications-with-idiomatic-redux
- Выступление сопровождающего Redux Марка Эриксона на конференции "Redux Fundamentals" и слайды семинара "Redux Fundamentals"
https://blog.isquaredsoftware.com/2018/03/presentation-reactathon-redux-fundamentals/
https://blog.isquaredsoftware.com/2018/06/redux-fundamentals-workshop-slides/
- Сообщение Дэйва Седдиа "A Complete React Redux Tutorial for Beginners"
https://daveceddia.com/redux-tutorial/
*/

//* Other Resources
/*
- Часто задаваемые вопросы по Redux отвечают на многие распространенные вопросы о том, как использовать Redux, а в разделе документации "Using Redux" содержится информация об обработке производных данных, тестировании, структурировании логики редуктора и сокращении шаблонов.
https://redux.js.org/faq
https://redux.js.org/usage/
- В серии руководств "Practical Redux" сопровождающего Redux Марка Эриксона демонстрируются реальные промежуточные и продвинутые методы работы с React и Redux (также доступны в виде интерактивного курса на Educative.io).
https://blog.isquaredsoftware.com/series/practical-redux/
https://www.educative.io/collection/5687753853370368/5707702298738688
- В списке ссылок React/Redux разбиты по категориям статьи о работе с reducers и selectors, управлении побочными эффектами, архитектуре Redux и передовых методах и многом другом.
https://github.com/markerikson/react-redux-links
https://github.com/markerikson/react-redux-links/blob/master/redux-reducers-selectors.md
https://github.com/markerikson/react-redux-links/blob/master/redux-side-effects.md
https://github.com/markerikson/react-redux-links/blob/master/redux-architecture.md
- Наше сообщество создало тысячи библиотек, дополнений и инструментов, связанных с Redux. На странице документации "Ecosystem" перечислены наши рекомендации, а полный список доступен в каталоге дополнений Redux.
https://redux.js.org/introduction/ecosystem
https://github.com/markerikson/redux-ecosystem-links
*/

//# 