//# useReducer (РЕДЮСЕР)
/*
- По сути это функция, которая принимает некоторое состояние (state) и действие с этим состояние (action). Возвращает новое состояние. Используют когда много сущностей и логики.
*/

//# Синтаксис
const [value, dispatch] = useReducer(action, initialValue);
//* 1. action - функция-действие с этим состоянием (внутри будет вся логика обработки действия), можно создать отдельный файл
// Некий объект с ключами type (тип события), payload (данные для передачи)
//* 2. initialValue - начальное значение

// Возвращает
//* 1. value - Значение.
//* 2. dispatch - диспетчерская функция (для отправки действий пользователя).

//# Создание reducer
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

//# Использование
function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  // Можно создать отдельные функции с dispatch
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
