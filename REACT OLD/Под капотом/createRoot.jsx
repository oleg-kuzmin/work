//# createRoot
// Когда ваше приложение запускается, вам необходимо вызвать начальный рендеринг. Фреймворки и песочницы иногда скрывают этот код, но он выполняется вызовом createRoot с целевым узлом DOM, а затем вызовом его метода render с вашим компонентом:

//* image.js
function Image() {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}

//* index.js
import Image from './Image.js';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<Image />);
