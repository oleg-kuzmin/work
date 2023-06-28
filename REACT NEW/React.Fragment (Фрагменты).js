//# React.Fragment (Фрагменты)
import React from 'react';
function App() {
  return (
    <React.Fragment>
      <h1>title</h1>
      <p>paragraph</p>
    </React.Fragment>
  );
}

//# пустой тег (Babel конвертирует эту запись в React.Fragment, import React подключается автоматически)
function App() {
  return (
    <>
      <h1>title</h1>
      <p>paragraph</p>
    </>
  );
}
