export default function copy(item) {
  navigator.clipboard
    .writeText(item)
    .then(() => {
      console.log('Скопировано');
    })
    .catch(err => {
      console.error('Ошибка копирования в буфер: ', err);
    });
}
