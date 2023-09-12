//# React.Fragment
// Создает пустой родительский тег, который не видно в разметке html.
//* <React.Fragment></React.Fragment>
import { React } from 'react';
function App() {
  return (
    <React.Fragment>
      <h1>title</h1>
      <p>paragraph</p>
    </React.Fragment>
  );
}

//* <></>
// Babel оборачивает эту запись в <React.Fragment></React.Fragment>. Автоматически подключается import { React } from 'react'.
function App() {
  return (
    <>
      <h1>title</h1>
      <p>paragraph</p>
    </>
  );
}
