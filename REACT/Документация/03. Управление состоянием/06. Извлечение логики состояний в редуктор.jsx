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
