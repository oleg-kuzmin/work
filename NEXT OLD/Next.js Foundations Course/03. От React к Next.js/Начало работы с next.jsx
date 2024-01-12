//# Начало работы с next
// На прошлом уроке мы обсудили, как начать работу с React. Вот как выглядел окончательный код. Если вы начинаете отсюда, вставьте этот код в index.html файл в редакторе кода.

/*
<html>
  <body>
    <div id="app"></div>

    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script type="text/jsx">
      const app = document.getElementById("app")

      function Header({ title }) {
        return <h1>{title ? title : "Default title"}</h1>
      }

      function HomePage() {
        const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"]

        const [likes, setLikes] = React.useState(0)

        function handleClick() {
          setLikes(likes + 1)
        }

        return (
          <div>
            <Header title="Develop. Preview. Ship. 🚀" />
            <ul>
              {names.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>

            <button onClick={handleClick}>Like ({likes})</button>
          </div>
        )
      }

      ReactDOM.render(<HomePage />, app)
    </script>
  </body>
</html>
*/

// Теперь давайте посмотрим, как можно перейти от простого приложения React к Next.js.

// Чтобы добавить Next.js в свой проект, вам больше не нужно загружать скрипты react и react-dom с unpkg.com. Вместо этого вы можете установить эти пакеты локально с помощью диспетчера пакетов Node: npm.

// Примечание. На вашем компьютере должен быть установлен Node.js ( требуется минимальная версия ).

// Для этого создайте новый файл package.json с пустым объектом {}.

/* package.json
{
}
*/

// В своем терминале запустите npm install react react-dom next. После завершения установки вы сможете увидеть зависимости вашего проекта, перечисленные в вашем package.json файле:

/* package.json
{
  "dependencies": {
    "next": "^12.1.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
}
*/

// Вы также заметите новую папку node_modules, содержащую файлы наших зависимостей.

/*
Вернувшись к index.html файлу, вы можете удалить следующий код:

1. Сценарии reactи react-dom, поскольку вы установили их с помощью NPM.
2. Теги <html> и <body>, потому что Next.js создаст их за вас.
3. Код, который взаимодействует с app элементом и ReactDom.render() методом.
4. Сценарий Babel, поскольку у Next.js есть компилятор, который преобразует JSX в действительный JavaScript, браузеры могут понять.
5. Тег <script type="text/jsx">.
6. Часть React.функции React.useState(0)
*/

// После удаления строк выше добавьте их import { useState } from "react"в начало файла. Ваш код должен выглядеть так:

// index.jsx
import { useState } from 'react';
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}

// В файле HTML остался только код JSX, поэтому вы можете изменить тип файла с .html на .js или .jsx.

// Теперь есть еще три вещи, которые вам нужно сделать, чтобы полностью перейти на приложение Next.js:

// 1. Переместите index.js файл в новую папку под названием pages(подробнее об этом позже).

// 2. Добавьте экспорт по умолчанию в свой основной компонент React, чтобы помочь Next.js определить, какой компонент отображать в качестве основного компонента этой страницы. export default function HomePage()

// 3. Добавьте в файл скрипт package.json для запуска сервера разработки Next.js во время разработки.

/*
package.json
  {
    "scripts": {
      "dev": "next dev"
    },
    "dependencies": {
      "next": "^11.1.0",
      "react": "^17.0.2",
      "react-dom": "^17.0.2"
      }
  }
*/

//# Запуск сервера разработки
// Чтобы убедиться, что все работает, вы можете просмотреть свое приложение, запустив его npm run dev в терминале и перейдя по адресу localhost:3000 в браузере. Затем внесите небольшие изменения в код и сохраните его.

// После сохранения файла вы заметите, что браузер автоматически обновляется, отражая изменения.

// Эта функция называется «Быстрое обновление». Она дает вам мгновенную обратную связь о любых внесенных вами изменениях и поставляется с предварительно настроенным Next.js.

// Напомним, ваш код пошел из этого...

/*
<html>
  <body>
    <div id="app"></div>

    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script type="text/jsx">
      const app = document.getElementById("app")

      function Header({ title }) {
        return <h1>{title ? title : "Default title"}</h1>
      }

      function HomePage() {
        const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"]
        const [likes, setLikes] = React.useState(0)

        function handleClick() {
          setLikes(likes + 1)
        }

        return (
          <div>
            <Header title="Develop. Preview. Ship. 🚀" />
            <ul>
              {names.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>

            <button onClick={handleClick}>Like ({likes})</button>
          </div>
        )
      }

      ReactDOM.render(<HomePage />, app)
    </script>
  </body>
</html>
*/

// ...к этому:

import { useState } from 'react';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}

// На первый взгляд, это небольшое сокращение количества строк кода, но оно помогает кое-что подчеркнуть: React — это библиотека, предоставляющая необходимые примитивы для создания современного интерактивного пользовательского интерфейса. Но предстоит еще поработать над объединением созданного вами пользовательского интерфейса в приложение.

// Глядя на миграцию, вы, возможно, уже почувствовали преимущества использования Next.js. Вы удалили сценарий Babel, ощутив сложную конфигурацию инструментов, о которой вам больше не придется думать. Вы также видели Fast Refresh в действии — лишь одну из многих функций, которые можно ожидать от Next.js для разработчиков.

//# Следующие шаги
// Поздравляем с созданием вашего первого приложения Next.js!

// Подводя итог, вы изучили фундаментальные знания о React и Next.js и перешли от простого приложения React к приложению Next.js.

/*
Теперь вы можете выбрать следующий шаг в своем путешествии по Next.js. Ты можешь:
1. Узнайте, как использовать Next.js, создав свое первое приложение. Этот курс познакомит вас с основными функциями Next.js и поможет вам попрактиковаться в создании более сложного проекта.
2. Погрузитесь глубже в то, как работает Next.js, продолжив этот курс.
*/

// На следующем уроке мы рассмотрим, как работает Next.js, представив некоторые связанные концепции веб-разработки. Знакомство с этими концепциями поможет расширить ваши знания и облегчит изучение более продвинутых функций Next.js.
