// * До JavaScript

// В эти давние времена веб-сайты целиком генерировались на сервере, вся разметка в готовом виде отдавалась браузеру и не изменялась на стороне клиента. Если пользователь нажимал на кнопку, браузер требовал от сервера новую разметку, и страница перезагружалась. Так происходило каждый раз при любом действии пользователя на сайте.

// * После JavaScript и AJAX

// После появления этих инструментов сайты стали интерактивными. JS позволял производить манипуляции с DOM-деревом, а технология AJAX — загружать данные на страницу по частям, без полной перезагрузки.

// Вычислительная мощность компьютеров и телефонов росла, средствами JS клиент стал выполнять всё более сложные операции в браузере. Программы начали постепенно мигрировать из десктопных версий в веб-версии. Но для написания сложных приложений всё ещё требовалось много усилий.

// * Библиотеки и фреймворки
// Тогда стали появляться библиотеки и фреймворки. Одна из первых — jQuery — мощный и изящный по тем меркам инструмент. Но даже с ним писать приложения было довольно трудоёмко.

// А дело было в императивности такой разработки. Добавление новых возможностей в приложение тех времён могло легко сломать существующую функциональность. Связанность одних фич с другими была колоссальной, и на разработку уходило много сил и времени. Например, при разработке интернет-магазина нужно было проверять, не сломалась ли функциональность личного кабинета после доделок в корзине. Это была изматывающая и кропотливая работа.

// Чтобы уменьшить боль разработчиков при написании сложных сайтов и приложений, создали первые фреймворки: Backbone.js, Knockout.js и Ember.js. Но поскольку это были фреймворки, а не библиотеки, они навязывали определённую структуру приложения и архитектурные решения. Разработчикам приходилось подолгу привыкать к новым способам написания кода. Фреймворки хоть и решали часть проблем, но всё же накладывали ограничения на свободомыслие разработчиков при проектировании сайтов и приложений. А ещё из-за императивного подхода возникала проблема масштабирования приложений.

// * И вот появилась она — библиотека React
// Всё изменилось в 2013 году, когда миру был представлен исходный код библиотеки React.

// Библиотека, в отличие от фреймворка, не накладывает ограничений на архитектуру приложения и предоставляет свободу выбора: разработчик сам решает, какую библиотеку использовать вместе с React для роутинга, управления состоянием, взаимодействия с сервером и так далее. React можно применять практически в любых условиях и усложнять стек, только если это нужно для функциональности приложения.

// У React множество преимуществ, которые выделяют его на фоне других библиотек. Вы убедитесь в этом сами, когда начнёте работать с библиотекой в рамках курса. А пока взгляните, как изящно выглядит код на React:

//React.js
import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Вы кликнули {count} раз(а)</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
}

// Поддержка кода на React выглядит посильной задачей даже для новичка, тогда как для масштабирования приложения на других фреймворках потребуется провести минимум полдня наедине с документацией. Именно декларативный подход к разработке пользовательских интерфейсов сделал библиотеку React таким удобным и популярным инструментом.

// В следующих уроках подробнее расскажем об особенностях React. В конце каждого урока вас ждут практические задания, которые помогут закрепить новые знания. Приступим!
