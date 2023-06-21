//# root.render (Рендерит корневой элемент в DOM)

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
