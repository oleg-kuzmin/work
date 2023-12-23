//# Атрибут src
// Адрес звукового файла задаётся с помощью атрибута src или тега <source>, который помещается внутри <audio>. Тег <source> позволяет добавить несколько форматов одного и того же файла на случай, если какой-то из них не будет поддерживаться браузером:

//# Пример src
<figure>
  <figcaption>Привет, я Алиса</figcaption>
  <audio controls src="hi-alice.mp3">
    Ваш браузер не поддерживает встроенное аудио. Попробуйте скачать его
    <a href="hi-alice.mp3" download>
      по ссылке
    </a>
  </audio>
</figure>;

//# Пример source
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  <source src="audio.ogg" type="audio/ogg" />
  <p>
    Ваш браузер не поддерживает встроенное аудио. Попробуйте
    <a href="audio.mp3" download>
      скачать
    </a>
    файл.
  </p>
</audio>;
