//# Решение
/*
- Дан union-тип Level с уровнями позиция для разработчиков. Он же назначен для интерфейса Developer.
- Необходимо создать функцию gradeDeveloper, которая будет принимать объект пользователя и менять в теле функции поле level.
*/

type Level = 'junior' | 'middle' | 'senior';

interface Developer {
  login: string;
  skills: string[];
  level: Level;
}

function gradeDeveloper(user: { level: Level }, newLevel: Level) {
  user.level = newLevel;
}

const user1: Developer = {
  login: 'Oleg',
  skills: ['Html', 'Css', 'JS'],
  level: 'junior',
};

gradeDeveloper(user1, 'senior');
