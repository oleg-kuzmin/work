//# navigator (Объект навигации)
// Свойство Navigator.geolocation только для чтения, возвращающие объект Geolocation, который даёт веб контенту доступ к месторасположению устройства.

//# получение гео-локации
document.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(position => {
    console.log(position);
  });
});

//# пример
const result = document.querySelector('#result');
const button = document.querySelector('#button');

function getPosition(position) {
  const link = document.createElement('a');
  link.href = `https://yandex.ru/maps/?ll=${position.coords.longitude}%2C${position.coords.latitude}&z=11.6`;
  link.target = '_blank';
  link.textContent = 'Моя позиция на карте';
  result.append(link);
  console.log(position);
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
  console.log(navigator);
  navigator.geolocation.getCurrentPosition(getPosition, error, options);
}

button.addEventListener('click', handleClick);
