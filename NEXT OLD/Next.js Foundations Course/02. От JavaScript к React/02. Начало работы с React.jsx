//# Начало работы с React
/*
Чтобы использовать React в своем проекте, вы можете загрузить два сценария React с внешнего веб-сайта unpkg.com:
1. React — это основная библиотека React.
2. React-dom предоставляет методы, специфичные для DOM, которые позволяют вам использовать React с DOM.
*/

//* index.html
<html>
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script type="text/javascript">
      const app = document.getElementById('app');
    </script>
  </body>
</html>;

// Вместо того, чтобы напрямую манипулировать DOM с помощью простого JavaScript, вы можете использовать метод ReactDOM.render()from react-dom, чтобы указать React отображать наш <h1> заголовок внутри нашего #app элемента.
//* index.html
<html>
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script type="text/javascript">
      const app = document.getElementById('app');
      ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app);
    </script>
  </body>
</html>;

// Но если вы попытаетесь запустить этот код в браузере, вы получите синтаксическую ошибку. Это потому <h1>...</h1>, что недопустимый Javascript. Этот фрагмент кода — JSX.

//# Что такое JSX?
// JSX  — это расширение синтаксиса JavaScript, которое позволяет описывать ваш пользовательский интерфейс с помощью знакомого синтаксиса, подобного HTML. Преимущество JSX заключается в том, что помимо соблюдения трех правил JSX вам не нужно изучать какие-либо новые символы или синтаксис за пределами HTML и JavaScript.

// Обратите внимание, что браузеры не поддерживают JSX «из коробки», поэтому вам понадобится компилятор JavaScript, например Babel, для преобразования вашего кода JSX в обычный JavaScript.

//# Добавление Babel в ваш проект
// Чтобы добавить Babel в свой проект, скопируйте и вставьте в свой файл следующий скрипт index.html:
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>;

// Кроме того, вам нужно будет сообщить Babel, какой код нужно преобразовать, изменив тип скрипта на type=text/jsx.
//* index.html
<html>
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    {/* Babel Script */}
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/jsx">
      const app = document.getElementById('app');
      ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app);
    </script>
  </body>
</html>;

// Затем вы можете запустить свой код в браузере, чтобы убедиться, что он работает правильно.

// Сравнивая только что написанный вами декларативный код React:
<script type="text/jsx">
  const app = document.getElementById("app")
  ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app)
</script>;

// к императивному коду JavaScript, который вы написали в предыдущем разделе:
<script type="text/javascript">
  const app = document.getElementById('app');
  const header = document.createElement('h1');
  const headerContent = document.createTextNode('Develop. Preview. Ship. 🚀');
  header.appendChild(headerContent);
  app.appendChild(header);
</script>;

// Вы можете начать понимать, как с помощью React можно сократить количество повторяющегося кода.

// И это именно то, что делает React: это библиотека, содержащая многократно используемые фрагменты кода, выполняющие задачи от вашего имени — в данном случае обновление пользовательского интерфейса.

// Примечание. Вам не обязательно точно знать, как React обновляет пользовательский интерфейс, чтобы начать его использовать, но если вы хотите узнать больше, взгляните на деревья пользовательского интерфейса и разделы React-dom/server в документации React.





