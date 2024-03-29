//# Извлечение логики состояний в редуктор
// Компоненты с большим количеством обновлений состояния, распределенных по многим обработчикам событий, могут стать непомерно сложными. В таких случаях вы можете объединить всю логику обновления состояния за пределами вашего компонента в одной функции, называемой редуктором.

/* Вы узнаете
- Что такое функция редуктора
- Как рефакторить useState в useReducer.
- Когда использовать редуктор
- Как написать редуктор
*/

//# Консолидируйте логику состояния с помощью редуктора
// По мере роста сложности ваших компонентов становится все труднее увидеть с первого взгляда все различные способы обновления состояния компонента. Например, компонент TaskApp ниже хранит массив tasks в состоянии и использует три различных обработчика событий для добавления, удаления и редактирования задач:

//* App.js
import { useState } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';

function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  }

  function handleChangeTask(task) {
    setTasks(
      tasks.map(t => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter(t => t.id !== taskId));
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];

// Каждый из его обработчиков событий вызывает setTasks для обновления состояния. По мере роста этого компонента увеличивается и количество логики состояния, разбросанной по всему компоненту. Чтобы уменьшить эту сложность и держать всю логику в одном легкодоступном месте, вы можете переместить логику состояния в одну функцию вне вашего компонента, называемую "редуктором".

/* Редукторы - это другой способ работы с состоянием. Вы можете перейти от useState к useReducer в три шага:
1. Переход от установки состояния к диспетчеризации действий.
2. Напишите функцию редуктора.
3. Используйте редуктор из вашего компонента.
*/

//# Шаг 1: Переход от установки состояния к диспетчеризации действий
// Ваши обработчики событий в настоящее время определяют что делать, устанавливая состояние:
function handleAddTask(text) {
  setTasks([
    ...tasks,
    {
      id: nextId++,
      text: text,
      done: false,
    },
  ]);
}

function handleChangeTask(task) {
  setTasks(
    tasks.map(t => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    })
  );
}

function handleDeleteTask(taskId) {
  setTasks(tasks.filter(t => t.id !== taskId));
}

/* Удалите всю логику установки состояния. Остаются только три обработчика событий:
- handleAddTask(text) вызывается, когда пользователь нажимает кнопку "Добавить".
- handleChangeTask(task) вызывается, когда пользователь переключает задачу или нажимает "Сохранить".
- handleDeleteTask(taskId) вызывается, когда пользователь нажимает "Delete".
*/

// Управление состоянием с помощью редукторов несколько отличается от непосредственного задания состояния. Вместо того чтобы говорить React "что делать", устанавливая состояние, вы указываете, "что пользователь только что сделал", отправляя "действия" из ваших обработчиков событий. (Логика обновления состояния будет жить в другом месте!) Таким образом, вместо "установки задач" через обработчик событий, вы отправляете действие "добавить/изменить/удалить задачу". Это более точно описывает намерения пользователя.

function handleAddTask(text) {
  dispatch({
    type: 'added',
    id: nextId++,
    text: text,
  });
}

function handleChangeTask(task) {
  dispatch({
    type: 'changed',
    task: task,
  });
}

function handleDeleteTask(taskId) {
  dispatch({
    type: 'deleted',
    id: taskId,
  });
}

// Объект, который вы передаете в dispatch, называется "действие":
function handleDeleteTask(taskId) {
  dispatch(
    // "action" object:
    {
      type: 'deleted',
      id: taskId,
    }
  );
}

// Это обычный объект JavaScript. Вы сами решаете, что в него поместить, но в целом он должен содержать минимальную информацию о том, что произошло. (Саму функцию dispatch вы добавите на следующем этапе).

// Объект действия может иметь любую форму.

// По общему правилу, принято задавать ему строку type, описывающую произошедшее, и передавать любую дополнительную информацию в других полях. Тип специфичен для компонента, поэтому в данном примере подойдет либо 'added', либо 'added_task'. Выберите имя, которое говорит о том, что произошло!

dispatch({
  // specific to component
  type: 'what_happened',
  // other fields go here
});

//# Шаг 2: Напишите функцию-редуктор
// Редукторная функция - это то место, где вы будете размещать логику состояния. Она принимает два аргумента, текущее состояние и объект действия, и возвращает следующее состояние:

function yourReducer(state, action) {
  // return next state for React to set
}

// React установит состояние на то, что вы вернете из редуктора.

/* Чтобы перенести логику установки состояния из обработчиков событий в функцию редуктора в этом примере, необходимо:
1. Объявите текущее состояние (tasks) в качестве первого аргумента.
2. Объявить объект action в качестве второго аргумента.
3. Вернуть следующее состояние из редуктора (в которое React установит состояние).
*/

// Вот вся логика установки состояния, перенесенная в функцию reducer:

function tasksReducer(tasks, action) {
  if (action.type === 'added') {
    return [
      ...tasks,
      {
        id: action.id,
        text: action.text,
        done: false,
      },
    ];
  } else if (action.type === 'changed') {
    return tasks.map(t => {
      if (t.id === action.task.id) {
        return action.task;
      } else {
        return t;
      }
    });
  } else if (action.type === 'deleted') {
    return tasks.filter(t => t.id !== action.id);
  } else {
    throw Error('Unknown action: ' + action.type);
  }
}

// Поскольку функция reducer принимает состояние (tasks) в качестве аргумента, вы можете объявить его вне вашего компонента. Это уменьшает уровень отступов и может сделать ваш код более легким для чтения.

// В приведенном выше коде используются операторы if/else, но принято использовать операторы switch внутри редукторов. Результат тот же, но читать операторы switch с первого взгляда может быть проще.

// Мы будем использовать их в остальной части этой документации следующим образом:

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

// Мы рекомендуем заключать каждый блок case в фигурные скобки { и }, чтобы переменные, объявленные внутри разных case, не конфликтовали друг с другом. Кроме того, блок case обычно должен заканчиваться return. Если вы забудете return, код "провалится" в следующий case, что может привести к ошибкам!

// Если вы еще не освоились с операторами switch, то вполне можно использовать if/else.

//* Почему редукторы называются именно так?
// Хотя редукторы могут "уменьшить" количество кода в вашем компоненте, на самом деле они названы в честь операции reduce(), которую вы можете выполнять над массивами.

// Операция reduce() позволяет вам взять массив и "накопить" одно значение из многих:
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((result, number) => result + number); // 1 + 2 + 3 + 4 + 5

// Функция, которую вы передаете в reduce, известна как "reducer". Она принимает результат на данный момент и текущий элемент, а затем возвращает следующий результат. React reducers - пример той же идеи: они принимают состояние на данный момент и действие, а возвращают следующее состояние. Таким образом, они накапливают действия со временем в состояние.

// Вы даже можете использовать метод reduce() с initialState и массивом actions для вычисления конечного состояния, передав ему свою функцию reducer:

//* taskReducer.js
function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

//* index.js
import tasksReducer from './tasksReducer.js';

let initialState = [];
let actions = [
  { type: 'added', id: 1, text: 'Visit Kafka Museum' },
  { type: 'added', id: 2, text: 'Watch a puppet show' },
  { type: 'deleted', id: 1 },
  { type: 'added', id: 3, text: 'Lennon Wall pic' },
];

let finalState = actions.reduce(tasksReducer, initialState);

const output = document.getElementById('output');
output.textContent = JSON.stringify(finalState, null, 2);

// Скорее всего, вам не понадобится делать это самостоятельно, но это похоже на то, что делает React!
//* Почему редукторы называются именно так?

//# Шаг 3: Используйте редуктор из вашего компонента
// Наконец, вам нужно подключить tasksReducer к вашему компоненту. Импортируйте хук useReducer из React:
import { useReducer } from 'react';

// Тогда вы можете заменить useState:
const [tasksState, setTasksState] = useState(initialTasks);

// с useReducer следующим образом:
const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

// Хук useReducer похож на useState - вы должны передать ему начальное состояние, а он возвращает значение состояния и способ установки состояния (в данном случае функцию диспетчеризации). Но он немного отличается.

/* Хук useReducer принимает два аргумента:
1. Функция редуктора
2. Начальное состояние
*/

/* И возвращает:
1. Значение с состоянием
2. Диспетчерская функция (для "отправки" действий пользователя на редуктор).
*/

// Теперь он полностью подключен! Здесь редуктор объявлен в нижней части файла компонента:

//* App.js
import { useReducer } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';

function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
    </>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

nextId = 3;
initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];

// При желании можно даже переместить редуктор в другой файл:

//* App.js
import { useReducer } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import tasksReducer from './tasksReducer.js';

function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
    </>
  );
}

nextId = 3;
initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];

//* tasksReducer.js
function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

// Логику компонентов легче читать, когда вы разделяете проблемы подобным образом. Теперь обработчики событий только определяют что произошло, отправляя действия, а функция reducer определяет как обновляется состояние в ответ на них.

//# Сравнение useState и useReducer
// Редукторы не лишены недостатков! Вот несколько способов сравнить их:

// Размер кода: Как правило, при использовании useState вам придется написать меньше кода. При использовании useReducer вам придется написать как функцию reducer, так и действия диспетчеризации. Однако useReducer может помочь сократить код, если многие обработчики событий изменяют состояние аналогичным образом.

// Удобство чтения: useState очень легко читается, когда обновления состояния просты. Когда они становятся более сложными, они могут раздуть код вашего компонента и сделать его трудным для сканирования. В этом случае useReducer позволяет вам чисто отделить как логику обновления от что произошло обработчиков событий.

// Отладка: Когда у вас есть ошибка с useState, может быть трудно сказать, где состояние было установлено неправильно, и почему. С useReducer вы можете добавить консольный журнал в ваш reducer, чтобы видеть каждое обновление состояния и почему это произошло (из-за какого действия). Если каждое действие корректно, вы будете знать, что ошибка в самой логике редуктора. Однако, вам придется просмотреть больше кода, чем при использовании useState.

// Тестирование: Редуктор - это чистая функция, которая не зависит от вашего компонента. Это означает, что вы можете экспортировать и тестировать его отдельно, в изоляции. Хотя обычно лучше тестировать компоненты в более реалистичной среде, для сложной логики обновления состояния может быть полезно утверждать, что ваш редуктор возвращает определенное состояние для определенного начального состояния и действия.

// Личные предпочтения: Некоторым людям нравятся редукторы, другим нет. Это нормально. Это вопрос предпочтений. Вы всегда можете конвертировать между useState и useReducer туда и обратно: они эквивалентны!

// Мы рекомендуем использовать reducer, если вы часто сталкиваетесь с ошибками, связанными с некорректным обновлением состояния какого-либо компонента, и хотите внести больше структуры в его код. Вы не обязаны использовать редукторы для всего: смело сочетайте их друг с другом! Вы даже можете использовать State и использовать Reducer в одном и том же компоненте.

//# Правильное написание редукторов
// Помните об этих двух советах при написании редукторов:

// Редукторы должны быть чистыми. Подобно функциям обновления состояния, редукторы работают во время рендеринга! (Действия ставятся в очередь до следующего рендера.) Это означает, что редукторы должны быть чистыми - одинаковые входы всегда приводят к одинаковому выходу. Они не должны посылать запросы, планировать таймауты или выполнять какие-либо побочные эффекты (операции, которые влияют на вещи за пределами компонента). Они должны обновлять объекты и массивы без мутаций.

// Каждое действие описывает одно взаимодействие пользователя, даже если оно приводит к нескольким изменениям данных. Например, если пользователь нажимает кнопку "Reset" на форме с пятью полями, управляемыми редуктором, логичнее отправить одно действие reset_form, чем пять отдельных действий set_field. Если вы регистрируете каждое действие в редукторе, этот журнал должен быть достаточно ясным, чтобы вы могли восстановить, какие взаимодействия или ответы происходили в каком порядке. Это помогает при отладке!

//# Написание кратких редукторов с помощью Immer
// Так же, как и в случае с update objects и arrays в обычном состоянии, вы можете использовать библиотеку Immer, чтобы сделать редукторы более лаконичными. Здесь useImmerReducer позволяет вам мутировать состояние с помощью push или arr[i] = присваивания:

//* App.js
import { useImmerReducer } from 'use-immer';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';

function tasksReducer(draft, action) {
  switch (action.type) {
    case 'added': {
      draft.push({
        id: action.id,
        text: action.text,
        done: false,
      });
      break;
    }
    case 'changed': {
      const index = draft.findIndex(t => t.id === action.task.id);
      draft[index] = action.task;
      break;
    }
    case 'deleted': {
      return draft.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

function TaskApp() {
  const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
    </>
  );
}

nextId = 3;
initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];

// Редукторы должны быть чистыми, поэтому они не должны мутировать состояние. Но Immer предоставляет вам специальный объект draft, который безопасен для мутации. Под капотом Immer создаст копию вашего состояния с изменениями, которые вы внесли в draft. Вот почему редукторы, управляемые useImmerReducer, могут мутировать свой первый аргумент и не должны возвращать состояние.

//# Итого
/*
- Чтобы перейти от useState к useReducer
  - Отправляйте действия из обработчиков событий.
  - Напишите функцию-редуктор, которая возвращает следующее состояние для заданного состояния и действия.
  - Замените useState на useReducer.
- Редукторы требуют написания большего количества кода, но они помогают при отладке и тестировании.
- Редукторы должны быть чистыми.
- Каждое действие описывает одно взаимодействие с пользователем.
- Используйте Immer, если вы хотите писать редукторы в мутирующем стиле.
*/
