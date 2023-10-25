//# Реагирование на ввод с помощью состояния
// React предоставляет декларативный способ манипулирования пользовательским интерфейсом. Вместо того чтобы напрямую управлять отдельными частями пользовательского интерфейса, вы описываете различные состояния, в которых может находиться ваш компонент, и переключаетесь между ними в ответ на ввод пользователя. Это похоже на то, как дизайнеры думают о пользовательском интерфейсе.

/* Вы узнаете
- Чем декларативное программирование пользовательского интерфейса отличается от императивного программирования пользовательского интерфейса
- Как перечислить различные визуальные состояния, в которых может находиться ваш компонент
- Как вызвать изменения между различными визуальными состояниями из кода
*/

//# Как декларативный пользовательский интерфейс отличается от императивного
/* Когда вы проектируете взаимодействие пользовательского интерфейса, вы, вероятно, думаете о том, как пользовательский интерфейс изменяется в ответ на действия пользователя. Рассмотрим форму, которая позволяет пользователю отправить ответ:

- Когда вы вводите что-то в форму, кнопка "Отправить" становится активной.
- Когда вы нажимаете кнопку "Отправить", и форма, и кнопка отключаются, и появляется волчок.
- Если сетевой запрос прошел успешно, форма спрячется, и появится сообщение "Спасибо".
- Если сетевой запрос не удался, появляется сообщение об ошибке, и форма снова становится открытой.
*/

// В императивном программировании вышесказанное прямо соответствует тому, как вы реализуете взаимодействие. Вы должны написать точные инструкции для манипулирования пользовательским интерфейсом в зависимости от того, что только что произошло. Вот еще один способ подумать об этом: представьте, что вы едете рядом с кем-то в машине и говорите ему пошагово, куда ехать.

// Они не знают, куда вы хотите поехать, они просто следуют вашим командам. (И если вы ошибетесь в указаниях, вы окажетесь не в том месте!) Это называется императивным, потому что вы должны "командовать" каждым элементом, от спиннера до кнопки, указывая компьютеру как обновить пользовательский интерфейс.

// В этом примере императивного программирования пользовательского интерфейса форма построена без React. Она использует только браузерный DOM:

//* index.js
async function handleFormSubmit(e) {
  e.preventDefault();
  disable(textarea);
  disable(button);
  show(loadingMessage);
  hide(errorMessage);
  try {
    await submitForm(textarea.value);
    show(successMessage);
    hide(form);
  } catch (err) {
    show(errorMessage);
    errorMessage.textContent = err.message;
  } finally {
    hide(loadingMessage);
    enable(textarea);
    enable(button);
  }
}

function handleTextareaChange() {
  if (textarea.value.length === 0) {
    disable(button);
  } else {
    enable(button);
  }
}

function hide(el) {
  el.style.display = 'none';
}

function show(el) {
  el.style.display = '';
}

function enable(el) {
  el.disabled = false;
}

function disable(el) {
  el.disabled = true;
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() == 'istanbul') {
        resolve();
      } else {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      }
    }, 1500);
  });
}

let form = document.getElementById('form');
let textarea = document.getElementById('textarea');
let button = document.getElementById('button');
let loadingMessage = document.getElementById('loading');
let errorMessage = document.getElementById('error');
let successMessage = document.getElementById('success');
form.onsubmit = handleFormSubmit;
textarea.oninput = handleTextareaChange;

// Манипулирование пользовательским интерфейсом в императивном порядке достаточно хорошо работает для отдельных примеров, но в более сложных системах управлять им становится экспоненциально сложнее. Представьте себе обновление страницы, полной различных форм, как эта. Добавление нового элемента пользовательского интерфейса или нового взаимодействия потребует тщательной проверки всего существующего кода, чтобы убедиться, что вы не внесли ошибку (например, забыли показать или скрыть что-то).

// React был создан для решения этой проблемы.

// В React вы не управляете пользовательским интерфейсом напрямую - то есть не включаете, не отключаете, не показываете и не скрываете компоненты. Вместо этого вы заявляете, что вы хотите показать, а React сам решает, как обновить пользовательский интерфейс. Подумайте о том, чтобы сесть в такси и сказать водителю, куда вы хотите поехать, вместо того, чтобы сказать ему, куда именно повернуть. Это работа водителя - доставить вас туда, и он может даже знать некоторые короткие пути, о которых вы не подумали!

//# Размышления о декларативном интерфейсе
/* Вы уже видели выше, как реализовать форму императивно. Чтобы лучше понять, как мыслить в React, ниже вы пройдете через повторную реализацию этого пользовательского интерфейса в React:
1. Определите различные визуальные состояния вашего компонента
2. Определите, что вызывает изменение состояния.
3. Представьте состояние в памяти с помощью useState.
4. Удалите любые несущественные переменные состояния
5. Подключите обработчики событий для установки состояния
*/

//# Шаг 1: Определите различные визуальные состояния вашего компонента
// В компьютерных науках вы можете услышать о том, что "машина состояний" находится в одном из нескольких "состояний". Если вы работаете с дизайнером, вы могли видеть макеты для различных "визуальных состояний". React стоит на пересечении дизайна и информатики, поэтому обе эти идеи являются источниками вдохновения.

/* Во-первых, вам нужно представить все различные "состояния" пользовательского интерфейса, которые может увидеть пользователь:
- Пусто: Форма имеет отключенную кнопку "Отправить".
- Типирование: Форма имеет включенную кнопку "Отправить".
- Отправка: Форма полностью отключена. Отображается спиннер.
- Успех: Вместо формы отображается сообщение "Спасибо".
- Ошибка: То же самое, что и состояние типирования, но с дополнительным сообщением об ошибке.
*/

// Как и дизайнеру, вам нужно "смоделировать" или создать "макеты" для различных состояний, прежде чем добавлять логику. Например, здесь показан макет только для визуальной части формы. Этот макет управляется параметром status со значением по умолчанию 'empty':

//* App.js
function Form({ status = 'empty' }) {
  if (status === 'success') {
    return <h1>That's right!</h1>;
  }
  return (
    <>
      <h2>City quiz</h2>
      <p>In which city is there a billboard that turns air into drinkable water?</p>
      <form>
        <textarea />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

// Вы можете назвать этот пропс как угодно, именование не имеет значения. Попробуйте изменить status = 'empty' на status = 'success', чтобы увидеть появление сообщения об успехе. Мокинг позволяет вам быстро проработать пользовательский интерфейс, прежде чем вы подключите какую-либо логику. Вот более подробный прототип того же компонента, все еще "управляемый" пропсом status:

//* App.js
function Form({
  // Try 'submitting', 'error', 'success':
  status = 'empty',
}) {
  if (status === 'success') {
    return <h1>That's right!</h1>;
  }
  return (
    <>
      <h2>City quiz</h2>
      <p>In which city is there a billboard that turns air into drinkable water?</p>
      <form>
        <textarea disabled={status === 'submitting'} />
        <br />
        <button disabled={status === 'empty' || status === 'submitting'}>Submit</button>
        {status === 'error' && <p className="Error">Good guess but a wrong answer. Try again!</p>}
      </form>
    </>
  );
}

//* Отображение множества визуальных состояний одновременно
// Если компонент имеет много визуальных состояний, может быть удобно показать их все на одной странице:

//* App.js
import Form from './Form.js';
let statuses = ['empty', 'typing', 'submitting', 'success', 'error'];
function App() {
  return (
    <>
      {statuses.map(status => (
        <section key={status}>
          <h4>Форма ({status}):</h4>
          <Form status={status} />
        </section>
      ))}
    </>
  );
}

//* Form.js
function Form({ status }) {
  if (status === 'success') {
    return <h1>That's right!</h1>;
  }
  return (
    <form>
      <textarea disabled={status === 'submitting'} />
      <br />
      <button disabled={status === 'empty' || status === 'submitting'}>Submit</button>
      {status === 'error' && <p className="Error">Good guess but a wrong answer. Try again!</p>}
    </form>
  );
}
// Подобные страницы часто называют “живыми styleguides” или “storybooks”.
//* Отображение множества визуальных состояний одновременно

//# Шаг 2: Определите, что вызывает эти изменения состояния
/* Вы можете инициировать обновление состояния в ответ на два вида входных данных:
- человеческие входы, такие как нажатие кнопки, ввод текста в поле, переход по ссылке.
- Компьютерные данные, такие как получение ответа от сети, завершение тайм-аута, загрузка изображения.
*/

/* В обоих случаях вы должны установить переменные состояния для обновления пользовательского интерфейса. Для разрабатываемой вами формы вам нужно будет изменять состояние в ответ на несколько различных входов:
- Изменение текстового ввода (человек) должно переводить его из состояния Empty в состояние Typing или обратно, в зависимости от того, пустое текстовое поле или нет.
- Нажатие кнопки "Отправить" (человек) должно перевести его в состояние Отправить.
- Успешный ответ сети (компьютер) должен перевести его в состояние Успех.
- Неуспешный сетевой ответ (компьютер) должен перевести его в состояние Ошибка с соответствующим сообщением об ошибке.
*/

// Обратите внимание, что человеческий ввод часто требует обработчиков событий!

// Чтобы помочь визуализировать этот поток, попробуйте нарисовать на бумаге каждое состояние в виде круга с меткой, а каждое изменение между двумя состояниями - в виде стрелки. Таким образом можно набросать множество потоков и отсеять ошибки задолго до внедрения.
