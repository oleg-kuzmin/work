// когда движок создаст DOM-узел, вёрстка «дёрнется», освободив место для нового элемента (картинки). Затем, когда изображение загрузится, вёрстка дёрнется ещё раз при появлении картинки на экране.

// чтобы этого избежать, нужно создавать DOM-узел уже после того, как изображение загружено.

//* колбэк, который нужно выполнить после того как изображение загрузится
function imageLoadCallback(evt) {
  document.body.append(evt.target); // после загрузки добавим элемент изображения в DOM
}

//* колбэк, который нужно выполнить в случае ошибки
function handleLoadError() {
  console.log('Всё идёт не по плану');
}

//* Функция для создания изображения
function loadImage(imageUrl, loadCallback, errorCallback) {
  const img = document.createElement('img');
  img.src = imageUrl;
  img.onload = loadCallback; // функция, которая записана в onload будет вызвана после загрузки изображения
  img.onerror = errorCallback; // функция, которая записана в onerror будет вызвана в случае ошибки
}

//* Теперь картинка появится в разметке только после загрузки
loadImage(
  'https://yastatic.net/q/logoaas/v1/Практикум.svg',
  imageLoadCallback
);