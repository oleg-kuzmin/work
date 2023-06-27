//# async await try catch (Асинхронная функция)
/*
- Добавленное перед определением функции ключевое слово async делает функцию асинхронной.
- async пишется либо перед объявлением функции либо перед блоком параметров в стрелочной функции.
- Возвращаемое значение такой функции автоматически оборачивается в Promise.
- Асинхронные операции выполняются не сразу: код отправил запрос к API и ждёт, пока сервер пришлёт ответ.
- Ключевое слово await используется, чтобы дождаться выполнения асинхронной операции:
- Движок JavaScript при этом не блокируется и может выполнять другой код. Как только ответ получен, выполнение кода продолжается.
- Ключевое слово await работает только внутри асинхронных функций. Вызов его вне функции будет синтаксической ошибкой
- Используйте await Promise.all([...]) для параллельного выполнения нескольких независимых асинхронных функций.
- Используя async/await, мы делаем наш код последовательным: ожидаем выполнения одной асинхронной функции и лишь после запускаем другую. В примере ниже новости будут запрошены только после получения пользователя.
- Не смешивайте синтаксис async/await и Promise.then, старайтесь применять один подход на проекте: так код легче читать и поддерживать.
*/

//# пример
//* порядок выполнения
async function getStarWarsMovie(id) {
  const response = await fetch(`https://swapi.dev/api/films/${id}/`);
  console.log('ответ получен', response); // 2
  return response.json();
}
const movies = getStarWarsMovie(1).then(movie => {
  console.log(movie.title); // 3
});
console.log('результат вызова функции', movies); // 1

//* пример несколько then
async function getMainActorProfileFromMovie(id) {
  try {
    const movieResponse = await fetch(`https://swapi.dev/api/films/${id}/`);
    const movie = await movieResponse.json();
    const characterUrl = movie.characters[0].split('//')[1];
    const characterResponse = await fetch(`https://${characterUrl}`);
    return characterResponse.json();
  } catch (err) {
    console.error('Произошла ошибка!', err);
  }
}
getMainActorProfileFromMovie(1).then(profile => {
  console.log(profile);
});

//* function declaration
async function getUser() {
  // Возвращает информацию о пользователе
}
async function getNews() {
  // Возвращает список новостей
}
const user = await getUser();
const news = await getNews();

//* Promise.all
// Запустив getNews параллельно c getUser, мы в большинстве случаев получим результат быстрее. Promise.all() позволяет запустить запросы параллельно, при этом дожидаться результата мы можем как и раньше при помощи await.
const [user2, news2] = await Promise.all([getUser(), getNews()]);
