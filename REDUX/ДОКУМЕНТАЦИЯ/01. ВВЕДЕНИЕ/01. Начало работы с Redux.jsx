//# Начало работы с Redux
// Redux — это контейнер с предсказуемым состоянием для приложений JavaScript.

// Это помогает вам писать приложения, которые ведут себя согласованно, работают в различных средах (клиентских, серверных и собственных) и легко тестируются. Кроме того, он предоставляет отличные возможности для разработчиков, такие как редактирование кода в реальном времени в сочетании с отладчиком, путешествующим во времени.

// Вы можете использовать Redux вместе с React или с любой другой библиотекой представлений. Он крошечный (2 КБ, включая зависимости), но имеет большую экосистему доступных дополнений.

// Redux Toolkit — наш официальный рекомендуемый подход для написания логики Redux. Он охватывает ядро ​​Redux и содержит пакеты и функции, которые, по нашему мнению, необходимы для создания приложения Redux. Redux Toolkit использует предложенные нами лучшие практики, упрощает большинство задач Redux, предотвращает распространенные ошибки и упрощает написание приложений Redux.

// RTK включает в себя утилиты, которые помогают упростить многие распространенные случаи использования, включая настройку хранилища store setup, создание reducers и написание неизменяемой (иммутабельной) логики обновления и даже одновременное создание целых фрагментов состояния (slices).

// Независимо от того, являетесь ли вы новым пользователем Redux, настраивающим свой первый проект, или опытным пользователем, желающим упростить существующее приложение, Redux Toolkit поможет вам улучшить ваш код Redux.

//# Установка Redux Toolkit
// Redux Toolkit доступен в виде пакета в NPM для использования с сборщиком модулей или в приложении Node:
//* npm install @reduxjs/toolkit
//* yarn add @reduxjs/toolkit

//# Установка Create a React Redux App
// Рекомендуемый способ запуска новых приложений с помощью React и Redux — использовать наш официальный шаблон Redux+TS для Vite или создать новый проект Next.js с использованием шаблона Next с Redux.

// Оба из них уже имеют Redux Toolkit и React-Redux, настроенные соответствующим образом для этого инструмента сборки, и поставляются с небольшим примером приложения, которое демонстрирует, как использовать некоторые функции Redux Toolkit.

// Next.js using the `with-redux` template
//* npx create-next-app --example with-redux my-app

// Vite with our Redux+TS template
// (using the `degit` tool to clone and extract the template)
//* npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
