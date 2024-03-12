//# Начало работы с Redux Toolkit

//# Цель
// Пакет Redux Toolkit предназначен для стандартного способа написания логики Redux. Первоначально он был создан, чтобы помочь решить три распространенные проблемы, связанные с Redux:

/*
- "Настройка хранилища Redux слишком сложна"
- "Мне нужно добавить много пакетов, чтобы Redux мог делать что-нибудь полезное"
- "Redux требует слишком много шаблонного (повторяющегося) кода"
*/

// Мы не можем решить каждый кейс, но в духе "create-react-app" мы можем попытаться предоставить некоторые инструменты для большей абстракции и для обработки наиболее распространенных вариантов использования, а также включить некоторые полезные утилиты, которые позволят упростить код своего приложения.

// Redux Toolkit также включает в себя мощную функцию получения и кэширования данных, которую мы назвали "RTK Query". Он входит в комплект поставки как отдельный набор точек входа. Это необязательный инструмент, но он может устранить необходимость самостоятельно писать логику получения данных.

// Эти инструменты должны быть полезны всем пользователям Redux. Независимо от того, являетесь ли вы новым пользователем Redux, настраивающим свой первый проект, или опытным пользователем, желающим упростить существующее приложение, Redux Toolkit поможет вам улучшить ваш код Redux.

//# Установка (Create a React Redux App)
// Рекомендуемый способ запуска новых приложений с помощью React и Redux Toolkit — использовать наш официальный шаблон Redux Toolkit + TS для Vite или создать новый проект Next.js с использованием шаблона Next с Redux.

// Оба из них уже имеют Redux Toolkit и React-Redux, настроенные соответствующим образом для этого инструмента сборки, и поставляются с небольшим примером приложения, которое демонстрирует, как использовать некоторые функции Redux Toolkit.

// Vite с нашим шаблоном Redux+TS
// (использование инструмента "degit" для клонирования и извлечения шаблона)
//* npx degit reduxjs/redux-templates/packages/vite-template-redux my-app

// Next.js с использованием шаблона with-redux
//* npx create-next-app --example with-redux my-app

// В настоящее время у нас нет официальных шаблонов React Native, но мы рекомендуем эти шаблоны для стандартного React Native и Expo:

/*
https://github.com/rahsheen/react-native-template-redux-typescript
https://github.com/rahsheen/expo-template-redux-typescript
*/

//# Установка (An Existing App)
// Redux Toolkit доступен в виде пакета в NPM для использования с сборщиком модулей или в приложении Node:
//* npm install @reduxjs/toolkit

// Если вам нужна привязка Redux к React
//* npm install react-redux
