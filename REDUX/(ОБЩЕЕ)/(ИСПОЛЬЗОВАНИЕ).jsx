//# Структура приложения
/*
src
  components
  store
    index.js     - точка входа для configureStore
    nameSlice.js - созданный slice
*/

//# Порядок использования
//* 1. Обернуть в Provider (react-redux) приложение или его часть.

//* 2. Создать хранилище через configureStore (@reduxjs/toolkit)

//* 3. Создать slice через createSlice (@reduxjs/toolkit)
