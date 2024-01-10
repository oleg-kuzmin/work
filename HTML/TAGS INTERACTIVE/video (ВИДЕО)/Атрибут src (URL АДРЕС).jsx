//# Атрибут src (URL АДРЕС)
// URL-адрес видео файла задаётся с помощью атрибута src или тега <source>, который помещается внутри <audio>. Тег <source> позволяет добавить несколько форматов одного и того же файла на случай, если какой-то из них не будет поддерживаться браузером.

//# Пример src
<video controls src="frontend.mp4" poster="frontend.jpg" width="580">
  Простите, но ваш браузер не поддерживает встроенные видео. Попробуйте скачать видео <a href="frontend.mp4">по этой ссылке</a>и открыть его
  на своём устройстве.
</video>;

//# Пример source
<video controls width="250">
  <source src="flower.webm" type="video/webm" />
  <source src="flower.mp4" type="video/mp4" />
  Ваш браузер не поддерживает встроенные видео
</video>;
