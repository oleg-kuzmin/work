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


