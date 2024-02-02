//# React.Fragment
//* <React.Fragment></React.Fragment>
// Создает пустой родительский тег, который не видно в разметке html.
import { React } from 'react';
function App() {
  return (
    <React.Fragment>
      <h1>title</h1>
      <p>paragraph</p>
    </React.Fragment>
  );
}

//* <Fragment></Fragment>
import { Fragment } from 'react';
function App() {
  return (
    <Fragment>
      <h1>title</h1>
      <p>paragraph</p>
    </Fragment>
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
