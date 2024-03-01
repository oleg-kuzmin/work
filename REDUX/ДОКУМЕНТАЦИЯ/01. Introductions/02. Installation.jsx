//# Redux Toolkit
// Redux Toolkit включает в себя ядро ​​Redux, а также другие ключевые пакеты, которые, по нашему мнению, необходимы для создания приложений Redux (таких как Redux Thunk и Reselect).

// Он доступен в виде пакета в NPM для использования с упаковщиком модулей или в приложении Node:

//* npm install @reduxjs/toolkit

// Он также доступен в виде сборки UMD, которую можно загрузить из папки dist на unpkg (https://unpkg.com/@reduxjs/toolkit/dist/). Сборки UMD делают Redux Toolkit доступным как глобальную переменную window.RTK.

//# Дополнительные пакеты

//# React-Redux
// Скорее всего, вам также понадобятся привязки react-redux для использования с React.

//* npm install react-redux

// Обратите внимание: в отличие от самого Redux, многие пакеты в экосистеме Redux не предоставляют сборки UMD, поэтому мы рекомендуем использовать сборщики модулей, такие как Vite и Webpack, для наиболее удобного процесса разработки.

//# Расширение Redux DevTools
/*
Конфигуратор Redux Toolkit автоматически настраивает интеграцию с Redux DevTools. Вам потребуется установить расширения для браузера, чтобы просматривать состояние и actions в store:
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=en
*/

/* Если вы используете React, вам также понадобится расширение React DevTools:
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
*/

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

// Он также доступен в виде сборки UMD, которую можно загрузить из папки dist на unpkg (https://unpkg.com/@reduxjs/toolkit/dist/). Сборки UMD делают Redux Toolkit доступным как глобальную переменную window.RTK. Пакет UMD можно использовать напрямую как тег <script>.
