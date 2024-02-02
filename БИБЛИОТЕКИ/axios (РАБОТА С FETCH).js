//# axios (РАБОТА С FETCH)
//* npm i axios

//* Импорт в файл
import axios from 'axios';

//* Использование get-запрос
const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(res => {
  console.log(res.data);
});
