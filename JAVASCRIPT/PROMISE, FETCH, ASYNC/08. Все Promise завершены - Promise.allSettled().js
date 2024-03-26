//# Все Promise завершены - Promise.allSettled()
/*
- Метод Promise.allSettled всегда ждёт завершения всех промисов. В массиве результатов будет

{status:"fulfilled", value: { объект ответа } } для успешных завершений,
{status:"rejected", reason: { объект ошибки } } для ошибок.

- Например, мы хотели бы загрузить информацию о множестве пользователей. Даже если в каком-то запросе ошибка, нас всё равно интересуют остальные.
*/

//# Пример
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url',
];

Promise.allSettled(urls.map(url => fetch(url))).then(results => {
  results.forEach((result, num) => {
    if (result.status == 'fulfilled') {
      alert(`${urls[num]}: ${result.value.status}`);
    }
    if (result.status == 'rejected') {
      alert(`${urls[num]}: ${result.reason}`);
    }
  });
});

const array = [
  { status: 'fulfilled', value: {} },
  { status: 'fulfilled', value: {} },
  { status: 'rejected', reason: {} },
];
