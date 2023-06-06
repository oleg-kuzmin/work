//# Get - запрос
//* backend
app.get('/', (req, res) => {
  res.send(
    JSON.stringify({
      test: 'ok',
    })
  );
  res.status(200).json('Сервер работает');
});

//* frontend
function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

function get() {
  return fetch('http://127.0.0.1:5000/').then(checkResponse);
}

get()
  .then(res => console.log(res))
  .catch(err => console.error(err));
