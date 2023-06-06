//# Post - запрос
//* backend
app.post('/', (req, res) => {
  console.log(req.body);
  res.send(JSON.stringify(req.body));
  res.status(200).json('Сервер работает');
});

//* frontend
function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

function get() {
  return fetch('http://127.0.0.1:5000/').then(checkResponse);
}

const data = {
  name: 'cat',
};

post(data)
  .then(res => console.log(res))
  .catch(err => console.error(err));
