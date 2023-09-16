const playListTitles = [
  'Игорь Тальков. Лучшее',
  'Музыка категории Б',
  'Подборка с фестиваля FYRE'
];

function getRandomElement(arr) {
  const randomId = Math.floor(Math.random() * arr.length);
  return arr[randomId];
}