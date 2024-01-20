//# navigator.geolocation (ДАННЫЕ О ГЕОЛОКАЦИИ)
/*
- Получить доступ к геолокации позволяет свойство navigator.geolocation объекта navigator.
- Когда мы воспользуемся свойством navigator.geolocation, в ответе получим интерфейс Geolocation, — он позволяет работать с данными геопозиции.
- Для Geolocation есть различные методы: getCurrentPosition, watchPosition и clearWatch. Если их вызвать, то пользователь получит уведомление.
- Если человек одобрит запрос, мы получим возможность работать с интерфейсом GeolocationPosition.
*/

//# Возвращает
//* Объект Geolocation API
/*
clearWatch: ƒ clearWatch()
getCurrentPosition: ƒ getCurrentPosition()
watchPosition: ƒ watchPosition()
constructor: ƒ Geolocation()
Symbol(Symbol.toStringTag): "Geolocation"
[[Prototype]]: Object
*/

//# Получение геолокации
document.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(position => {
    console.log(position);
  });
});

//# Пример использования
const result = document.querySelector('#result');
const button = document.querySelector('#button');

function getPosition(position) {
  const link = document.createElement('a');
  link.href = `https://yandex.ru/maps/?ll=${position.coords.longitude}%2C${position.coords.latitude}&z=11.6`;
  link.target = '_blank';
  link.textContent = 'Моя позиция на карте';
  result.append(link);
}

function error() {
  console.log('Ошибка');
}

const options = {
  enableHighAccuracy: true, // просит передавать геолокацию особенно точно, жертвуя энергией устройства и временем
  maximumAge: 1000, // устанавливает время, по истечению которого кэшированную геолокацию следует обновить
  timeout: 3600, // устанавливает временной интервал обновления геолокации
};

function handleClick() {
  navigator.geolocation.getCurrentPosition(getPosition, error, options);
}

button.addEventListener('click', handleClick);
